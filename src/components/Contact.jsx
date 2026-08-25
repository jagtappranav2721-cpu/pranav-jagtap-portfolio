import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error('Netlify Form submission failed response:', response);
        alert('Form submission failed. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Netlify Form submission error:', error);
      alert('An error occurred. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { icon: <FiMail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiGithub size={18} />, label: 'GitHub', value: 'jagtappranav2721-cpu', href: personalInfo.github },
    { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'pranav-jagtap', href: personalInfo.linkedin },
    { icon: <FiMapPin size={18} />, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
  ];

  const inputBase = `w-full rounded-xl px-4 py-3 text-sm placeholder-slate-600 outline-none transition-all duration-200 font-sans`;

  const [focused, setFocused] = useState('');

  const getInputStyle = (fieldName) => ({
    background: focused === fieldName ? 'var(--input-focus-bg)' : 'var(--input-bg)',
    border: focused === fieldName ? '1px solid var(--input-focus-border)' : '1px solid var(--input-border)',
    color: 'var(--input-text)',
  });

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-void)' }}>
      {/* Ambient */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, var(--gradient-mesh-1) 0%, transparent 70%)`, filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title mb-4">
            Let's build something <span className="gradient-text">together</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            I'm actively seeking internship and full-time opportunities in software development, machine learning, or full-stack engineering. Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="card gradient-border mb-6"
              style={{ background: 'rgba(99,102,241,0.05)' }}>
              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Open to Opportunities</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Looking for internships or full-time roles in Software Development, Full-Stack Engineering, or Machine Learning. Quick to onboard, eager to contribute.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
                <span className="text-xs text-emerald-400 font-mono">Available immediately</span>
              </div>
            </div>

            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 card hover:border-indigo-500/30 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{c.label}</p>
                      <p className="text-sm" style={{ color: 'var(--text-body)' }}>{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 card cursor-default">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400 shrink-0"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-faint)' }}>{c.label}</p>
                      <p className="text-sm" style={{ color: 'var(--text-body)' }}>{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form name="contact" method="POST" onSubmit={handleSubmit} className="card space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono block mb-1.5" style={{ color: 'var(--text-dim)' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputBase}
                    style={getInputStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono block mb-1.5" style={{ color: 'var(--text-dim)' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className={inputBase}
                    style={getInputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono block mb-1.5" style={{ color: 'var(--text-dim)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  required
                  className={inputBase}
                  style={getInputStyle('subject')}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                />
              </div>

              <div>
                <label className="text-xs font-mono block mb-1.5" style={{ color: 'var(--text-dim)' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project, or just say hi..."
                  required
                  rows={5}
                  className={`${inputBase} resize-none`}
                  style={getInputStyle('message')}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending || sent}
                className="btn-primary text-white w-full justify-center py-3.5"
                style={sent ? { background: 'linear-gradient(135deg, #10b981, #34d399)' } : {}}
              >
                <span className="flex items-center justify-center gap-2 z-10 relative">
                  {sent ? (
                    <>
                      <FiCheck size={18} />
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              <p className="text-center text-xs" style={{ color: 'var(--text-faint)' }}>
                I typically respond within 24 hours. You can also reach me directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
