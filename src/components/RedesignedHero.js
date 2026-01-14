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

const CloseButton = styled.button`
  background: rgba(212, 175, 55, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #d4af37;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
  font-size: 14px;
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
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%);
  color: #fbbf24;
  padding: 0.3rem 0.6rem;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid rgba(245, 158, 11, 0.3);
  backdrop-blur-sm;
  
  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 1rem 0;
  line-height: 1.3;
  
  br {
    display: block;
  }
  
  span {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  }
  
  @media (max-width: 767px) {
    font-size: 1.1rem;
    margin: 0.75rem 0;
  }
`;

const Subheading = styled.p`
  font-size: 0.875rem;
  color: #cbd5e1;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  
  @media (max-width: 767px) {
    font-size: 0.75rem;
    margin: 0 0 0.75rem 0;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 767px) {
    gap: 0.3rem;
    margin-bottom: 0.75rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  color: #ffffff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(245, 158, 11, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  @media (max-width: 767px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #93c5fd;
  border: 1px solid rgba(147, 197, 253, 0.5);
  padding: 0.6rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(147, 197, 253, 0.1);
    color: #bfdbfe;
    border-color: rgba(147, 197, 253, 0.8);
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(59, 130, 246, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 767px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.7rem;
  }
`;

const TrustBadges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #fbbf24;
  }
  
  div {
    display: flex;
    flex-direction: column;
    
    .rating {
      font-weight: 800;
      font-size: 1rem;
      color: #ffffff;
      line-height: 1;
    }
    
    .label {
      font-size: 0.6rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.1rem;
    }
  }
  
  span {
    color: #e2e8f0;
    font-weight: 600;
    font-size: 0.75rem;
  }
  
  @media (max-width: 767px) {
    padding: 0.4rem;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
    
    span {
      font-size: 0.65rem;
    }
    
    div {
      .rating {
        font-size: 0.8rem;
      }
      
      .label {
        font-size: 0.5rem;
      }
    }
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

  // Show popup after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoaded(true); // Mark as loaded to trigger animation
    }, 6000);
    
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
                  <Tag><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.575 2.37a2.625 2.625 0 00-3.15 0L2.22 6.84a2.625 2.625 0 00-.855 1.853v8.614c0 .918.33.833.855 1.853l6.205 4.47a2.625 2.625 0 003.15 0l6.205-4.47c.525-1.02.855-1.105.855-1.853V8.693c0-.918-.33-.833-.855-1.853l-6.205-4.47z"/></svg> Premium Luxury Living</Tag>
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
                  <span>Unparalleled</span><br />
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
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '1.25rem', height: '1.25rem'}}>
                      <path d="M12 2C8.22 2 5 5.22 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.78-3.22-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Schedule a Private Tour
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '1.25rem', height: '1.25rem'}}>
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
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
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.575 2.37a2.625 2.625 0 00-3.15 0L2.22 6.84a2.625 2.625 0 00-.855 1.853v8.614c0 .918.33.833.855 1.853l6.205 4.47a2.625 2.625 0 003.15 0l6.205-4.47c.525-1.02.855-1.105.855-1.853V8.693c0-.918-.33-.833-.855-1.853l-6.205-4.47z"/>
                    </svg>
                    <div>
                      <div className="rating">4.9/5</div>
                      <div className="label">Rating</div>
                    </div>
                  </Badge>
                  
                  <Badge>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63l-1.312.437a.75.75 0 01-.528-.04l-1.038-.346a.75.75 0 00-.528-.04l-1.038.346a.75.75 0 01-.528.04l-1.038-.346a.75.75 0 00-.528-.04l-1.038.346a.75.75 0 01-.528.04l-1.038-.346a.75.75 0 00-.528-.04l-1.038.346a.75.75 0 01-.528.04l-1.038-.346a.75.75 0 00-.528-.04l-1.038.346a.75.75 0 01-.528.04l-1.038-.346a.75.75 0 00-.528-.04l-1.038.346a.75.75 0 01-.363-.63l-1.312-.437a.75.75 0 01-.363-.63V19.125z"/>
                    </svg>
                    <div>
                      <div className="rating">100+</div>
                      <div className="label">Happy Residents</div>
                    </div>
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