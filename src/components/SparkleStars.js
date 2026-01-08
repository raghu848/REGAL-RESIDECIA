import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SparkleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9998;
  overflow: hidden;
`;

const SparkleStars = () => {
  // Generate random star positions
  const generateStars = () => {
    const stars = [];
    const starCount = 50; // Number of stars
    
    for (let i = 0; i < starCount; i++) {
      // Randomly position stars in left 15% or right 15% of screen to avoid hero section
      const side = Math.random() > 0.5 ? 'left' : 'right';
      let leftPos;
      
      if (side === 'left') {
        leftPos = Math.random() * 15; // 0-15% from left
      } else {
        leftPos = 85 + Math.random() * 15; // 85-100% from left (right side)
      }
      
      stars.push({
        id: i,
        top: Math.random() * 100, // 0-100% from top
        left: leftPos,
        size: Math.random() * 3 + 1, // 1-4px size
        duration: Math.random() * 3 + 2, // 2-5s animation duration
        delay: Math.random() * 5, // 0-5s delay
      });
    }
    
    return stars;
  };

  const stars = generateStars();

  return (
    <SparkleContainer>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="sparkle-star"
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#D4A540', // Golden color
            borderRadius: '50%',
            zIndex: 9999,
            pointerEvents: 'none',
            mixBlendMode: 'screen', // Lighter blending mode for golden stars
            boxShadow: '0 0 8px 2px rgba(212, 175, 64, 0.8)', // Glow effect
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.8, 0.5],
            boxShadow: [
              '0 0 4px 1px rgba(212, 175, 64, 0.5)',
              '0 0 12px 4px rgba(212, 175, 64, 0.9)',
              '0 0 4px 1px rgba(212, 175, 64, 0.5)',
            ],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </SparkleContainer>
  );
};

export default SparkleStars;