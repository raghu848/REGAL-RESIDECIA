import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const GalleryContainer = styled.section`
  padding: 0 2rem 4rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
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



const CarouselContainer = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
  margin: 2rem 0 2rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: 1.5rem 0 1.5rem;
  }
`;

const CarouselTrack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`;

const GalleryItem = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 480px;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
  border: 4px solid rgba(212, 165, 64, 0.5);
  transition: all 0.3s ease;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 35px 70px rgba(212, 165, 64, 0.5);
    border: 4px solid rgba(212, 175, 55, 0.8);
    
    img {
      transform: scale(1.15);
    }
  }
  
  @media (max-width: 768px) {
    width: 320px;
    height: 380px;
  }
`;

const NavigationArrows = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ArrowButton = styled.button`
  background: rgba(212, 165, 64, 0.2);
  border: 2px solid #D4A540;
  color: #D4A540;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(212, 165, 64, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #D4A540, #b8860b);
    color: #0a0a0a;
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 8px 25px rgba(212, 165, 64, 0.4);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(212, 165, 64, 0.2);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
  z-index: 2;
  position: relative;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#D4A540' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(212, 165, 64, 0.3);
  
  &:hover {
    background: #D4A540;
    transform: scale(1.3);
    box-shadow: 0 3px 8px rgba(212, 165, 64, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const Caption = styled.p`
  text-align: center;
  color: #D4A540;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(212, 165, 64, 0.3);
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.visible ? 1 : 0};
  pointer-events: ${props => props.visible ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(212, 165, 64, 0.3);
  }
`;

const Luxury3DGallery = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-rotate carousel
  useEffect(() => {
    if (isAutoPlaying && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % items.length);
      }, 3000); // Increased interval to 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') { // Space bar to pause/play
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle mouse enter/leave for auto-play
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate positions for 3D effect
  const getTransform = (index, activeIndex, length) => {
    const positions = [
      { x: -200, y: 0, z: -200, scale: 0.7, opacity: 0.5, rotateY: -30 },
      { x: -100, y: 0, z: -100, scale: 0.85, opacity: 0.8, rotateY: -15 },
      { x: 0, y: 0, z: 0, scale: 1, opacity: 1, rotateY: 0 },
      { x: 100, y: 0, z: -100, scale: 0.85, opacity: 0.8, rotateY: 15 },
      { x: 200, y: 0, z: -200, scale: 0.7, opacity: 0.5, rotateY: 30 },
    ];

    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);

    if (absDiff > 2) {
      // Wrap around for circular effect
      const wrappedIndex = diff > 0 ? diff - length : diff + length;
      if (Math.abs(wrappedIndex) <= 2) {
        const posIndex = wrappedIndex + 2;
        return positions[posIndex];
      }
      return { x: 0, y: 0, z: 0, scale: 0.7, opacity: 0.5, rotateY: 0 };
    }

    const posIndex = diff + 2;
    return positions[posIndex] || { x: 0, y: 0, z: 0, scale: 0.7, opacity: 0.5, rotateY: 0 };
  };

  // Open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setShowLightbox(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    if (direction === 'next') {
      setLightboxIndex(prev => (prev + 1) % items.length);
    } else {
      setLightboxIndex(prev => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <>
      <GalleryContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
        <CarouselContainer ref={containerRef}>
          <CarouselTrack>
            {items.map((item, index) => {
              const transform = getTransform(index, currentIndex, items.length);
              return (
                <GalleryItem
                  key={item.id || index}
                  style={{
                    transform: `translateX(${transform.x}px) translateY(${transform.y}px) translateZ(${transform.z}px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                    opacity: transform.opacity,
                    zIndex: Math.round(transform.scale * 10),
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                </GalleryItem>
              );
            })}
          </CarouselTrack>
          
          <NavigationArrows>
            <ArrowButton onClick={goToPrev} aria-label="Previous image">
              &larr;
            </ArrowButton>
            <ArrowButton onClick={goToNext} aria-label="Next image">
              &rarr;
            </ArrowButton>
          </NavigationArrows>
        </CarouselContainer>
        
        <Caption>{items[currentIndex]?.title || ''}</Caption>
        
        <DotsContainer>
          {items.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </GalleryContainer>
      
      <Lightbox visible={showLightbox} onClick={closeLightbox}>
        <LightboxClose onClick={closeLightbox} aria-label="Close lightbox">
          &times;
        </LightboxClose>
        <LightboxImage 
          src={items[lightboxIndex]?.src} 
          alt={items[lightboxIndex]?.title}
          onClick={(e) => e.stopPropagation()}
        />
        <ArrowButton 
          style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)' }}
          onClick={(e) => {
            e.stopPropagation();
            navigateLightbox('prev');
          }}
          aria-label="Previous image in lightbox"
        >
          &larr;
        </ArrowButton>
        <ArrowButton 
          style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)' }}
          onClick={(e) => {
            e.stopPropagation();
            navigateLightbox('next');
          }}
          aria-label="Next image in lightbox"
        >
          &rarr;
        </ArrowButton>
      </Lightbox>
    </>
  );
};

export default Luxury3DGallery;