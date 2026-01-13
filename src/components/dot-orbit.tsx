'use client';

import { useEffect, useRef } from 'react';

interface DotOrbitProps {
  dotColor?: string;
  lineColor?: string;
  dotCount?: number;
  speed?: number;
  linkDistance?: number;
  dotSize?: number;
  interactionRadius?: number;
  interactionType?: 'attract' | 'repel' | 'none';
  interactionStrength?: number;
}

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  angle: number;
  orbitRadius: number;
  orbitSpeed: number;
}

export function DotOrbit({
  dotColor = 'rgba(46, 91, 255, 0.6)',
  lineColor = 'rgba(46, 91, 255, 0.15)',
  dotCount = 80,
  speed = 0.1,
  linkDistance = 150,
  dotSize = 2,
  interactionRadius = 150,
  interactionType = 'repel',
  interactionStrength = 50,
}: DotOrbitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initDots(rect.width, rect.height);
    };

    const initDots = (width: number, height: number) => {
      dotsRef.current = [];
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < dotCount; i++) {
        // Random position across canvas
        const x = Math.random() * width;
        const y = Math.random() * height;

        // Calculate orbit properties based on distance from center
        const dx = x - centerX;
        const dy = y - centerY;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);

        dotsRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          baseX: x,
          baseY: y,
          angle: Math.atan2(dy, dx),
          orbitRadius: distFromCenter,
          orbitSpeed: (Math.random() * 0.5 + 0.5) * speed * 0.002,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      // Update and draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Orbit movement
        dot.angle += dot.orbitSpeed;
        const targetX = centerX + Math.cos(dot.angle) * dot.orbitRadius;
        const targetY = centerY + Math.sin(dot.angle) * dot.orbitRadius;

        // Ease toward orbit position
        dot.x += (targetX - dot.x) * 0.02;
        dot.y += (targetY - dot.y) * 0.02;

        // Add some drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Mouse interaction
        if (interactionType !== 'none') {
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactionRadius && dist > 0) {
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            const strength = force * interactionStrength * 0.1;

            if (interactionType === 'repel') {
              dot.x -= Math.cos(angle) * strength;
              dot.y -= Math.sin(angle) * strength;
            } else {
              dot.x += Math.cos(angle) * strength;
              dot.y += Math.sin(angle) * strength;
            }
          }
        }

        // Wrap around edges
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        // Draw lines to nearby dots
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j];
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDistance) {
            const opacity = 1 - dist / linkDistance;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${opacity * 0.3})`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dotColor, lineColor, dotCount, speed, linkDistance, dotSize, interactionRadius, interactionType, interactionStrength]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
