'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, Zap, Clock } from 'lucide-react';

const strengths = [
  { name: 'Adaptability', icon: Heart, color: 'bg-accent-blue/10 text-accent-blue' },
  { name: 'Continuous Learning', icon: Zap, color: 'bg-accent-blue/40 text-blue-600' },
  { name: 'Time Management', icon: Clock, color: 'bg-accent-lavender/40 text-purple-600' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/50 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-outfit font-bold text-4xl text-neutral-900 mb-8 flex items-center gap-3">
              <span className="w-12 h-1.5 bg-accent-blue rounded-full inline-block" />
              About Me
            </h2>
            
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
              <p className="bg-white/60 backdrop-blur-md p-8 rounded-[32px] border border-accent-blue/10 shadow-sm">
                “Hi! I&apos;m <span className="font-bold text-accent-blue">Arifah Nur Basyiroh Machi</span>, a student at Banyuwangi State Polytechnic, majoring in Business and Informatics, specializing in <span className="font-semibold underline decoration-accent-blue/30 underline-offset-4">UI/UX design, Next.js, Laravel, MySQL, and Flutter</span>. Familiar with project-based learning, I&apos;m learning how to develop web and mobile applications. I&apos;m continuously developing my technical and teamwork skills to become a responsive, solution-oriented developer, ready to face the challenges of the digital era.”
              </p>
            </div>
          </motion.div>

          {/* Right Side: Education & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
             {/* Education Card */}
             <div className="bg-white/60 backdrop-blur-md p-8 rounded-[32px] border border-accent-blue/10 shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <GraduationCap className="w-8 h-8 text-accent-blue" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-outfit font-bold text-2xl text-gray-800 leading-tight">
                      Bachelor of Applied Computer Science
                    </h3>
                    <p className="text-accent-blue font-semibold text-lg">Banyuwangi State Polytechnic</p>
                    <div className="flex flex-col text-gray-500 font-medium">
                      <span>Aug 2023 – Present</span>
                      <span>Banyuwangi, Indonesia</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
                      <Award className="w-5 h-5 text-accent-blue" />
                      <span className="font-bold text-accent-blue">GPA: 3.71 / 4.00</span>
                    </div>
                  </div>
                </div>
             </div>

             {/* Strengths - Moved from description */}
             <div className="flex flex-wrap gap-4">
              {strengths.map((s) => (
                <motion.div
                  key={s.name}
                  whileHover={{ y: -5, backgroundColor: "rgba(180, 212, 255, 0.1)" }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium shadow-sm border border-accent-blue/20 bg-white/60 backdrop-blur-sm transition-all`}
                >
                  <motion.div
                    animate={
                      s.name === 'Time Management' 
                        ? { rotate: 360 } 
                        : s.name === 'Adaptability' 
                        ? { scale: [1, 1.2, 1] } 
                        : { y: [0, -4, 0] }
                    }
                    transition={{
                      duration: s.name === 'Time Management' ? 8 : 2,
                      repeat: Infinity,
                      ease: s.name === 'Time Management' ? "linear" : "easeInOut"
                    }}
                  >
                    <s.icon className="w-5 h-5 text-accent-blue" />
                  </motion.div>
                  <span className="text-gray-700">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
