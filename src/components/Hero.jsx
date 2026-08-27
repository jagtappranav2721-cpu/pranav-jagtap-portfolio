import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data';
import { useTheme } from '../ThemeContext';

const roles = personalInfo.roles;

// Generate stable neural nodes positions
function useNeuralNodes(count) {
  return useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${8 + ((i * 17 + 7) % 85)}%`,
      top: `${10 + ((i * 23 + 13) % 75)}%`,
      delay: (i * 0.7) % 4,
      duration: 3 + (i % 3),
      rotation: ((i * 47) % 360),
    })),
    [count]
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeout = useRef(null);
  const { theme } = useTheme();
  const neuralNodes = useNeuralNodes(12);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, typing, roleIdx]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start sm:justify-end overflow-hidden"
      style={{ backgroundColor: 'var(--bg-void)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            `radial-gradient(ellipse 80% 60% at 50% 0%, var(--gradient-mesh-1) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, var(--gradient-mesh-2) 0%, transparent 60%)`,
        }}
      />

      {/* Neural Network Background */}
      <div className="neural-bg">
        {neuralNodes.map((node) => (
          <motion.div
            key={node.id}
            className="neural-node"
            style={{
              left: node.left,
              top: node.top,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: 'easeInOut',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '60px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(99,102,241,0.15), transparent)',
                transformOrigin: 'left center',
                transform: `rotate(${node.rotation}deg)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-36 sm:pb-44 lg:pb-52 pt-20 sm:pt-28">


        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4"
        >
          <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
          <span className="gradient-text">Pranav</span>
        </motion.h1>

        {/* Professional positioning */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg font-medium tracking-wide mb-3 px-2 sm:px-0"
          style={{ color: 'var(--text-body)' }}
        >
          Undergraduate Computer Engineering Student
          <span className="text-indigo-400 mx-2">|</span>
          Machine Learning &amp; Data Science
        </motion.p>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-10 sm:h-14 flex items-center justify-center mb-6"
        >
          <span className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
            style={{ color: 'var(--text-body)' }}>
            {displayed}
            <span className="typed-cursor text-indigo-400">|</span>
          </span>
        </motion.div>

        {/* Sub description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10 px-2 sm:px-0"
          style={{ color: 'var(--text-muted)' }}
        >
          Computer Engineering undergraduate at{' '}
          <span className="text-indigo-400">SPPU</span> with{' '}
          <span className="text-violet-400">9.06 CGPA</span> — building intelligent
          AI systems, RAG pipelines, and ML applications that create real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-primary text-white text-sm sm:text-base"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-outline flex items-center gap-2 text-sm sm:text-base"
          >
            Contact Me →
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {[
            { href: personalInfo.github, icon: <FiGithub size={18} />, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: <FiMail size={18} />, label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={s.label}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass flex items-center justify-center transition-colors duration-200 hover:border-indigo-500/40"
              style={{ color: 'var(--text-muted)' }}
            >
              {s.icon}
            </motion.a>
          ))}

          <div className="w-px h-6 mx-1 sm:mx-2" style={{ background: 'var(--border)' }} />

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 8px #34d399' }} />
            <span className="text-xs sm:text-sm" style={{ color: 'var(--text-dim)' }}>Available for work</span>
          </div>
        </motion.div>
      </div>

      {/* Stats strip — positioned at bottom, above scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-14 sm:bottom-16 left-0 right-0 w-full px-4 flex justify-center"
      >
        <div className="glass rounded-2xl px-4 sm:px-8 py-3 sm:py-4 grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-8 lg:gap-12 max-w-[280px] xs:max-w-xs sm:max-w-xl lg:max-w-3xl w-full">
          {[
            { value: '9.06', label: 'CGPA', suffix: '/10' },
            { value: '3', label: 'Projects', suffix: '+' },
            { value: '96.4%', label: 'ML Accuracy', suffix: '' },
            { value: 'RAG', label: 'LLM Pipelines', suffix: '' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center flex-1 min-w-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="font-display text-base sm:text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {stat.value}
                <span className="text-indigo-400 text-xs sm:text-sm">{stat.suffix}</span>
              </div>
              <div className="text-xs mt-0.5 truncate sm:overflow-visible sm:whitespace-normal" style={{ color: 'var(--text-dim)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator — at very bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-faint)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-faint)' }}
        >
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
