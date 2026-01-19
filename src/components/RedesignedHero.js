import React from 'react';
import styled from 'styled-components';
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
  
  @media (max-width: 767px) {
    padding: 0 10px;
    justify-content: center;
  }
`;





const RedesignedHero = () => {
  // Removed popup functionality
  // Content box has been removed from hero section

  // Note: Close button uses onClick handler directly - no need for separate event listener

  return (
    <HeroWrapper>
      <VideoBackground />
      <Container>
        {/* Content box has been removed from hero section */}
      </Container>
    </HeroWrapper>
  );
};

export default RedesignedHero;