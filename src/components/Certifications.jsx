import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data';

const colorMap = {
  indigo: { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)', glow: 'rgba(99,102,241,0.15)', badge: '#818cf8' },
  violet: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', glow: 'rgba(139,92,246,0.15)', badge: '#a78bfa' },
  cyan: { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', glow: 'rgba(34,211,238,0.15)', badge: '#22d3ee' },
  amber: { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', glow: 'rgba(251,191,36,0.15)', badge: '#fbbf24' },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" ref={ref} className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-void)' }}>
      {/* Ambient */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, var(--gradient-mesh-2) 0%, transparent 70%)`, filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Credentials</p>
          <h2 className="section-title mb-4">
            Certifications <span className="gradient-text">& Learning</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Continuous learning through industry-recognized programs from top institutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.indigo;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative rounded-2xl p-6 cursor-default transition-all duration-300 group"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.glow} 0%, transparent 70%)`, pointerEvents: 'none' }} />

                {/* Icon */}
                <div className="text-4xl mb-4">{cert.icon}</div>

                {/* Content */}
                <h3 className="font-semibold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>{cert.title}</h3>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cert.description}</p>

                {/* Issuer badge */}
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.badge }} />
                  <span className="text-xs font-mono" style={{ color: c.badge }}>{cert.issuer}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
