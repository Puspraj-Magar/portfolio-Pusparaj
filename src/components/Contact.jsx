import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedinIn, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's connect and build something great together">
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-5">
         <div className="glass rounded-2xl p-5 border border-white/5">
  <div className="flex items-center gap-3 text-white/70 text-sm">
    <FaEnvelope className="text-indigo-300 w-5 text-center" />
    <a
      href={portfolioData.contact.email.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      {portfolioData.contact.email.text}
    </a>
  </div>
</div>

<div className="glass rounded-2xl p-5 border border-white/5">
  <div className="flex items-center gap-3 text-white/70 text-sm">
    <FaPhone className="text-indigo-300 w-5 text-center" />
    <a
      href={portfolioData.contact.phone.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      {portfolioData.contact.phone.text}
    </a>
  </div>
</div>

<div className="glass rounded-2xl p-5 border border-white/5">
  <div className="flex items-center gap-3 text-white/70 text-sm">
    <FaGithub className="text-indigo-300 w-5 text-center" />
    <a
      href={portfolioData.contact.github.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      {portfolioData.contact.github.text}
    </a>
  </div>
</div>

<div className="glass rounded-2xl p-5 border border-white/5">
  <div className="flex items-center gap-3 text-white/70 text-sm">
    <FaLinkedinIn className="text-indigo-300 w-5 text-center" />
    <a
      href={portfolioData.contact.linkedin.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      {portfolioData.contact.linkedin.text}
    </a>
  </div>
</div>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-white/5">
            <div className="space-y-4">
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-indigo-500/90 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm bg-green-500/10 py-2 rounded-xl border border-green-500/20"
                >
                  <FaCheckCircle className="inline mr-1.5" /> Thank you! Your message has been sent.
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}