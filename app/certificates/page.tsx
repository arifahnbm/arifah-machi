'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Award, Search, ShieldCheck, Download, ExternalLink, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CERTIFICATIONS, Certification } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function CertificatesPage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const types = ['All', ...Array.from(new Set(CERTIFICATIONS.map(c => c.type)))];

  const filteredCerts = CERTIFICATIONS.filter(cert => {
    const certName = language === 'id' ? (cert.name_id || cert.name) : cert.name;
    const certType = language === 'id' ? (cert.type_id || cert.type) : cert.type;
    
    const matchesSearch = certName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || cert.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => router.push('/#achievements')}
            className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm hidden md:block">{t('certs.back')}</span>
          </button>
          
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
             </div>
             <h1 className="font-outfit font-bold text-xl text-gray-900 hidden sm:block">{t('certs.title')}</h1>
          </div>

          <div className="w-10 h-10 md:w-32" /> {/* Spacer */}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="mb-12">
           <h2 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 mb-4">
             {t('certs.heading')} <span className="text-primary italic">{t('certs.heading_italic')}</span>
           </h2>
           <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
             {t('certs.desc')}
           </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
           <div className="relative flex-grow group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder={t('certs.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-gray-200 outline-none focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all shadow-sm"
              />
           </div>
           
           <div className="flex gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto no-scrollbar">
              {types.map((type) => {
                const isSelected = selectedType === type;
                const label = type === 'All' && language === 'id' ? 'Semua' : type === 'Design' && language === 'id' ? 'Desain' : type;
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                      isSelected 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
           </div>
        </div>

        {/* Results */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredCerts.map((cert) => {
                const certName = language === 'id' ? (cert.name_id || cert.name) : cert.name;
                const certType = language === 'id' ? (cert.type_id || cert.type) : cert.type;
                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 group cursor-pointer animate-enter"
                    onClick={() => setSelectedCert(cert)}
                  >
                     <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gray-50">
                        <Image 
                          src={cert.image} 
                          alt={certName} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform">
                              <Search className="w-5 h-5" />
                           </div>
                        </div>
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-lg shadow-sm">
                           <span className="text-[10px] font-bold text-primary uppercase">{cert.year}</span>
                        </div>
                     </div>

                     <h3 className="font-outfit font-bold text-xl text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors min-h-[56px] line-clamp-2">
                       {certName}
                     </h3>
                     
                     <div className="flex items-center gap-2 text-gray-400 mb-6 font-medium text-sm">
                        <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 text-gray-400" />
                        </div>
                        <span className="truncate">{cert.issuer}</span>
                     </div>

                     <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-500 border border-gray-100 uppercase tracking-wider">
                           {certType}
                        </span>
                        <div className="flex gap-2">
                           <button className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors">
                              <Download className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-32 text-center">
             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
             </div>
             <h3 className="font-outfit font-bold text-2xl text-gray-900 mb-2">{t('certs.no_found')}</h3>
             <p className="text-gray-500">{t('certs.no_found_desc')}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
               {/* Modal Header */}
               <div className="p-6 md:p-8 flex items-center justify-between border-b border-gray-100">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                        <h3 className="font-outfit font-bold text-xl text-gray-900">
                          {language === 'id' ? (selectedCert.name_id || selectedCert.name) : selectedCert.name}
                        </h3>
                        <p className="text-gray-500 text-sm font-medium">{selectedCert.issuer} • {selectedCert.year}</p>
                     </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>

               {/* Modal Body */}
               <div className="flex-grow p-4 md:p-8 overflow-auto bg-gray-50">
                  <div className="relative aspect-[4/3] md:aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                     <Image 
                        src={selectedCert.image} 
                        alt={selectedCert.name} 
                        fill 
                        className="object-contain" 
                        priority 
                        referrerPolicy="no-referrer"
                      />
                  </div>
               </div>

               {/* Modal Footer */}
               <div className="p-6 md:p-8 bg-white border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-center gap-6">
                     <div className="text-center sm:text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t('certs.id')}</p>
                        <p className="font-mono text-xs text-gray-700">CERT-{selectedCert.id.padStart(6, '0')}</p>
                     </div>
                     <div className="text-center sm:text-left">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{t('certs.verified')}</p>
                        <p className="text-xs font-bold text-gray-700">{selectedCert.year}</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-4 w-full sm:w-auto">
                     <button className="flex-grow sm:flex-none px-8 py-3 bg-gray-100 text-gray-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                        <Download className="w-5 h-5" />
                        {t('certs.download')}
                     </button>
                     <button className="flex-grow sm:flex-none px-8 py-3 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                        <ExternalLink className="w-5 h-5" />
                        {t('certs.verify')}
                     </button>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
