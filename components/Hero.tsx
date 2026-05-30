'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Smartphone, Database, Code2 } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaFigma } from "react-icons/fa";
import Image from 'next/image';

const roles = ['Software Engineer', 'UI/UX Designer'];

const floatingTech = [
  { name: 'Next.js', icon: Code2, top: '-5%', left: '-10%', delay: 0 },
  { name: 'Figma', icon: FaFigma, top: '20%', right: '-15%', delay: 0.5 },
  { name: 'Flutter', icon: Smartphone, bottom: '15%', left: '-15%', delay: 1 },
  { name: 'Laravel', icon: Database, bottom: '-5%', right: '-5%', delay: 1.5 },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-24 md:pb-0 overflow-hidden scroll-mt-24">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-gray-800 tracking-tighter font-outfit">
            Hi! I'm Arifah <br/>
            <span className="gradient-text">Machi</span>
          </h1>

          <div className="h-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-quicksand font-bold text-accent-blue"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Continuously developing technical and teamwork skills to become a responsive, solution-oriented developer ready for the digital era.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 144, 188, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1j4fsMnVcjM7DccXcWJ_Pmc-Nq_R__blE/view?usp=sharing"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
            >
              View My CV
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#B4D4FF", color: "#FFFFFF" }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/arifahnbm"
              target="_blank"
              className="p-3 bg-white border border-accent-blue/30 text-accent-blue rounded-full font-semibold transition-all shadow-sm flex items-center justify-center"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, backgroundColor: "#B4D4FF", color: "#FFFFFF" }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/arifahnbm"
              target="_blank"
              className="p-3 bg-white border border-accent-blue/30 text-accent-blue rounded-full font-semibold transition-all shadow-sm flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 mb-16 md:mb-0">
            {/* Floating Tech Badges */}
            {floatingTech.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  delay: tech.delay,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute z-20 bg-white px-3 py-2 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2"
                style={{ 
                  top: tech.top, 
                  left: tech.left, 
                  right: tech.right, 
                  bottom: tech.bottom 
                }}
              >
                <tech.icon className="w-4 h-4 text-gray-800" />
                <span className="text-xs font-bold text-gray-800">{tech.name}</span>
              </motion.div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary rounded-[40px] shadow-2xl rotate-3" />
            
            <div className="absolute inset-0 bg-white border-4 border-white shadow-2xl overflow-hidden z-10 -rotate-3 transition-transform hover:rotate-0 rounded-[40px]">
              <Image
                id="hero-profile-image"
                src="/profile.webp"
                alt="Arifah Machi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur p-2 rounded-xl shadow-lg border border-primary/20 animate-bounce flex items-center justify-center w-12 h-12">
                <Image
                  src="/logo-arifah.png"
                  alt="Sakura"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-blue rounded-full opacity-40 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
