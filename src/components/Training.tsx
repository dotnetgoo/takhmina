import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Brain, Wind, Moon } from 'lucide-react';

const routines = [
  {
    icon: Dumbbell,
    title: 'Strength',
    subtitle: 'Power Foundation',
    items: ['Olympic lifts', 'Explosive plyometrics', 'Compound movements', 'Max strength blocks'],
    frequency: '4x / week',
    gradient: 'from-orange-500 to-red-500',
    glow: 'rgba(249,115,22,0.15)',
    accent: '#f97316',
  },
  {
    icon: Brain,
    title: 'Technique',
    subtitle: 'Precision Crafting',
    items: ['Striking combos', 'Ground & pound', 'Submission drills', 'Sparring rounds'],
    frequency: '5x / week',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'rgba(59,130,246,0.15)',
    accent: '#3b82f6',
  },
  {
    icon: Wind,
    title: 'Cardio',
    subtitle: 'Engine Building',
    items: ['Zone 2 base work', 'HIIT intervals', 'Roadwork runs', 'Pad work circuits'],
    frequency: '6x / week',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6,182,212,0.15)',
    accent: '#06b6d4',
  },
  {
    icon: Moon,
    title: 'Recovery',
    subtitle: 'Restoration Protocol',
    items: ['Ice bath therapy', 'Mobility & yoga', 'Sleep optimization', 'Nutrition protocol'],
    frequency: 'Daily',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'rgba(147,51,234,0.15)',
    accent: '#9333ea',
  },
];

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/4 rounded-full blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-[100px]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Training System
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The Daily{' '}
            <span className="text-gradient">Protocol</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base">
            A champion-level system refined over years of competition and coaching.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {routines.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass rounded-3xl border border-white/8 hover:border-white/15 transition-all duration-400 overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${r.glow}, transparent 60%)` }}
                />

                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${r.gradient}`} />

                <div className="p-7">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-black text-lg mb-1">{r.title}</h3>
                  <p className="text-white/35 text-xs tracking-wider uppercase font-semibold mb-5">{r.subtitle}</p>

                  {/* Items */}
                  <ul className="space-y-2 mb-6">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/50 text-xs">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: r.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Frequency badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
                    style={{ background: `${r.glow}`, border: `1px solid ${r.accent}30`, color: r.accent }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: r.accent }} />
                    {r.frequency}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass rounded-2xl border border-white/8 p-6 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-white font-bold text-lg">Want to train like Tahmina?</p>
            <p className="text-white/40 text-sm mt-1">Follow her journey and get training insights on social media.</p>
          </div>
          <div className="flex gap-3">
            <motion.a
              href="https://www.instagram.com/tahmina_k3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-500/20"
            >
              Follow on IG
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@tahmina_k3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl glass border border-white/15 text-white text-sm font-bold hover:border-cyan-500/30 transition-colors"
            >
              TikTok
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
