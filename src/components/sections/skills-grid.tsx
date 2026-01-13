'use client';

import { FadeIn, StaggerChildren, staggerItem } from '@/components/animations';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';
import { motion } from 'framer-motion';

export function SkillsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl heading-display mb-8">Skills</h2>
            <StaggerChildren className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Badge variant="secondary" className="text-sm py-1 px-3 font-data">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
