import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Media', href: '#media' },
  { label: 'Social', href: '#social' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass border border-white/10 mx-4 px-6 py-3 shadow-2xl'
            : ''
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">T</span>
          </div>
          <span className="font-black text-lg tracking-widest text-white uppercase">
            Tahmina
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -1 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 tracking-wider uppercase"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://www.instagram.com/tahmina_k3/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-blue-500/20"
        >
          Follow Journey
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl border border-white/10 p-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white font-medium tracking-wider uppercase text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/tahmina_k3/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold text-center"
            >
              Follow Journey
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
