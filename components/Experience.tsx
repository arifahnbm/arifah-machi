'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative scroll-mt-24">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-lavender/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full font-bold text-sm mb-6 border border-accent-blue/20"
          >
            <Briefcase className="w-4 h-4" />
            <span>My Career Journey</span>
          </motion.div>
          <h2 className="font-outfit font-bold text-4xl text-neutral-900">Work & Organization Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-blue to-accent-lavender rounded-full transform md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content Card */}
      <div className="flex-1 w-full">
        <div className="bg-gradient-to-br from-accent-blue to-blue-400 p-8 rounded-[32px] border border-white/20 shadow-xl shadow-accent-blue/20 relative group hover:from-primary hover:to-primary-light hover:shadow-primary/30 transition-all duration-500 overflow-hidden text-white">
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex justify-between items-start flex-wrap gap-4">
               <div>
                  <h3 className="font-outfit font-bold text-2xl text-white">
                    {exp.role}
                  </h3>
                  <p className="text-white/90 font-semibold text-lg">{exp.organization}</p>
               </div>
               <div className="px-4 py-1.5 bg-white/20 text-white font-bold text-sm border border-white/30 rounded-xl flex items-center gap-2 backdrop-blur-sm">
                 <Calendar className="w-4 h-4" />
                 <span>{exp.period}</span>
               </div>
            </div>
            
            <p className="text-white/80 leading-relaxed italic text-sm">
              &quot;{exp.description}&quot;
            </p>
          </div>
          
          {/* Decorative Circle on Hover */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
        </div>
      </div>

      {/* Center Dot */}
      <div className="relative z-10 hidden md:flex items-center justify-center w-8 h-8 bg-white rounded-full border-2 border-accent-blue shadow-lg">
        <div className="w-2.5 h-2.5 bg-accent-blue rounded-full" />
      </div>

      {/* Spacer for empty side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
