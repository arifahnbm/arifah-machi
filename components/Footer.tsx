'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-12 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest bg-white/20 backdrop-blur border-t border-gray-100 gap-6">
      <div>© 2026 Arifah Nur Basyiroh Machi</div>
      <div className="flex gap-4">
        <span>UI/UX Design</span>
        <span className="w-1 h-1 bg-gray-200 rounded-full my-auto"></span>
        <span>{t('footer.full_stack')}</span>
        <span className="w-1 h-1 bg-gray-200 rounded-full my-auto"></span>
        <span>Flutter</span>
      </div>
    </footer>
  );
}
