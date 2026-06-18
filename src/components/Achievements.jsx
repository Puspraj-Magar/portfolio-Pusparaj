import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { FaTrophy } from 'react-icons/fa';

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Recognitions and milestones">
      <div className="grid sm:grid-cols-3 gap-4">
        {portfolioData.achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 text-center border border-white/5"
          >
            <div className="text-2xl text-indigo-300 mb-4 flex justify-center">
              <FaTrophy />
            </div>
            <p className="text-white/80 text-sm">{ach}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}