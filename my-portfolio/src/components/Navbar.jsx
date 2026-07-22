import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id) => {
    setActive(id);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => document.getElementById(l.id));
      const scrollY = window.scrollY + 100;
      let current = 'home';
      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = section.id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-items-end justify-between h-16 md:h-20">
          <div className="flex items-center  cursor-pointer" onClick={() => scrollTo('home')}>
            <p className="text-2xl font-bold text-blue-600">P</p>
            <p className="text-lg font-medium text-white/80 mx-0.5 hidden sm:inline">usparaj</p>
            <p className="text-lg font-medium text-white/60 mx-2 hidden sm:inline">Magar</p>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link text-sm ${active === id ? 'text-indigo-300' : 'text-white/60'} hover:text-white transition`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="theme-toggle text-white/60 hover:text-white p-2 rounded-full hover:bg-white/5 transition">
              {isDark ? <FaMoon /> : <FaSun />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 hover:text-white p-2">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="px-4 py-4 flex flex-col gap-2 glass">
                {links.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition ${active === id ? 'text-indigo-300 bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}