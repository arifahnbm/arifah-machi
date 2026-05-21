'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, FileCode, Award, ShieldCheck } from 'lucide-react';
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image';
import { ACHIEVEMENTS, CERTIFICATIONS } from '@/data/portfolio';
import { useRouter } from 'next/navigation';

export default function Achievements() {
  const router = useRouter();
  return (
    <section id="achievements" className="py-24 px-6 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-outfit font-bold text-4xl text-neutral-900 mb-4 flex items-center gap-3">
            <span className="w-12 h-1.5 bg-primary rounded-full inline-block" />
            Achievements & Recognitions
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl">
            Celebrating milestones and dedication in my academic and professional journey.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/60 backdrop-blur-md rounded-[32px] border border-primary/10 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden m-4 rounded-[24px]">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="p-8 pt-2 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-tighter">{item.date}</p>
                </div>
                <h3 className="font-outfit font-bold text-xl text-gray-800 mb-2 leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-500 font-medium text-sm mb-6">{item.event}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.links.news && (
                    <a href={item.links.news} className="px-3 py-1.5 bg-white rounded-lg text-[10px] font-bold text-gray-700 border border-gray-100 hover:bg-neutral-50 flex items-center gap-1.5 transition-all">
                      <ExternalLink className="w-3 h-3" /> News
                    </a>
                  )}
                  {item.links.instagram && (
                    <a href={item.links.instagram} className="px-3 py-1.5 bg-white rounded-lg text-[10px] font-bold text-gray-700 border border-gray-100 hover:bg-neutral-50 flex items-center gap-1.5 transition-all">
                      <FaInstagram className="w-3 h-3" /> Instagram
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="bg-accent-blue/10 rounded-[3rem] p-12 border border-blue-100/50">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                 <ShieldCheck className="w-8 h-8 text-blue-500" />
               </div>
               <div>
                 <h3 className="font-outfit font-bold text-3xl text-neutral-900">Professional Certifications</h3>
                 <p className="text-neutral-500 font-medium">Validating my skills through recognized industry standards</p>
               </div>
            </div>
            <button 
              onClick={() => router.push('/certificates')}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold shadow-md hover:shadow-lg transition-all border border-blue-50"
            >
               View All Certificates
            </button>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-6 no-scrollbar snap-x scroll-smooth">
            {CERTIFICATIONS.slice(0, 3).map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white rounded-3xl snap-start p-6 shadow-xl shadow-neutral-200/40 border border-neutral-50 group hover:border-blue-200 transition-colors"
              >
                <div className="relative h-44 rounded-2xl overflow-hidden mb-6">
                   <Image src={cert.image} alt={cert.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                   <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold text-blue-600 shadow-sm">
                     {cert.year}
                   </div>
                </div>
                <h4 className="font-outfit font-bold text-lg text-neutral-900 mb-2 leading-tight h-14 line-clamp-2">
                  {cert.name}
                </h4>
                <div className="flex items-center gap-3 text-neutral-400 mb-4 font-medium text-sm">
                   <Award className="w-4 h-4 text-blue-400" />
                   <span className="truncate">{cert.issuer}</span>
                </div>
                <div className="px-4 py-2 bg-neutral-50 rounded-xl text-[11px] font-bold text-neutral-500 uppercase tracking-wider text-center border border-neutral-100">
                  {cert.type}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
