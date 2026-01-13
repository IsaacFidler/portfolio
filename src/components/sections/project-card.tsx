'use client';

import { staggerItem } from '@/components/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: string;
  icon?: string;
  gradient?: string;
  screenshot?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
  icon = '💻',
  gradient = 'from-primary/20 to-primary/5',
  screenshot,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(46, 91, 255, 0.15), transparent 40%)`,
        }}
      />

      <Card
        className={`group h-full overflow-hidden transition-all duration-300 ${
          isHovered
            ? 'border-[#2E5BFF]/50 shadow-lg shadow-[#2E5BFF]/10'
            : 'hover:shadow-lg'
        }`}
      >
        {/* Project Image or Placeholder */}
        <div className="aspect-video relative border-b border-border/50 overflow-hidden">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={`${title} screenshot`}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
            >
              <div className="text-center">
                <span className="text-5xl block mb-2">{icon}</span>
                <span className="text-sm text-muted-foreground font-data">
                  {title}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Asymmetric Content - offset for editorial look */}
        <CardHeader className="pb-3 relative">
          <div className="flex items-center justify-between mb-2">
            {status && (
              <Badge
                variant={status === 'Active' ? 'default' : 'outline'}
                className="text-xs font-data"
              >
                {status}
              </Badge>
            )}
            <div className="flex gap-1 ml-auto">
              {liveUrl && liveUrl !== '#' && (
                <Button size="sm" variant="ghost" asChild>
                  <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button size="sm" variant="ghost" asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <CardTitle className="text-lg heading-display">{title}</CardTitle>
          {/* Offset description for asymmetric layout */}
          <CardDescription className="-ml-1 mt-1">{description}</CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-data">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
