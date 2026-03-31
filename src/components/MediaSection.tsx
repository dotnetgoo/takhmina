import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

function YtIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const CHANNEL = 'tahmina_k3';
const gradients = [
  'from-blue-600/20 to-purple-600/20',
  'from-purple-600/20 to-pink-600/20',
  'from-cyan-600/20 to-blue-600/20',
];

export default function MediaSection() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="media" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {t.media.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              {t.media.heading1}{' '}
              <span className="text-gradient">{t.media.heading2}</span>
            </h2>
            <p className="text-white/40 mt-3 text-base max-w-sm">{t.media.subtitle}</p>
          </div>

          <motion.a
            href={`https://www.youtube.com/@${CHANNEL}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/15 text-white text-sm font-semibold hover:border-red-500/40 transition-all duration-300 w-fit"
          >
            <ExternalLink size={14} />
            {t.media.viewChannel}
          </motion.a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.media.videos.map((video, i) => {
            const [hovered, setHovered] = useState(false);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <a href={`https://www.youtube.com/@${CHANNEL}`} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3">
                          <YtIcon size={28} className="text-white/60" />
                        </div>
                        <p className="text-white/30 text-xs tracking-wider uppercase">{t.media.watchOnYT}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ opacity: hovered ? 1 : 0 }}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ scale: hovered ? 1 : 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                      >
                        <Play size={22} className="text-white fill-white ml-1" />
                      </motion.div>
                    </motion.div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded-lg text-white text-xs font-mono font-bold">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-black/60 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="text-white text-xs font-semibold">{video.views} views</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1.5 group-hover:text-blue-300 transition-colors duration-200">{video.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{video.desc}</p>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass rounded-3xl border border-white/8 p-10 text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
              <YtIcon size={28} className="text-red-400" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">{t.media.subscribeTitle}</h3>
            <p className="text-white/40 mb-7 max-w-md mx-auto text-sm leading-relaxed">{t.media.subscribeDesc}</p>
            <motion.a
              href={`https://www.youtube.com/@${CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-colors shadow-xl shadow-red-600/20"
            >
              <YtIcon size={18} />
              {t.media.subscribeBtn}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
