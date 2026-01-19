import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground';

const HeroWrapper = styled.section`
  padding: 50px 20px 40px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.7) 70%);
    pointer-events: none;
    z-index: 3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    z-index: 2;
    pointer-events: none;
  }
  
  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  
  @media (max-width: 767px) {
    padding: 0 10px;
    justify-content: center;
  }
`;

const ContentBox = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 20rem;
  width: 100%;
  box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.4), 
              0 0 20px rgba(59, 130, 246, 0.15),
              inset 0 0 15px rgba(59, 130, 246, 0.08);
  z-index: 100;
  overflow: visible;
  pointer-events: auto;
  top: 10px;
  left: 80px;
  
  /* Gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(124, 58, 237, 0.1) 100%);
    border-radius: 1rem;
    z-index: -1;
  }
  
  @media (max-width: 767px) {
    max-width: 90%;
    padding: 0.75rem;
    top: 5px;
    left: 5px;
  }
`;



const RedesignedHero = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const [isLoaded, setIsLoaded] = useState(false); // Track if component has loaded

  // Show popup after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoaded(true); // Mark as loaded to trigger animation
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);

  // Note: Close button uses onClick handler directly - no need for separate event listener

  return (
    <HeroWrapper>
      <VideoBackground />
      <Container>
        <AnimatePresence mode="wait">
          {isVisible && (
            <ContentBox
              key="hero-content-box"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.9 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
            
            </ContentBox>
          )}
        </AnimatePresence>
      </Container>
    </HeroWrapper>
  );
};

export default RedesignedHero;