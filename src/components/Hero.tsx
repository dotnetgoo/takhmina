import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

// Particle canvas component
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#60a5fa', '#a78bfa', '#818cf8', '#c084fc'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 gradient-animated" />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/6 blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Particles */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {t.hero.badge}
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp} className="overflow-hidden mb-4">
          <h1
            className="font-black text-[clamp(5rem,16vw,14rem)] leading-none tracking-tighter uppercase"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            TAHMINA
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={fadeUp} className="mb-6">
          <p className="shimmer-text text-[clamp(1rem,2.5vw,1.5rem)] font-bold tracking-[0.3em] uppercase">
            {t.hero.tagline}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-white/40 text-base md:text-lg max-w-lg leading-relaxed mb-12 font-light tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center">
          <motion.a
            href="https://www.youtube.com/@tahmina_k3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm tracking-wider uppercase shadow-2xl shadow-blue-500/25 transition-all duration-300"
          >
            <Play size={16} className="fill-white group-hover:scale-110 transition-transform" />
            {t.hero.watchTraining}
          </motion.a>

          <motion.a
            href="https://www.instagram.com/tahmina_k3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-bold text-sm tracking-wider uppercase hover:border-blue-500/40 transition-all duration-300"
          >
            {t.hero.followJourney}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex items-center gap-10 md:gap-16"
        >
          {[
            { value: '18+',  label: t.hero.stats.yearsTraining },
            { value: '533K', label: t.hero.stats.instagram },
            { value: '94K',  label: t.hero.stats.youtube },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-white/35 text-xs font-medium tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-medium">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
