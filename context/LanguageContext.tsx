'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',

    // Hero
    'hero.hello': 'Hi! I\'m',
    'hero.description': 'Continuously developing technical and teamwork skills to become a responsive, solution-oriented developer ready for the digital era.',
    'hero.view_cv': 'View My CV',

    // About
    'about.title': 'About Me',
    'about.edu_title': 'Bachelor of Applied Computer Science',
    'about.edu_polytechnic': 'Banyuwangi State Polytechnic',
    'about.gpa': 'GPA: 3.71 / 4.00',
    'about.strength.adaptability': 'Adaptability',
    'about.strength.learning': 'Continuous Learning',
    'about.strength.time': 'Time Management',

    // Experience
    'experience.journey': 'My Career Journey',
    'experience.title': 'Work & Organization Experience',

    // Achievements
    'achievements.title': 'Achievements & Recognitions',
    'achievements.subtitle': 'Celebrating milestones and dedication in my academic and professional journey.',
    'achievements.news': 'News',
    'achievements.instagram': 'Instagram',
    'achievements.certs': 'Professional Certifications',
    'achievements.certs_subtitle': 'Validating my skills through recognized industry standards',
    'achievements.view_certs': 'View All Certificates',

    // Contact
    'contact.title_line1': 'Let\'s build something',
    'contact.title_line2': 'meaningful',
    'contact.title_line3': 'together',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas or architectural opportunities. Feel free to reach out through any channel!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',
    'contact.location': 'Location',

    // Footer
    'footer.full_stack': 'Full Stack Dev',

    // Certificates Page
    'certs.back': 'Back to Achievements',
    'certs.title': 'All Certificates',
    'certs.heading': 'Professional',
    'certs.heading_italic': 'Validation.',
    'certs.desc': 'A collection of certifications and specialized training that demonstrate my commitment to continuous learning and professional growth.',
    'certs.search_placeholder': 'Search by certificate name or issuer...',
    'certs.no_found': 'No certificates found',
    'certs.no_found_desc': 'Try adjusting your search or categories to find what you\'re looking for.',
    'certs.id': 'Certification ID',
    'certs.verified': 'Verified On',
    'certs.download': 'Download PDF',
    'certs.verify': 'Verify Online',

    // Project Details Page
    'project_detail.back': 'Back to Projects',
    'project_detail.bg': 'Project Background',
    'project_detail.features': 'Key Features',
    'project_detail.for': 'Project For',
    'project_detail.role': 'Role',
    'project_detail.year': 'Year',
    'project_detail.status': 'Status',
    'project_detail.tech': 'Technology Stack',
    'project_detail.see_app': 'See App',
    'project_detail.github': 'GitHub Repo',
    'project_detail.prototype': 'Prototype',
    'project_detail.back_portfolio': 'Back to Portfolio',
    'project_detail.ready': 'Ready to build something?',
    'project_detail.talk': 'Let\'s talk about it',
  },
  id: {
    // Nav
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.achievements': 'Prestasi',
    'nav.contact': 'Kontak',

    // Hero
    'hero.hello': 'Halo! Saya',
    'hero.description': 'Terus mengembangkan keterampilan teknis dan kerja sama tim untuk menjadi pengembang yang responsif, berorientasi solusi, dan siap menghadapi tantangan di era digital.',
    'hero.view_cv': 'Lihat CV Saya',

    // About
    'about.title': 'Tentang Saya',
    'about.edu_title': 'Sarjana Sains Komputer Terapan',
    'about.edu_polytechnic': 'Politeknik Negeri Banyuwangi',
    'about.gpa': 'IPK: 3.71 / 4.00',
    'about.strength.adaptability': 'Adaptabilitas',
    'about.strength.learning': 'Belajar Berkelanjutan',
    'about.strength.time': 'Manajemen Waktu',

    // Experience
    'experience.journey': 'Perjalanan Karir Saya',
    'experience.title': 'Pengalaman Kerja & Organisasi',

    // Achievements
    'achievements.title': 'Prestasi & Penghargaan',
    'achievements.subtitle': 'Merayakan pencapaian dan dedikasi dalam perjalanan akademis dan profesional saya.',
    'achievements.news': 'Berita',
    'achievements.instagram': 'Instagram',
    'achievements.certs': 'Sertifikasi Profesional',
    'achievements.certs_subtitle': 'Memvalidasi keterampilan saya melalui standar industri yang diakui',
    'achievements.view_certs': 'Lihat Semua Sertifikat',

    // Contact
    'contact.title_line1': 'Mari bangun sesuatu yang',
    'contact.title_line2': 'bermakna',
    'contact.title_line3': 'bersama-sama',
    'contact.description': 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang arsitektur. Jangan ragu untuk menghubungi saya melalui saluran apa pun!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',
    'contact.location': 'Lokasi',

    // Footer
    'footer.full_stack': 'Pengembang Full Stack',

    // Certificates Page
    'certs.back': 'Kembali ke Prestasi',
    'certs.title': 'Semua Sertifikat',
    'certs.heading': 'Validasi',
    'certs.heading_italic': 'Profesional.',
    'certs.desc': 'Koleksi sertifikasi dan pelatihan khusus yang menunjukkan komitmen saya terhadap pembelajaran berkelanjutan dan pertumbuhan profesional.',
    'certs.search_placeholder': 'Cari berdasarkan nama sertifikat atau penerbit...',
    'certs.no_found': 'Sertifikasi tidak ditemukan',
    'certs.no_found_desc': 'Coba sesuaikan pencarian atau kategori Anda untuk menemukan apa yang Anda cari.',
    'certs.id': 'ID Sertifikasi',
    'certs.verified': 'Diverifikasi Pada',
    'certs.download': 'Unduh PDF',
    'certs.verify': 'Verifikasi Online',

    // Project Details Page
    'project_detail.back': 'Kembali ke Proyek',
    'project_detail.bg': 'Latar Belakang Proyek',
    'project_detail.features': 'Fitur Utama',
    'project_detail.for': 'Proyek Untuk',
    'project_detail.role': 'Peran',
    'project_detail.year': 'Tahun',
    'project_detail.status': 'Status',
    'project_detail.tech': 'Teknologi',
    'project_detail.see_app': 'Lihat Aplikasi',
    'project_detail.github': 'Repositori GitHub',
    'project_detail.prototype': 'Prototipe',
    'project_detail.back_portfolio': 'Kembali ke Portofolio',
    'project_detail.ready': 'Siap membangun sesuatu?',
    'project_detail.talk': 'Mari mendiskusikannya',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize language from localStorage using lazy state initializer
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio-lang') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'id')) {
        return savedLang;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
