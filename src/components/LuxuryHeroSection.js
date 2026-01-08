import React, { useState, useEffect } from 'react';
import SimpleNavbar from './SimpleNavbar';
import HeroBackgroundVideo from './HeroBackgroundVideo';
import HeroBackgroundSlider from './HeroBackgroundSlider';
import { motion } from 'framer-motion';

const LuxuryHeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [useVideoBackground, setUseVideoBackground] = useState(true);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <SimpleNavbar />
      
      {/* Background - Video or Slider */}
      {useVideoBackground ? (
        <HeroBackgroundVideo isMobile={isMobile} />
      ) : (
        <HeroBackgroundSlider isMobile={isMobile} />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-amber-100 bg-opacity-20 backdrop-blur-sm border border-amber-200 border-opacity-30 rounded-full"
            >
              <span className="text-amber-100 text-sm font-medium tracking-wider uppercase">
                Luxury Residences in Mohali
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Regal Residencia
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-amber-100 font-light mb-8"
            >
              Limited Edition Residences
            </motion.h2>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-white text-opacity-90 mb-10 max-w-xl"
            >
              Experience unparalleled luxury with our premium apartments in the heart of Mohali/Tricity. 
              Designed for those who demand excellence in every detail.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition-colors transform hover:-translate-y-1 duration-300">
                Book Visit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white border-opacity-30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white hover:bg-opacity-10 transition-colors">
                View Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
      
      {/* Background Toggle for Demo */}
      <div className="absolute top-24 right-4 z-20">
        <button 
          onClick={() => setUseVideoBackground(!useVideoBackground)}
          className="px-3 py-2 bg-black bg-opacity-30 backdrop-blur-sm text-white text-xs rounded-md hover:bg-opacity-50 transition-all"
        >
          Switch to {useVideoBackground ? 'Slider' : 'Video'}
        </button>
      </div>
    </div>
  );
};

export default LuxuryHeroSection;