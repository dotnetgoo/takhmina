import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020309] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[80px]" />

      {/* Spinning ring */}
      <div className="relative mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-2 border-transparent"
          style={{
            background: 'linear-gradient(#020309, #020309) padding-box, linear-gradient(135deg, #3b82f6, #a855f7, #3b82f6) border-box',
          }}
        />
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center backdrop-blur-sm">
          <span className="text-white font-black text-2xl">T</span>
        </div>
      </div>

      {/* Name reveal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <div className="text-3xl font-black tracking-[0.4em] uppercase shimmer-text">
          TAHMINA
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-white/30 text-xs tracking-[0.3em] uppercase mt-3"
        >
          Professional MMA Fighter
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
