'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS, Project } from '@/data/portfolio';
import { useRouter } from 'next/navigation';

const categories = ['All', 'Design', 'Website', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const router = useRouter();

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.categories.includes(activeCategory as any));

  return (
    <section id="projects" className="py-24 px-6 bg-accent-blue/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-outfit font-bold text-4xl text-neutral-900 mb-4 flex items-center gap-3">
              <span className="w-12 h-1.5 bg-primary rounded-full inline-block" />
              Featured Projects
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl">
              A collection of my recent works in design and development, showcasing problem-solving and visual storytelling.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto no-scrollbar bg-white p-1 md:p-1.5 rounded-2xl shadow-sm border border-neutral-100 max-w-full whitespace-nowrap scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 flex-shrink-0 ${
                  activeCategory === cat ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary shadow-lg shadow-primary/30 rounded-xl"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => router.push(`/projects/${project.id}`)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white/60 backdrop-blur-md p-6 rounded-[32px] border border-primary/10 shadow-sm flex flex-col gap-4 group h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
             <ExternalLink className="w-6 h-6" />
           </div>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          {project.categories.map((cat) => (
            <div key={cat} className="px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-primary uppercase tracking-tighter shadow-sm border border-primary/10">
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-grow gap-2">
        <div className="flex gap-2 flex-wrap mb-1">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-0.5 bg-white text-[10px] text-gray-500 rounded-md border border-gray-100 font-medium">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="font-outfit font-bold text-xl text-gray-800 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <div className="mt-auto pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 bg-white text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all text-xs font-bold rounded-xl flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            Explore Project
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
