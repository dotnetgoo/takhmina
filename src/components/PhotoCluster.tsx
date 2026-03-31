import { motion } from 'framer-motion';

// When real photos are ready: replace .svg with .jpg and drop files in public/images/
const photos = [
  { src: '/images/f1.svg', alt: 'Guard stance', rotate: '-4deg', offsetX: '-60px', offsetY: '30px', z: 10 },
  { src: '/images/f4.svg', alt: 'Ring side',    rotate: '2deg',  offsetX: '0px',   offsetY: '-10px', z: 20 },
  { src: '/images/f6.svg', alt: 'Strength',     rotate: '5deg',  offsetX: '60px',  offsetY: '20px', z: 15 },
];

export default function PhotoCluster({ inView }: { inView: boolean }) {
  return (
    <div className="relative flex items-center justify-center h-[380px]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 bg-blue-600/8 rounded-full blur-[70px]" />
      </div>

      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={inView ? { opacity: 1, y: 0, rotate: photo.rotate, zIndex: photo.z } : {}}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.07, rotate: '0deg', zIndex: 30, y: -8 }}
          className="absolute cursor-pointer"
          style={{ transform: `translateX(${photo.offsetX}) translateY(${photo.offsetY})`, zIndex: photo.z }}
        >
          <div
            className="relative w-36 h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)' }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
            {/* Top shimmer on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
