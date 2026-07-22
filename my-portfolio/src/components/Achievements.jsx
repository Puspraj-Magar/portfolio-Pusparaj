import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import {
  MdCode,
  MdSchool,
  MdRocketLaunch
} from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const iconMap = {
  MdCode: MdCode,
  MdSchool: MdSchool,
  MdRocketLaunch: MdRocketLaunch,
};

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognitions and milestones"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        {portfolioData.achievements.map((ach, i) => {
          const IconComponent = iconMap[ach.icon] || GiBrain;

          return (
            <motion.a
              key={i}
              href={ach.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-14 text-center border border-white/5 cursor-pointer hover:border-indigo-400/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl text-indigo-300 mb-4 flex justify-center">
                <IconComponent />
              </div>

              <p className="text-white/80 text-sm">
                {ach.title}
              </p>
              
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}