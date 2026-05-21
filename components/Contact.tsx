'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'arifahmachi@gmail.com', href: 'mailto:arifahmachi@gmail.com', bg: 'bg-primary/10 text-primary' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'Arifah Nur Basyiroh Machi', href: 'https://linkedin.com/in/arifahnbm', bg: 'bg-blue-50 text-blue-600' },
  { icon: FaInstagram, label: 'Instagram', value: '@orzlfaa_', href: 'https://instagram.com/orzlfaa_', bg: 'bg-pink-50 text-pink-600' },
  { icon: MapPin, label: 'Location', value: 'Banyuwangi, Indonesia', href: '#', bg: 'bg-green-50 text-green-600' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#FFF9FB] scroll-mt-24">
      {/* Decorative */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          {/* Left Column: Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center flex flex-col items-center"
          >
            <h2 className="font-outfit font-bold text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight">
              Let&apos;s build something <br />
              <span className="text-primary italic">meaningful</span> together
            </h2>
            
            <p className="text-neutral-500 text-lg mb-12 max-w-xl">
              I&apos;m always open to discussing new projects, creative ideas or architectural opportunities. Feel free to reach out through any channel!
            </p>

            <div className="grid grid-cols-1 gap-6 w-full">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-8 bg-white/60 backdrop-blur-md rounded-[40px] shadow-sm border border-primary/10 flex items-center gap-6 group transition-all w-full"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6 ${info.bg}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1">{info.label}</p>
                    <p className="text-gray-800 font-bold text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
