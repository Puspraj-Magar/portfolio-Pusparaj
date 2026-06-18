import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { FaMapPin, FaGraduationCap, FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Passionate about building scalable and user-friendly applications">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <p className="text-white/70 leading-relaxed text-base md:text-lg">{portfolioData.about}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="badge"><FaMapPin className="inline mr-1.5" /> {portfolioData.location}</span>
            <span className="badge"><FaGraduationCap className="inline mr-1.5" /> B.Tech CSE</span>
            <span className="badge"><FaCode className="inline mr-1.5" /> Full Stack</span>
          </div>
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl glass flex items-center justify-center overflow-hidden border border-white/10">
            <span className="text-7xl opacity-30">👨‍💻</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}