import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhotoCluster from './PhotoCluster';
import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {t.about.badge}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6"
            >
              {t.about.heading1}<br />
              <span className="text-gradient">{t.about.heading2}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/55 text-base leading-relaxed"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>
                <span className="text-white font-semibold">{t.about.p3bold}</span>
                {t.about.p3rest}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 glass rounded-2xl border-l-2 border-blue-500"
            >
              <p className="text-white/80 text-lg font-medium italic leading-relaxed">{t.about.quote}</p>
              <p className="text-blue-400 text-sm font-semibold mt-2 tracking-wider">{t.about.quoteAuthor}</p>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <PhotoCluster inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}
