import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const DisclaimerContainer = styled(motion.div)`
  position: fixed;
  left: 1rem;
  top: 20%;
  z-index: 10000;
  max-width: 24rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 
              0 0 30px rgba(59, 130, 246, 0.2),
              inset 0 0 20px rgba(59, 130, 246, 0.1);
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.6;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Animated top border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.25rem;
    background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Glow effects */
  &::after {
    content: '';
    position: absolute;
    top: -5rem;
    right: -5rem;
    width: 10rem;
    height: 10rem;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
  
  &::backdrop {
    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  }

  @media (max-width: 768px) {
    left: 0.5rem;
    right: 0.5rem;
    max-width: calc(100% - 1rem);
    top: 10%;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10001;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, rgba(220, 38, 38, 1) 0%, rgba(185, 28, 28, 1) 100%);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 6px 15px rgba(239, 68, 68, 0.5);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.9);
    box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
  }
`;

const DisclaimerTitle = styled.h3`
  color: #93c5fd;
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-style: italic;
  
  &::before {
    content: '⚠️';
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }
`;

const DisclaimerContent = styled.p`
  margin: 0 0 1rem 0;
  color: #cbd5e1;
  
  span {
    color: #93c5fd;
    font-weight: 600;
  }
`;

const DisclaimerFooter = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '●';
    color: #22c55e;
    font-size: 0.5rem;
    margin-top: 0.25rem;
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(0.25rem);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(59, 130, 246, 0.5);
  }
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 5px rgba(59, 130, 246, 0.3);
  }
`;

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setShowDisclaimer(false), 300);
  };

  const handleUnderstand = () => {
    handleClose();
  };

  if (!showDisclaimer) return null;

  return (
    <DisclaimerContainer
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={isClosing ? 'opacity-0 -translate-x-8 scale-95' : 'opacity-100 translate-x-0 scale-100'}
    >
      <CloseButton
        onClick={handleClose}
        aria-label="Close disclaimer"
      >
        ×
      </CloseButton>
      
      <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem'}}>
        <div style={{position: 'relative', flexShrink: 0}}>
          <div style={{
            width: '3rem', 
            height: '3rem', 
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            position: 'relative'
          }}>
            ⚠️
          </div>
          <div style={{
            position: 'absolute',
            top: '-0.25rem',
            right: '-0.25rem',
            width: '0.75rem',
            height: '0.75rem',
            background: '#f59e0b',
            borderRadius: '50%',
            animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '-0.25rem',
            right: '-0.25rem',
            width: '0.75rem',
            height: '0.75rem',
            background: '#f59e0b',
            borderRadius: '50%'
          }}></div>
        </div>
        
        <div style={{flex: 1, paddingTop: '0.25rem'}}>
          <DisclaimerTitle>Important Notice</DisclaimerTitle>
          <p style={{color: 'rgba(147, 197, 253, 0.6)', fontSize: '0.75rem', marginBottom: '0.75rem'}}>Please read carefully</p>
        </div>
      </div>
      
      <DisclaimerContent>
        This website is a demonstration platform showcasing the premium features of <span>Regal Residencia</span>. All content, images, and data are for illustrative purposes only.
      </DisclaimerContent>
      
      <div style={{marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <InfoCard>
          <div style={{color: '#93c5fd', flexShrink: 0, marginTop: '0.125rem'}}>ℹ️</div>
          <p style={{color: '#cbd5e1', fontSize: '0.75rem', lineHeight: '1.5'}}>
            Prices, specifications, and availability are subject to change without notice
          </p>
        </InfoCard>
        
        <InfoCard>
          <div style={{color: '#93c5fd', flexShrink: 0, marginTop: '0.125rem'}}>ℹ️</div>
          <p style={{color: '#cbd5e1', fontSize: '0.75rem', lineHeight: '1.5'}}>
            Final product may differ from representations shown
          </p>
        </InfoCard>
      </div>
      
      <div style={{paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
        <DisclaimerFooter>
          By continuing to use this site, you acknowledge that you have read and understood this disclaimer.
        </DisclaimerFooter>
      </div>
      
      <ActionButton onClick={handleUnderstand}>
        I Understand
      </ActionButton>
    </DisclaimerContainer>
  );
};

export default Disclaimer;