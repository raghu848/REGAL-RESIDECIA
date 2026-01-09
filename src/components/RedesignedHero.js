import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground';

const HeroWrapper = styled.section`
  padding: 40px 20px;
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
  height: 70vh;
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
  position: relative;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.5);
  border-radius: 12px;
  padding: 15px;
  width: 293px;
  max-width: 293px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 100;
  overflow: visible;
  pointer-events: auto;
  top: 10px;
  left: -54px;
  
  @media (max-width: 767px) {
    max-width: 96%;
    width: 96%;
    padding: 12px;
    top: 5px;
    left: 0px;
  }
`;

const CloseButton = styled.button`
  background: rgba(212, 175, 55, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #d4af37;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  transition: all 0.3s ease;
  pointer-events: auto !important;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: rgba(212, 175, 55, 0.6);
    border-color: rgba(212, 175, 55, 0.8);
    transform: rotate(90deg);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.95);
    background: rgba(212, 175, 55, 0.7);
  }
  
  &:focus {
    outline: 1px solid rgba(212, 175, 55, 0.5);
    outline-offset: 1px;
  }
`;

const ContentColumn = styled.div`
  text-align: left;
  margin-top: 20px; /* Reduced margin since tag and button are inline */
`;

const VisualColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex: 1;
  }
  
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  background: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ffffff, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const Subheading = styled.p`
  font-size: 14px;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 15px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #d4af37, #b8860b);
  color: #0a0a0a;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
  }
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(212, 175, 57, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ffffff;
  font-size: 12px;
  
  svg {
    width: 16px;
    height: 16px;
    fill: #d4af37;
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 500px;
  
  .card {
    position: absolute;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    padding: 20px;
  }
  
  .card-1 {
    width: 80%;
    height: 200px;
    top: 0;
    left: 10%;
    z-index: 3;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
    border: 1px solid rgba(212, 175, 55, 0.2);
  }
  
  .card-2 {
    width: 70%;
    height: 180px;
    top: 50px;
    left: 5%;
    z-index: 2;
    transform: rotate(-5deg);
  }
  
  .card-3 {
    width: 70%;
    height: 180px;
    top: 100px;
    right: 5%;
    z-index: 1;
    transform: rotate(5deg);
  }
  
  .glow {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  
  @media (max-width: 767px) {
    max-width: 300px;
    
    .card-1 {
      height: 150px;
    }
    
    .card-2, .card-3 {
      height: 130px;
      top: 40px;
    }
    
    .glow {
      width: 150px;
      height: 150px;
    }
  }
`;

const RedesignedHero = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const [isLoaded, setIsLoaded] = useState(false); // Track if component has loaded
  const closeButtonRef = useRef(null);

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoaded(true); // Mark as loaded to trigger animation
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized event listener - only add when visible
  useEffect(() => {
    if (!isVisible) return;
    const button = closeButtonRef.current;
    if (!button) return;

    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsVisible(false);
    };
    
    button.addEventListener('click', handleClick, true);
    return () => button.removeEventListener('click', handleClick, true);
  }, [isVisible]);

  const handlePrimaryClick = () => {
    // Scroll to the inquiry section
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSecondaryClick = () => {
    // Scroll to the amenities section
    const amenitiesSection = document.getElementById('amenities');
    if (amenitiesSection) {
      amenitiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
              <ContentColumn>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                  <Tag>Premium Luxury Living</Tag>
                  <CloseButton 
                    ref={closeButtonRef}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsVisible(false);
                    }}
                    aria-label="Close"
                  >
                    ×
                  </CloseButton>
                </div>
                <Heading>
                  Experience<br />
                  Unparalleled<br />
                  Luxury Living
                </Heading>
                <Subheading>
                  Discover Regal Residencia, where modern architecture meets timeless elegance. 
                  Our premium residential project redefines luxury living in the heart of Mohali.
                </Subheading>
                
                <CTAWrapper>
                  <PrimaryButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrimaryClick}
                  >
                    Schedule a Private Tour
                  </PrimaryButton>
                  
                  <SecondaryButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSecondaryClick}
                  >
                    Explore Amenities
                  </SecondaryButton>
                </CTAWrapper>
                
                <TrustBadges>
                  <Badge>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                    <span>4.9/5 Rating</span>
                  </Badge>
                  
                  <Badge>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                    </svg>
                    <span>100+ Happy Residents</span>
                  </Badge>
                </TrustBadges>
              </ContentColumn>
            </ContentBox>
          )}
        </AnimatePresence>
      </Container>
    </HeroWrapper>
  );
};

export default RedesignedHero;