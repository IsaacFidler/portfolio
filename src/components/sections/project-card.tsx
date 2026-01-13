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
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card className="group h-full hover:shadow-lg transition-shadow overflow-hidden">
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
                <span className="text-sm text-muted-foreground font-medium">
                  {title}
                </span>
              </div>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            {status && (
              <Badge
                variant={status === 'Active' ? 'default' : 'outline'}
                className="text-xs"
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
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
