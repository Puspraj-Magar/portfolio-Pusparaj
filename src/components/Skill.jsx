import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const skillCategories = [
  { label: 'Programming', key: 'programming', color: 'from-blue-400 to-indigo-400' },
  { label: 'Frontend', key: 'frontend', color: 'from-indigo-400 to-purple-400' },
  { label: 'Backend', key: 'backend', color: 'from-purple-400 to-pink-400' },
  { label: 'Database', key: 'database', color: 'from-pink-400 to-rose-400' },
  { label: 'Tools', key: 'tools', color: 'from-rose-400 to-orange-400' },
  { label: 'Core Subjects', key: 'core', color: 'from-orange-400 to-amber-400' },
];

const getProgress = (skill) => {
  const map = {
    'Java': 85, 'Python': 80, 'JavaScript': 88, 'HTML': 90, 'CSS': 85,
    'React.js': 82, 'Tailwind CSS': 85, 'Node.js': 75, 'Express.js': 72,
    'MySQL': 80, 'Git': 78, 'GitHub': 75, 'VS Code': 90,
    'Data Structures & Algorithms': 80, 'OOP': 85, 'DBMS': 82,
    'Operating Systems': 75, 'Computer Networks': 70,
  };
  return map[skill] || 70;
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">{cat.label}</h4>
            <div className="space-y-3">
              {portfolioData.skills[cat.key].map((skill) => {
                const prog = getProgress(skill);
                return (
                  <div key={skill}>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{skill}</span>
                      <span className="text-white/30">{prog}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 mt-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color} skill-bar-fill`}
                        style={{ width: '0%' }}
                        ref={(el) => {
                          if (el) {
                            const observer = new IntersectionObserver(
                              ([entry]) => {
                                if (entry.isIntersecting) {
                                  el.style.width = prog + '%';
                                  observer.disconnect();
                                }
                              },
                              { threshold: 0.3 }
                            );
                            observer.observe(el);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}