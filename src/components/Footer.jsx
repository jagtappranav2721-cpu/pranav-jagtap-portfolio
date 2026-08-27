import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 overflow-hidden"
      style={{ background: 'var(--footer-bg)', borderTop: '1px solid var(--footer-border)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)' }}>
              <span className="text-white font-display font-bold text-sm">PJ</span>
            </div>
            <div>
              <p className="font-display font-semibold" style={{ color: 'var(--text-body)' }}>{personalInfo.name}</p>
              <p className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>AI Engineer & Data Scientist</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--text-dim)' }}>
            {['about', 'skills', 'projects', 'contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-indigo-400 transition-colors capitalize"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: <FiGithub size={18} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: <FiMail size={18} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:text-indigo-400 transition-colors duration-200"
                style={{
                  background: 'var(--stat-bg)',
                  border: '1px solid var(--stat-border)',
                  color: 'var(--text-dim)',
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--footer-border)' }}>
          <p className="text-xs text-center" style={{ color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} Pranav Jagtap. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <p className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>
            Made with ❤️ in Pune, India
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid rgba(99,102,241,0.3)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
            }}
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
