import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';

// Served from /public/resume/ — resolves correctly on Vite dev, Netlify, and Vercel
// since it's a root-relative path to a static asset.
const RESUME_PATH = '/resume/Pranav_Jagtap_Resume.pdf';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" ref={ref} className="relative py-24 overflow-hidden"
      style={{ background: `linear-gradient(180deg, var(--bg-void), var(--bg-surface), var(--bg-void))` }}>

      {/* Ambient */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, var(--gradient-mesh-1) 0%, transparent 70%)` }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)' }}>
            <FiFileText size={28} className="text-indigo-400" />
          </div>

          <p className="section-label mb-3">Career Documents</p>
          <h2 className="section-title mb-4">
            Download my <span className="gradient-text">Resume</span>
          </h2>
          <p className="max-w-xl mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
            Get a comprehensive overview of my skills, projects, education, and achievements
            in a clean, recruiter-friendly format.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={RESUME_PATH}
              download="Pranav_Jagtap_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-white flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <FiDownload size={18} />
                Download PDF Resume
              </span>
            </motion.a>

            <motion.a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2"
            >
              <FiEye size={16} />
              View Online
            </motion.a>
          </div>

          {/* File info */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm" style={{ color: 'var(--text-faint)' }}>
            <span className="font-mono">📄 PDF Format</span>
            <span className="w-px h-4" style={{ background: 'var(--border)' }} />
            <span className="font-mono">🎯 ATS Optimized</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
