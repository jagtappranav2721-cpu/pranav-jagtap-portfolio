import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCpu, FiLayers } from 'react-icons/fi';
import { projects } from '../data';

const typeIcon = { ml: <FiCpu size={14} />, fullstack: <FiLayers size={14} /> };
const typeLabel = { ml: 'Machine Learning', fullstack: 'Full Stack' };
const typeColor = {
  ml: { bg: 'rgba(139,92,246,0.15)', text: '#c4b5fd', border: 'rgba(139,92,246,0.3)' },
  fullstack: { bg: 'rgba(34,211,238,0.12)', text: '#67e8f9', border: 'rgba(34,211,238,0.3)' },
};

function ProjectCard({ project, index, inView }) {
  const tc = typeColor[project.type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
      }}
      whileHover={{ y: -8 }}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${project.gradient.includes('indigo') ? '#6366f1' : project.gradient.includes('violet') ? '#8b5cf6' : '#22d3ee'}, transparent)` }} />

      {/* Card header visual */}
      <div className="relative h-48 overflow-hidden"
        style={{ background: `linear-gradient(135deg, var(--bg-void) 0%, var(--bg-surface) 100%)` }}>
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Floating stats */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 p-4">
          {project.stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="text-center rounded-xl px-4 py-3"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid rgba(99,102,241,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-dim)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Glow overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)` }} />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-mono"
            style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>
            {typeIcon[project.type]}
            {typeLabel[project.type]}
          </span>
          <span className="text-xs text-indigo-400 font-mono">{project.highlight}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-dim)' }}>{project.subtitle}</p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:text-white"
            style={{
              background: 'var(--stat-bg)',
              border: '1px solid var(--stat-border)',
              color: 'var(--text-body)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--stat-bg)'}
          >
            <FiGithub size={16} />
            Source Code
          </a>
          <button
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              cursor: 'not-allowed',
              color: 'var(--text-faint)',
            }}
            title="Live demo coming soon"
          >
            <FiExternalLink size={16} />
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-void)' }}>
      {/* Ambient */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Featured Work</p>
          <h2 className="section-title mb-4">
            Projects that <span className="gradient-text">ship</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Production-ready applications built with measurable impact — from ML pipelines achieving 96% accuracy to systems processing 50,000+ records in seconds.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/jagtappranav2721-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
