'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Avatar className="w-32 h-32 md:w-40 md:h-40">
              <AvatarImage
                src="/isaacAvatarImage.JPG"
                alt="Isaac Fidler"
                className="object-cover translate-x-3 -translate-y-4 scale-120"
              />
              <AvatarFallback className="text-2xl">IF</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl heading-display"
            >
              Isaac Fidler
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Full-stack developer with a background in music computing. I build
              scalable web applications with a focus on clean code, great UX, and
              solving real problems. Passionate about shipping quality software.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mt-2"
            >
              <Badge variant="secondary" className="font-data">zac.fidler2@gmail.com</Badge>
              <Badge variant="secondary" className="font-data">+44 7368 318988</Badge>
              <Badge variant="secondary" className="font-data">London</Badge>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#2E5BFF] to-[#1E40AF] hover:from-[#4D6CFA] hover:to-[#2E5BFF] border-t border-white/10 shadow-lg shadow-[#2E5BFF]/20"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">About Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
