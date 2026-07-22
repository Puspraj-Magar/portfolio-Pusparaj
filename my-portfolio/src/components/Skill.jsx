import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const skillCategories = [
  {
    label: 'Programming',
    key: 'programming',
    color: 'from-blue-400 to-indigo-400',
  },
  {
    label: 'Frontend',
    key: 'frontend',
    color: 'from-indigo-400 to-purple-400',
  },
  {
    label: 'Backend',
    key: 'backend',
    color: 'from-purple-400 to-pink-400',
  },
  {
    label: 'Database',
    key: 'database',
    color: 'from-pink-400 to-rose-400',
  },
  {
    label: 'Tools & Technologies',
    key: 'tools',
    color: 'from-rose-400 to-orange-400',
  },
  {
    label: 'Core Subjects',
    key: 'core',
    color: 'from-orange-400 to-amber-400',
  },
];

const getProgress = (skill) => {
  const progressMap = {
    // Programming
    Java: 85,
    JavaScript: 80,
    Python: 75,
    Dart: 70,

    // Frontend
    'React.js': 82,
    Flutter: 70,

    // Backend
    'Node.js': 75,
    'Express.js': 72,

    // Database
    MySQL: 80,
    MongoDB: 72,
    Firebase: 70,

    // Tools
    Git: 78,
    GitHub: 80,
    'VS Code': 90,
    Postman: 75,

    // Core Subjects
    'Data Structures & Algorithms': 80,
    'Object-Oriented Programming': 85,
    'Operating Systems': 75,
    'Computer Networks': 70,
    'Database Management System': 82,
  };

  return progressMap[skill] || 70;
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies, tools, and computer science fundamentals I work with"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              {category.label}
            </h4>

            <div className="space-y-4">
              {portfolioData.skills[category.key].map((skill) => {
                const progress = getProgress(skill);

                return (
                  <div key={skill}>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">
                        {skill}
                      </span>

                      <span className="text-white/30">
                        {progress}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-white/5 mt-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
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