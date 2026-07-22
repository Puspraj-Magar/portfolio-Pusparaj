import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import * as FaIcons from 'react-icons/fa';

const iconMap = {
  FaShoppingCart: FaIcons.FaShoppingCart,
  FaCloudSun: FaIcons.FaCloudSun,
  FaGraduationCap: FaIcons.FaGraduationCap,
  FaBriefcase: FaIcons.FaBriefcase,
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of my recent work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((proj, i) => {
          const IconComponent = iconMap[proj.icon] || FaIcons.FaCode;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="project-card glass rounded-2xl p-6 border border-white/5 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-300 text-xl mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg font-semibold text-white/90">{proj.title}</h3>
              <p className="text-white/30 text-sm mt-1">{proj.tech}</p>
              <ul className="mt-4 space-y-1.5 flex-1">
                {proj.features.map((feat, fi) => (
                  <li key={fi} className="text-white/50 text-sm flex items-start gap-2">
                    <FaIcons.FaCheckCircle className="text-indigo-400 text-xs mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}