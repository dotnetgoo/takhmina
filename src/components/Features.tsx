import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swords, TrendingUp, Wifi, Activity } from 'lucide-react';

const features = [
  {
    icon: Swords,
    title: 'Fighter Identity',
    description: 'A brand built on authenticity — raw, honest, and unapologetically fierce.',
    gradient: 'from-blue-600 to-blue-400',
    glow: 'rgba(59,130,246,0.2)',
    tag: 'Brand',
  },
  {
    icon: TrendingUp,
    title: 'Training & Coaching',
    description: 'Elite-level methodology combining sport science with old-school grit.',
    gradient: 'from-purple-600 to-purple-400',
    glow: 'rgba(147,51,234,0.2)',
    tag: 'Performance',
  },
  {
    icon: Wifi,
    title: 'Social Presence',
    description: 'Thousands of followers watching every drop of sweat in real time.',
    gradient: 'from-pink-600 to-rose-400',
    glow: 'rgba(236,72,153,0.2)',
    tag: 'Community',
  },
  {
    icon: Activity,
    title: 'Peak Discipline',
    description: 'No off-days. No excuses. A relentless pursuit of peak performance.',
    gradient: 'from-cyan-600 to-sky-400',
    glow: 'rgba(6,182,212,0.2)',
    tag: 'Mindset',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            What Defines Her
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Built on{' '}
            <span className="text-gradient">4 Pillars</span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-3xl p-7 border border-white/8 hover:border-white/15 transition-all duration-400 overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 20%, ${f.glow}, transparent 70%)` }}
                />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/25 text-xs font-semibold tracking-widest uppercase">{f.tag}</span>
                </div>

                <h3 className="text-white font-black text-base mb-3 tracking-tight">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>

                {/* Bottom indicator */}
                <div className={`mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${f.gradient} transition-all duration-500 rounded-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
