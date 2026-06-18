import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaHeart, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8 mt-8 glass">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-sm">
          &copy; {currentYear} {portfolioData.name}. Built with <FaHeart className="text-indigo-400 inline mx-1" /> using React & Tailwind.
        </p>
        <div className="flex gap-4">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition text-sm"><FaGithub /></a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition text-sm"><FaLinkedinIn /></a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-white/30 hover:text-white transition text-sm"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}