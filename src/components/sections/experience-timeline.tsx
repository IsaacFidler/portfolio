'use client';

import { FadeIn, StaggerChildren, staggerItem } from '@/components/animations';
import { Separator } from '@/components/ui/separator';
import { experience } from '@/data/experience';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
            <StaggerChildren className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative pl-6 border-l-2 border-muted-foreground/20"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
