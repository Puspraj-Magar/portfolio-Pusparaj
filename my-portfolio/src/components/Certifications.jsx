import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { FaCertificate } from 'react-icons/fa';

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and training"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {portfolioData.certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-7 border border-white/5 flex items-center gap-4 hover:border-indigo-400/30 transition cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-300">
              <FaCertificate />
            </div>

            <div>
              <p className="text-white/80 font-medium">{cert.name}</p>
              <p className="text-indigo-400 text-xs">View Certificate ↗</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}