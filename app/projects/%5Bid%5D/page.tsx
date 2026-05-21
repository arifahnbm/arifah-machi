'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Box, Calendar, User, Briefcase, CheckCircle2 } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { PROJECTS } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { language, t } = useLanguage();
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">{language === 'id' ? 'Proyek Tidak Ditemukan' : 'Project Not Found'}</h1>
        <button 
          onClick={() => router.push('/#projects')}
          className="px-6 py-2 bg-primary text-white rounded-xl"
        >
          {t('project_detail.back')}
        </button>
      </div>
    );
  }

  const title = language === 'id' ? (project.title_id || project.title) : project.title;
  const description = language === 'id' ? (project.description_id || project.description) : project.description;
  const background = language === 'id' ? (project.background_id || project.background) : project.background;
  const projectFor = language === 'id' ? (project.projectFor_id || project.projectFor) : project.projectFor;
  const role = language === 'id' ? (project.role_id || project.role) : project.role;
  const status = language === 'id' ? (project.status_id || project.status) : project.status;

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center pointer-events-none">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 pointer-events-auto hover:scale-105 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <div className="max-w-7xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
             >
                <div className="flex gap-2 mb-4">
                  {project.categories.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-primary/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/20">
                      {cat === 'Design' && language === 'id' ? 'Desain' : cat}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-7xl font-outfit font-bold text-white mb-4">
                  {title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-3xl font-medium">
                  {description}
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
               <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-accent-blue rounded-full" />
                    {t('project_detail.bg')}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                    {background}
                  </p>
               </div>

               <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                     <div className="w-1.5 h-8 bg-accent-blue rounded-full" />
                     {t('project_detail.features')}
                  </h2>
                  <div className="grid grid-cols-1 gap-12">
                    {project.features.map((feature, idx) => {
                      const fTitle = language === 'id' ? (feature.title_id || feature.title) : feature.title;
                      const fDesc = language === 'id' ? (feature.description_id || feature.description) : feature.description;
                      return (
                        <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="bg-gray-50 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-sm border border-gray-100"
                        >
                          <div className="relative w-full md:w-1/2 aspect-video">
                            <Image
                              src={feature.image}
                              alt={fTitle}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{fTitle}</h3>
                            <p className="text-gray-600 leading-relaxed">{fDesc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
               </div>
            </div>

            {/* Sidebar Meta */}
            <div className="space-y-8">
               <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 space-y-6">
                  <div className="space-y-4">
                    <MetaItem icon={User} label={t('project_detail.for')} value={projectFor} />
                    <MetaItem icon={Briefcase} label={t('project_detail.role')} value={role} />
                    <MetaItem icon={Calendar} label={t('project_detail.year')} value={project.year} />
                    <MetaItem icon={CheckCircle2} label={t('project_detail.status')} value={status} />
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-4">{t('project_detail.tech')}</p>
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 shadow-sm">
                            {t}
                          </span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-6 space-y-3">
                     {project.demoLink && (
                       <a 
                         href={project.demoLink} 
                         target="_blank" 
                         className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                       >
                         <ExternalLink className="w-4 h-4" />
                         {t('project_detail.see_app')}
                       </a>
                     )}
                     {project.githubLink && (
                       <a 
                         href={project.githubLink} 
                         target="_blank" 
                         className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                       >
                         <FaGithub className="w-4 h-4" />
                         {t('project_detail.github')}
                       </a>
                     )}
                     {project.prototypeLink && (
                       <a 
                         href={project.prototypeLink} 
                         target="_blank" 
                         className="w-full py-4 bg-white border border-gray-200 text-gray-800 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                       >
                         <Box className="w-4 h-4" />
                         {t('project_detail.prototype')}
                       </a>
                     )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation Footer */}
      <section className="py-20 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <button 
             onClick={() => router.push('/#projects')}
             className="text-gray-400 font-bold hover:text-primary transition-colors flex items-center gap-2"
           >
             <ChevronLeft className="w-4 h-4" />
             {t('project_detail.back_portfolio')}
           </button>
           
           <div className="flex gap-4">
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">{t('project_detail.ready')}</p>
                <button 
                   onClick={() => router.push('/#contact')}
                   className="text-primary font-outfit font-bold text-xl hover:underline"
                >
                  {t('project_detail.talk')}
                </button>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}

function MetaItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
        <Icon className="w-5 h-5 text-accent-blue" />
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
        <p className="text-gray-800 font-bold">{value}</p>
      </div>
    </div>
  );
}