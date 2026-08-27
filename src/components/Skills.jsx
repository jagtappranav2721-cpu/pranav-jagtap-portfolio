import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiDatabase, FiTool, FiServer, FiBarChart2, FiUsers, FiGlobe } from 'react-icons/fi';
import { skills } from '../data';
import { useTheme } from '../ThemeContext';

const iconMap = {
  code: <FiCode />,
  brain: <FiCpu />,
  layers: <FiLayers />,
  database: <FiDatabase />,
  tool: <FiTool />,
  cpu: <FiServer />,
  chart: <FiBarChart2 />,
  users: <FiUsers />,
  globe: <FiGlobe />,
};

const colorMapDark = {
  indigo:  { bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.25)',  tag: 'rgba(99,102,241,0.15)',  text: '#818cf8', tagText: '#a5b4fc' },
  violet:  { bg: 'rgba(139,92,246,0.08)',  border: 'rgba(139,92,246,0.25)',  tag: 'rgba(139,92,246,0.15)',  text: '#a78bfa', tagText: '#c4b5fd' },
  cyan:    { bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.25)',  tag: 'rgba(34,211,238,0.1)',   text: '#22d3ee', tagText: '#67e8f9' },
  emerald: { bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)',  tag: 'rgba(52,211,153,0.1)',   text: '#34d399', tagText: '#6ee7b7' },
  amber:   { bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.25)',  tag: 'rgba(251,191,36,0.1)',   text: '#fbbf24', tagText: '#fcd34d' },
  rose:    { bg: 'rgba(251,113,133,0.08)', border: 'rgba(251,113,133,0.25)', tag: 'rgba(251,113,133,0.1)',  text: '#fb7185', tagText: '#fda4af' },
  sky:     { bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.25)',  tag: 'rgba(56,189,248,0.1)',   text: '#38bdf8', tagText: '#7dd3fc' },
  fuchsia: { bg: 'rgba(217,70,239,0.08)', border: 'rgba(217,70,239,0.25)',  tag: 'rgba(217,70,239,0.15)',  text: '#e879f9', tagText: '#f0abfc' },
  orange:  { bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)',  tag: 'rgba(249,115,22,0.15)',  text: '#fb923c', tagText: '#fdba74' },
};

const colorMapLight = {
  indigo:  { bg: 'rgba(99,102,241,0.07)',  border: 'rgba(99,102,241,0.3)',  tag: 'rgba(99,102,241,0.12)',  text: '#4338ca', tagText: '#3730a3' },
  violet:  { bg: 'rgba(139,92,246,0.07)',  border: 'rgba(139,92,246,0.3)',  tag: 'rgba(139,92,246,0.12)',  text: '#7c3aed', tagText: '#5b21b6' },
  cyan:    { bg: 'rgba(6,182,212,0.07)',   border: 'rgba(6,182,212,0.3)',   tag: 'rgba(6,182,212,0.1)',    text: '#0891b2', tagText: '#0e7490' },
  emerald: { bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.3)',  tag: 'rgba(16,185,129,0.1)',   text: '#059669', tagText: '#047857' },
  amber:   { bg: 'rgba(217,119,6,0.07)',   border: 'rgba(217,119,6,0.3)',   tag: 'rgba(217,119,6,0.1)',    text: '#b45309', tagText: '#92400e' },
  rose:    { bg: 'rgba(225,29,72,0.06)',   border: 'rgba(225,29,72,0.25)',  tag: 'rgba(225,29,72,0.08)',   text: '#be123c', tagText: '#9f1239' },
  sky:     { bg: 'rgba(2,132,199,0.07)',   border: 'rgba(2,132,199,0.3)',   tag: 'rgba(2,132,199,0.1)',    text: '#0369a1', tagText: '#075985' },
  fuchsia: { bg: 'rgba(162,28,175,0.06)', border: 'rgba(162,28,175,0.25)', tag: 'rgba(162,28,175,0.1)',   text: '#a21caf', tagText: '#86198f' },
  orange:  { bg: 'rgba(194,65,12,0.06)',  border: 'rgba(194,65,12,0.25)',  tag: 'rgba(194,65,12,0.1)',    text: '#c2410c', tagText: '#9a3412' },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { theme } = useTheme();
  const colorMap = theme === 'light' ? colorMapLight : colorMapDark;

  return (
    <section id="skills" ref={ref} className="relative py-12 sm:py-32 overflow-hidden scroll-mt-20"
      style={{ background: `linear-gradient(180deg, var(--bg-void) 0%, var(--bg-surface) 50%, var(--bg-void) 100%)` }}>

      <div className="absolute inset-0 bg-dots opacity-20" />

      {/* Ambient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 70%)`, filter: 'blur(100px)' }} />

      {/* Circuit board decoration */}
      <svg className="absolute top-10 right-10 w-32 h-32 pointer-events-none opacity-10" viewBox="0 0 100 100">
        <motion.path
          d="M10 50 H40 V20 H70 V50 H90"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.path
          d="M50 10 V40 H80 V70 H50 V90"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        />
        {[{cx:40,cy:20},{cx:70,cy:50},{cx:50,cy:40},{cx:80,cy:70}].map((c,i) => (
          <motion.circle
            key={i}
            cx={c.cx} cy={c.cy} r="3"
            fill="#6366f1"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ delay: 1 + i * 0.2 }}
          />
        ))}
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="section-label mb-3">Technical Arsenal</p>
          <h2 className="section-title mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            A curated stack of tools and technologies I use to build intelligent, scalable systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {skills.map((skill) => {
            const c = colorMap[skill.color] || colorMap.indigo;
            return (
              <motion.div
                key={skill.category}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl p-5 cursor-default transition-all duration-300"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
              >
                {/* Icon & category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                    style={{ background: `${c.bg}`, border: `1px solid ${c.border}`, color: c.text }}>
                    {iconMap[skill.icon]}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{skill.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full font-mono transition-all duration-200 hover:scale-105 skill-tag-shimmer"
                      style={{
                        background: c.tag,
                        color: c.tagText,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
