import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiDatabase, FiZap } from 'react-icons/fi';
import { personalInfo } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const traits = [
  { icon: <FiCpu size={20} />, label: 'AI / ML Engineer', desc: 'Scikit-learn, PyTorch, NLP' },
  { icon: <FiZap size={20} />, label: 'GenAI / LLM', desc: 'RAG, FAISS, Sentence Transformers' },
  { icon: <FiCode size={20} />, label: 'Full-Stack Dev', desc: 'Flask, Streamlit, Django' },
  { icon: <FiDatabase size={20} />, label: 'Data Analytics', desc: 'Pandas, NumPy, Power BI' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-12 sm:py-32 overflow-hidden scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-void)' }}>
      {/* Ambient */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Neural connection SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="20%" y1="30%" x2="80%" y2="70%"
          stroke="url(#neural-grad)" strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <motion.line
          x1="70%" y1="20%" x2="30%" y2="80%"
          stroke="url(#neural-grad)" strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="section-label mb-3"
            >
              About Me
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="section-title mb-6"
            >
              Building at the intersection of{' '}
              <span className="gradient-text">code & intelligence</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-lg leading-relaxed mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              {personalInfo.summary}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="leading-relaxed mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              When I'm not building RAG pipelines and LLM-powered applications, I'm training
              ML models and architecting full-stack systems that solve real problems. I believe
              great AI is invisible — it just works, intelligently and reliably.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-3"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm flex items-center gap-2"
              >
                <FiCode size={15} />
                GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm flex items-center gap-2"
              >
                <FiZap size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-indigo-400"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                  {t.icon}
                </div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t.label}</h3>
                <p className="text-xs font-mono" style={{ color: 'var(--text-dim)' }}>{t.desc}</p>
              </motion.div>
            ))}

            {/* CGPA card */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, scale: 1.02 }}
              className="col-span-1 sm:col-span-2 card gradient-border cursor-default"
              style={{ background: 'rgba(99,102,241,0.05)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono mb-1" style={{ color: 'var(--text-dim)' }}>Academic Performance</p>
                  <p className="font-display text-4xl font-bold gradient-text">9.06 / 10.0</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>B.Tech Computer Engineering • SPPU</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-faint)' }}>Consistency</p>
                  <div className="flex gap-1 justify-end">
                    {[...Array(10)].map((_, j) => (
                      <motion.div
                        key={j}
                        className={`w-2 h-8 rounded-sm ${j < 9 ? 'bg-indigo-500' : 'bg-slate-700'}`}
                        style={{ opacity: j < 9 ? 0.6 + j * 0.04 : 1 }}
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.8 + j * 0.05, duration: 0.4, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
