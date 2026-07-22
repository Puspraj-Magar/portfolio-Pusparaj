import React from "react";
import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { FaMapPin, FaGraduationCap, FaLayerGroup } from "react-icons/fa";

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about building scalable and user-friendly applications"
    >
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 ">
        <div className="md:col-span-3 ">
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            {portfolioData.about}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="badge">
              <FaMapPin className="inline mr-1.5" /> {portfolioData.location}
            </span>
            <span className="badge">
              <FaGraduationCap className="inline mr-1.5" /> B.Tech CSE
            </span>
            <span className="badge">
              <FaLayerGroup className="inline mr-1.5" /> Full Stack
            </span>
          </div>
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="flex justify-center mb-8">
            <img
              src="/Pusparaj_image.png"
              alt="Pusparaj Magar"
              className="w-56 h-56 rounded-full object-cover border-4 border-indigo-400/40 shadow-xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
