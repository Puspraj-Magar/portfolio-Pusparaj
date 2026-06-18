import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { FaMapPin } from 'react-icons/fa';

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic journey and qualifications">
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-indigo-400/15 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <span className="badge">{edu.period}</span>
              {edu.cgpa && <span className="text-sm font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">CGPA: {edu.cgpa}</span>}
              {edu.percentage && <span className="text-sm font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">{edu.percentage}</span>}
            </div>
            <h3 className="text-lg font-semibold text-white/90 mt-3">{edu.degree}</h3>
            <p className="text-white/40 text-sm mt-1">{edu.institution}</p>
            <p className="text-white/30 text-xs mt-1"><FaMapPin className="inline mr-1" /> {edu.location}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}