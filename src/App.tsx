import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Features from './components/Features';
import MediaSection from './components/MediaSection';
import Training from './components/Training';
import GalleryStrip from './components/GalleryStrip';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';
import './index.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(true), 100);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loader" onComplete={() => {}} />
        )}
      </AnimatePresence>

      <LanguageProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-[#020309]"
        >
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Training />
          <MediaSection />
          <GalleryStrip />
          <SocialProof />
          <CTA />
          <Footer />
        </motion.div>
      </LanguageProvider>
    </>
  );
}
