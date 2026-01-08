import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundVideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    .title-line {
      display: block;
      &.accent {
        color: #d4af37;
      }
    }
  }
  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  .cta-container {
    display: flex;
    gap: 1rem;
    button {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      &.cta-button {
        background: linear-gradient(135deg, #d4af37, #b8860b);
        color: #1a1a1a;
        border: none;
        box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.7);
        }
      }
      &.cta-outline-button {
        background: transparent;
        color: white;
        border: 1px solid #d4af37;
        &:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-3px);
        }
      }
    }
  }
`;

const HeroSectionSimple = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleExploreClick = () => {
    scrollToSection('about');
  };

  return (
    <HeroSection>
      <BackgroundVideoContainer>
        <video autoPlay muted loop playsInline>
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </BackgroundVideoContainer>
      
      <ContentContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="title-line">Regal</span>
            <span className="title-line accent">Residencia</span>
          </h1>
          <p className="hero-subtitle">
            {`Redefining Luxury Living in Mohali`.includes('Luxury') ? (
              <span>{`Redefining Luxury Living in Mohali`.split('Luxury')[0]}<span className="luxury-text">Luxury</span>{`Redefining Luxury Living in Mohali`.split('Luxury')[1]}</span>
            ) : (
              `Redefining Luxury Living in Mohali`
            )}
          </p>
        </motion.div>
        
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button 
            className="cta-button"
            onClick={() => scrollToSection('inquiry')}
          >
            Book a Visit
          </button>
          <button 
            className="cta-outline-button"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </button>
        </motion.div>
      </ContentContainer>
    </HeroSection>
  );
};

export default HeroSectionSimple;