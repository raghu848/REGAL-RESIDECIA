import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilmReelContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 6rem 0 2rem; // Extra padding at top for buttons, reduced bottom
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  margin: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
    pointer-events: none;
  }
`;

const FilmFrame = styled(motion.div)`
  flex: 0 0 auto;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    inset 0 0 15px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  transform: scale(1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.7),
      inset 0 0 20px rgba(212, 175, 55, 0.2);
    z-index: 10;
    
    img {
      transform: scale(1.1);
    }
  }
`;

const FilmReelTrack = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding: 3rem 0;
  width: max-content;
  animation: scroll var(--scroll-duration, 60s) linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const PerforationTop = styled.div`
  position: absolute;
  top: -8px;
  width: 12px;
  height: 12px;
  background: rgba(212, 175, 55, 0.3);
  border-radius: 50%;
  z-index: 2;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
  
  &:nth-child(odd) {
    left: 15%;
  }
  
  &:nth-child(even) {
    right: 15%;
  }
`;

const PerforationBottom = styled.div`
  position: absolute;
  bottom: -8px;
  width: 12px;
  height: 12px;
  background: rgba(212, 175, 55, 0.3);
  border-radius: 50%;
  z-index: 2;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
  
  &:nth-child(odd) {
    left: 15%;
  }
  
  &:nth-child(even) {
    right: 15%;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 60px;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #D4A540;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(212, 175, 55, 0.3);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
  }
  
  &:first-child {
    left: calc(50% - 30px); // Positioned to the left of center
  }
  
  &:last-child {
    left: calc(50% + 10px); // Positioned to the right of center
  }
`;

const CaptionContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const Caption = styled.p`
  color: #D4A540;
  font-size: 1.1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.9;
`;

const FilmReelGallery = ({ images }) => {
  const [duplicatedImages, setDuplicatedImages] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Keep for caption
  const containerRef = useRef(null);
  
  // Duplicate images for infinite scroll effect
  useEffect(() => {
    if (images && images.length > 0) {
      setDuplicatedImages([...images, ...images]);
    }
  }, [images]);
  
  // Calculate container width for responsive design
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Calculate frame width based on screen size
  const getFrameWidth = () => {
    if (containerWidth < 768) return 220; // Mobile - 1-2 frames visible
    if (containerWidth < 1024) return 280; // Tablet - 2-3 frames visible
    return 320; // Desktop - 4 frames visible
  };
  
  const frameWidth = getFrameWidth();
  const scrollDuration = (duplicatedImages.length * (frameWidth + 24)) / 50; // Adjust speed based on content with gap - increased speed
  
  return (
    <FilmReelContainer ref={containerRef}>
      <FilmReelTrack style={{ '--scroll-duration': `${scrollDuration}s` }}>
        {duplicatedImages.map((image, index) => (
          <FilmFrame
            key={index}
            className="film-frame"
            style={{ 
              width: `${frameWidth}px`, 
              height: `${frameWidth * 0.75}px` // 4:3 aspect ratio
            }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <PerforationTop />
            <PerforationBottom />
            <img 
              src={image.src} 
              alt={image.title} 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
              }}
            />
          </FilmFrame>
        ))}
      </FilmReelTrack>
      
      {images[currentIndex] && (
        <CaptionContainer>
          <Caption>{images[currentIndex].title}</Caption>
        </CaptionContainer>
      )}
    </FilmReelContainer>
  );
};

export default FilmReelGallery;