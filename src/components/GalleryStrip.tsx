import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';

const srcs = [
  '/images/f1.svg',
  '/images/f2.svg',
  '/images/f3.svg',
  '/images/f4.svg',
  '/images/f5.svg',
  '/images/f6.svg',
];

export default function GalleryStrip() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#020309] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#020309] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 relative z-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/40 text-xs font-semibold tracking-[0.25em] uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {t.gallery.badge}
        </div>
      </motion.div>

      <div className="flex gap-4 px-12 overflow-x-auto scrollbar-hide pb-2 justify-start md:justify-center">
        {srcs.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.04 }}
            className="group relative flex-shrink-0 cursor-pointer"
          >
            <div
              className="relative w-44 h-60 rounded-2xl overflow-hidden border border-white/8 group-hover:border-blue-500/30 transition-all duration-300"
              style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.6)' }}
            >
              <img
                src={src}
                alt={t.gallery.labels[i]}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                  {t.gallery.labels[i]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
