import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Flame, Target, Zap } from 'lucide-react';

const traits = [
  { icon: Shield, label: 'Mental Fortress', desc: 'Unbreakable mindset forged through thousands of hours of training.' },
  { icon: Flame, label: 'Raw Intensity', desc: 'Every session is max effort. No shortcuts. No compromises.' },
  { icon: Target, label: 'Surgical Precision', desc: 'Technical mastery across striking, grappling and transitions.' },
  { icon: Zap, label: 'Explosive Power', desc: 'Athletic conditioning built to dominate from round one to the last.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                The Fighter
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6"
            >
              Not just a fighter —<br />
              <span className="text-gradient">a statement.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/55 text-base leading-relaxed"
            >
              <p>
                Tahmina didn't choose fighting — fighting chose her. What started as a way to build confidence became a calling that consumes every waking hour.
              </p>
              <p>
                She trains with the intensity of someone who has everything to prove and nothing to lose. The gym is her sanctuary. The cage, her stage. Every bruise, every setback, every early morning — all fuel for the fire that burns inside.
              </p>
              <p>
                <span className="text-white font-semibold">This isn't about fame.</span> It's about becoming the best possible version of herself — through discipline, sacrifice, and an obsession with excellence that most people will never understand.
              </p>
            </motion.div>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 glass rounded-2xl border-l-2 border-blue-500"
            >
              <p className="text-white/80 text-lg font-medium italic leading-relaxed">
                "Every champion was once a contender who refused to give up."
              </p>
              <p className="text-blue-400 text-sm font-semibold mt-2 tracking-wider">— Tahmina's Code</p>
            </motion.div>
          </div>

          {/* Right: Traits grid */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="group glass rounded-2xl p-6 border border-white/8 hover:border-blue-500/25 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <Icon size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2 tracking-wide">{trait.label}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{trait.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
