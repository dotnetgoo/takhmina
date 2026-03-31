import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Users, Heart, Play } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const platformData = [
  {
    platform: 'Instagram',
    handle: '@tahmina_k3',
    url: 'https://www.instagram.com/tahmina_k3/',
    followers: '533K',
    metricIcon: Users,
    color: 'from-pink-500 via-rose-500 to-orange-400',
    glow: 'rgba(236,72,153,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    platform: 'YouTube',
    handle: '@tahmina_k3',
    url: 'https://www.youtube.com/@tahmina_k3',
    followers: '94K',
    metricIcon: Play,
    color: 'from-red-600 to-red-400',
    glow: 'rgba(239,68,68,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    platform: 'TikTok',
    handle: '@tahmina_k3',
    url: 'https://www.tiktok.com/@tahmina_k3',
    followers: '5.4K',
    metricIcon: Heart,
    color: 'from-cyan-400 via-sky-500 to-blue-600',
    glow: 'rgba(34,211,238,0.15)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
];

function SocialCard({ data, t_platform, index }: { data: typeof platformData[0]; t_platform: { metric: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const MetricIcon = data.metricIcon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${data.glow} 0%, transparent 70%)`, filter: 'blur(20px)' }}
      />
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col glass rounded-3xl p-7 border border-white/8 group-hover:border-white/15 transition-all duration-500 overflow-hidden h-full"
      >
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${data.color} opacity-60`} />
        <div className="flex items-start justify-between mb-5">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${data.color} text-white shadow-lg`}>{data.icon}</div>
          <ExternalLink size={16} className="text-white/20 group-hover:text-white/50 transition-colors mt-1" />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-black text-white tracking-tight">{data.platform}</h3>
          <p className={`text-sm font-semibold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>{data.handle}</p>
        </div>
        <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">{t_platform.desc}</p>
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{ background: `linear-gradient(135deg, ${data.glow}, transparent)`, border: `1px solid ${data.glow}` }}
          >
            <MetricIcon size={14} className="text-white/70" />
            <span className="text-white font-bold text-sm">{data.followers}</span>
            <span className="text-white/50 text-xs">{t_platform.metric}</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function SocialProof() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="social" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            {t.social.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {t.social.heading1}{' '}
            <span className="text-gradient">{t.social.heading2}</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-base">{t.social.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {platformData.map((data, i) => (
            <SocialCard key={data.platform} data={data} t_platform={t.social.platforms[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
