import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaPaperPlane, FaDownload } from 'react-icons/fa';

export default function Hero() {
  const [typed, setTyped] = useState('');
  const fullText = 'Pusparaj Baache Magar';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="hero-bg">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-indigo-300 text-sm font-medium mb-4">
            <span className="w-8 h-px bg-indigo-400/40"></span>
            <span>Welcome to my portfolio</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white/90">Hi, I'm</span><br />
            <span className="gradient-text">
              {typed}
              <span className="typing-cursor inline-block w-[2px] h-[0.7em] bg-indigo-400 ml-1 align-middle"></span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-5 text-base sm:text-lg text-white/50 max-w-xl leading-relaxed">
            {portfolioData.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3 rounded-full bg-indigo-500/90 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center gap-2 btn-pulse">
              <FaPaperPlane /> Get in Touch
            </a>
            <a href={portfolioData.resumeLink} download="resume.pdf" className="px-7 py-3 rounded-full glass-light text-white/80 hover:text-white font-medium transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-indigo-400/30">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex gap-5">
            <a href={portfolioData.contact.github.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition text-xl"><FaGithub /></a>
            <a href={portfolioData.contact.linkedin.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition text-xl"><FaLinkedinIn /></a>
            <a href={portfolioData.contact.email.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition text-xl"><FaEnvelope /></a>
            <a href={portfolioData.contact.phone.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition text-xl"><FaPhone /></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}