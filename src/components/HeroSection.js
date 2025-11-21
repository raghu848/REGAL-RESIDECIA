import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 150vh; /* Reduced from 200vh to 150vh */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(97, 70, 70, 0.7), rgba(10, 10, 10, 0.9)), 
              url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80') center/cover no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.9) 70%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    pointer-events: none;
    animation: shimmer 8s infinite;
  }
  
  @keyframes shimmer {
    0% { opacity: 0.1; }
    50% { opacity: 0.3; }
    100% { opacity: 0.1; }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  @media (max-width: 768px) {
    height: 174vh; /* Reduced from 170vh to 120vh */
  }
`;

// Adding a new styled component for the project logo
const ProjectLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  
  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-light);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    
    span {
      color: var(--accent-gold);
    }
  }
  
  .logo-subtext {
    font-size: 0.8rem;
    color: var(--accent-gold);
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    
    .logo-text {
      font-size: 1.5rem;
    }
    
    .logo-subtext {
      font-size: 0.7rem;
    }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 900px;
  padding: 0 20px;
  position: relative;
  margin-top: 50px; /* Reduced from 100px to 50px */
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
    border-radius: 2px;
  }
`;

const Subtitle = styled(motion.h3)`
  color: var(--accent-gold);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0.5rem; /* Reduced from 1rem to 0.5rem */
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: var(--accent-gold);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 2px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem; /* Reduced from 1.5rem to 1rem */
  margin-top: 2rem; /* Reduced from 5rem to 2rem */
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, #f5f5f5, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  animation: float 6s ease-in-out infinite;
  
  span {
    display: block;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1rem; /* Reduced from 2rem to 1rem */
  color: var(--text-muted);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: -15px;
    font-size: 4rem;
    color: rgba(212, 175, 55, 0.2);
    font-family: 'Playfair Display', serif;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FeatureHighlights = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  margin: 1rem auto;
  max-width: 700px;
  text-align: center;
  
  .feature-title {
    color: var(--accent-gold);
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .feature-description {
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .feature-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .feature-item {
    background: rgba(212, 175, 55, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--accent-gold);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    margin: 0.75rem auto;
    
    .feature-title {
      font-size: 1.1rem;
    }
    
    .feature-description {
      font-size: 0.9rem;
    }
    
    .feature-list {
      gap: 0.5rem;
    }
    
    .feature-item {
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Reduced from 2rem to 1.5rem */
  margin: 3rem 0; /* Reduced from 7.5rem to 3rem */
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem; /* Reduced from 1rem 1.5rem to 0.75rem 1rem */
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  min-width: 100px; /* Reduced from 120px to 100px */
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-gold);
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    min-width: 80px; /* Reduced from 100px to 80px */
    padding: 0.6rem 0.8rem; /* Reduced from 0.8rem 1rem to 0.6rem 0.8rem */
    
    .stat-number {
      font-size: 1.5rem;
    }
    
    .stat-label {
      font-size: 0.8rem;
    }
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--accent-gold), #b8860b);
  color: var(--primary-dark);
  border: none;
  padding: 0.8rem 2rem; /* Reduced from 1rem 2.5rem to 0.8rem 2rem */
  font-size: 1rem; /* Reduced from 1.1rem to 1rem */
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
  position: relative;
  overflow: hidden;
  margin-top: 1rem; /* Added to give some space above button */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem; /* Reduced from 0.8rem 2rem to 0.7rem 1.5rem */
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem; /* Reduced from 0.7rem 1.5rem to 0.6rem 1.2rem */
    font-size: 0.8rem;
    width: 100%;
    max-width: 250px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-light);
  font-size: 0.9rem;
  cursor: pointer;
  
  .scroll-arrow {
    margin-top: 5px;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-20px);}
    60% {transform: translateY(-10px);}
  }
  
  @media (max-width: 768px) {
    bottom: 5px;
    font-size: 0.8rem;
  }
`;

// Updated styled component for the sticky explore button - smaller and round with animated arrow
const StickyExploreButton = styled(motion.div)`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-gold), #b8860b);
  color: var(--primary-dark);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
  transition: all var(--transition-speed) ease;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  .explore-text {
    display: none;
  }
  
  .explore-arrow {
    font-size: 2rem;
    transition: transform 0.3s ease;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  
  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.6);
  }
  
  &.footer-reached {
    top: auto;
    bottom: 20px;
    transform: none;
    
    .explore-arrow {
      transform: rotate(180deg);
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    left: 10px;
    width: 50px;
    height: 50px;
    font-size: 0.8rem;
  }
`;

const HeroSection = () => {
  const [stats] = useState([
    { number: "13.44", label: "Acres" },
    { number: "688", label: "Units" },
    { number: "32", label: "Floors" },
    { number: "5", label: "Amenities" }
  ]);
  
  const [isFooterReached, setIsFooterReached] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down'); // Track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const footer = document.querySelector('footer');
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Check if footer is reached
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsFooterReached(footerPosition <= windowHeight);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const handleCTAClick = () => {
    // Scroll to the inquiry section
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const handleScrollDown = () => {
    window.scrollBy({ 
      top: window.innerHeight * 0.8, 
      behavior: 'smooth' 
    });
  };
  
  const handleExploreClick = () => {
    if (isFooterReached) {
      // Scroll to top when at footer
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    } else {
      // Scroll down when not at footer
      window.scrollBy({ 
        top: window.innerHeight * 0.8, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <HeroContainer>
      {/* Adding Project Logo */}
      <ProjectLogo>
        <div className="logo-content">
          <div className="logo-text">REGAL <span>RESIDENCIA</span></div>
          <div className="logo-subtext">Luxury Living</div>
        </div>
      </ProjectLogo>
      
      <HeroContent>
        <Subtitle
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
            color: 'linear-gradient(90deg, #d6a354, #726e91)', // For true gradient, use CSS below
            background: 'linear-gradient(90deg, #d6a354, #726e91)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 6px 24px rgba(140, 101, 43, 0.3)',
            borderRadius: '8px',
            padding: '0.4em 1.4em',
            backgroundColor: 'rgba(32, 32, 32, 0.75)',
            boxShadow: '0 8px 32px 0 rgba(60,60,90,0.08)',
            display: 'inline-block',
          }}
        >
          Luxury Living in Mohali
        </Subtitle>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>Regal</span>
          <span>Residencia</span>
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.
        </Description>
        
        <FeatureHighlights
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="feature-title">Premium Living Experience</div>
          <div className="feature-description">
          Regal Residencia offers a truly premium living experience by blending cutting-edge modern architecture with top-tier luxury amenities in Mohali. Residents enjoy advanced 24/7 security, smart home technology, generous green spaces,. Every detail is crafted to provide comfort, convenience, and a sophisticated lifestyle, ensuring that Regal Residencia stands out as the benchmark for luxury and innovation in residential living.
          </div>
          <div className="feature-list">
            <div className="feature-item">24/7 Security</div>
            <div className="feature-item">Smart Home Tech</div>
            <div className="feature-item">Green Spaces</div>
            <div className="feature-item">Premium Finishes</div>
          </div>
        </FeatureHighlights>
        
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </StatItem>
          ))}
        </StatsContainer>
        
        <CTAButton
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCTAClick}
        >
          Schedule a Visit
        </CTAButton>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={handleScrollDown}
      >
        <div className="scroll-arrow">↓</div>
      </ScrollIndicator>
      
      {/* Updated sticky explore button - arrow changes based on scroll direction */}
      <StickyExploreButton
        className={isFooterReached ? 'footer-reached' : ''}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleExploreClick}
      >
        <div className="explore-arrow">
          {scrollDirection === 'up' ? '↑' : '↓'}
        </div>
      </StickyExploreButton>
    </HeroContainer>
  );
};

export default HeroSection;