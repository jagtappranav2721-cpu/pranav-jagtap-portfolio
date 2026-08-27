import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, achievements } from '../data';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="relative py-12 sm:py-32 overflow-hidden scroll-mt-20"
      style={{ background: `linear-gradient(180deg, var(--bg-void) 0%, var(--bg-surface) 50%, var(--bg-void) 100%)` }}>

      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="section-label mb-3">Background</p>
          <h2 className="section-title mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-8 flex items-center gap-2"
              style={{ color: 'var(--text-body)' }}
            >
              <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block" />
              Education
            </motion.h3>

            <div className="relative pl-6">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(180deg, #6366f1, rgba(99,102,241,0.1))' }} />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot with pulse */}
                  <div className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 ${
                    edu.current
                      ? 'bg-indigo-500 border-indigo-400 timeline-pulse'
                      : 'border-slate-600'
                  }`}
                    style={!edu.current ? { background: 'var(--bg-surface)' } : {}}
                  >
                    {edu.current && (
                      <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="card hover:border-indigo-500/30 cursor-default">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h4>
                        <p className="text-sm text-indigo-400 mt-0.5">{edu.institution}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>{edu.location}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="text-xs font-mono block" style={{ color: 'var(--text-dim)' }}>{edu.period}</span>
                        <span className="text-sm font-bold text-emerald-400 mt-1 block">{edu.score}</span>
                      </div>
                    </div>
                    {edu.current && (
                      <div className="mt-2 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
                        <span className="text-xs text-emerald-400">Currently Enrolled</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-8 flex items-center gap-2"
              style={{ color: 'var(--text-body)' }}
            >
              <span className="w-1 h-5 rounded-full bg-violet-500 inline-block" />
              Achievements
            </motion.h3>

            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="card cursor-default"
                >
                  <div className="flex gap-4">
                    <div className="text-3xl shrink-0">{a.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{a.title}</h4>
                        <span className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{a.date}</span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-2xl p-5 cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.08))',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}
              >
                <p className="text-xs font-mono mb-3 uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Quick Stats</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '9.06', label: 'CGPA' },
                    { value: '3+', label: 'Projects' },
                    { value: '4', label: 'Certifications' },
                  ].map((s) => (
                    <motion.div
                      key={s.label}
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'var(--text-dim)' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
