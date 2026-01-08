import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.7) 70%);
    pointer-events: none;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
    pointer-events: none;
    animation: shimmer 8s infinite;
    z-index: 3;
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
  
  @media (max-width: 1200px) {
    height: 140vh;
  }
  
  @media (max-width: 992px) {
    height: 130vh;
  }
  
  @media (max-width: 768px) {
    height: 120vh;
  }
  
  @media (max-width: 576px) {
    height: 110vh;
  }
  
  @media (max-width: 480px) {
    height: 100vh;
  }
  
  @media (max-width: 400px) {
    height: 90vh;
  }
  
  /* Additional media queries for 125% scaling and other resolutions */
  @media screen and (min-resolution: 120dpi) and (max-width: 1200px) {
    height: 145vh;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 1200px) {
    height: 150vh;
  }
`;

// Content Wrapper
const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroCard = styled(motion.div)`
  text-align: left;
  z-index: 2;
  max-width: 600px;
  position: relative;
  
  // Luxurious card styling
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 50px 0 0 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  
  // 3D tilt effect (opposite side with stronger tilt)
  transform: perspective(1000px) rotateY(8deg) rotateX(-3deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(5deg) rotateX(-1.5deg);
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 1200px) {
    top: 25px;
    left: 25px;
    
    .logo-text {
      font-size: 1.7rem;
    }
    
    .logo-subtext {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 992px) {
    top: 22px;
    left: 22px;
    
    .logo-text {
      font-size: 1.6rem;
    }
    
    .logo-subtext {
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 768px) {
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 24px;
    border-radius: 24px;
  }
  
  @media (max-width: 576px) {
    top: 15px;
    left: 15px;
    
    .logo-text {
      font-size: 1.3rem;
    }
    
    .logo-subtext {
      font-size: 0.6rem;
    }
  }
  
  @media (max-width: 480px) {
    top: 12px;
    left: 12px;
    
    .logo-text {
      font-size: 1.2rem;
    }
    
    .logo-subtext {
      font-size: 0.55rem;
    }
  }
  
  @media (max-width: 400px) {
    top: 10px;
    left: 10px;
    
    .logo-text {
      font-size: 1.1rem;
    }
    
    .logo-subtext {
      font-size: 0.5rem;
    }
  }
  
  /* Additional media queries for 125% scaling and other resolutions */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    top: 22px;
    left: 22px;
    
    .logo-text {
      font-size: 1.65rem;
    }
    
    .logo-subtext {
      font-size: 0.75rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    top: 24px;
    left: 24px;
    
    .logo-text {
      font-size: 1.7rem;
    }
    
    .logo-subtext {
      font-size: 0.8rem;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Tag = styled(motion.span)`
  display: inline-block;
  background: rgba(212, 175, 55, 0.15);
  color: var(--accent-gold);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    letter-spacing: 1.5px;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    font-size: 1.05rem;
    letter-spacing: 2.2px;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 2.5px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to bottom, #ffffff, #d4af37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  span {
    display: block;
  }
  
  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 1200px) {
    font-size: 3.7rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 1200px) {
    font-size: 3.9rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #FFFFFF; /* Changed from var(--text-muted) to pure white for maximum brightness */
  max-width: 500px;
  line-height: 1.7;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.85rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 1200px) {
    font-size: 1.15rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 1200px) {
    font-size: 1.2rem;
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
  
  @media (max-width: 1200px) {
    padding: 0.8rem;
    margin: 0.8rem auto;
    
    .feature-title {
      font-size: 1.2rem;
    }
    
    .feature-description {
      font-size: 0.95rem;
    }
    
    .feature-list {
      gap: 0.75rem;
    }
    
    .feature-item {
      padding: 0.4rem 0.9rem;
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 992px) {
    padding: 0.75rem;
    margin: 0.75rem auto;
    
    .feature-title {
      font-size: 1.15rem;
    }
    
    .feature-description {
      font-size: 0.9rem;
    }
    
    .feature-list {
      gap: 0.6rem;
    }
    
    .feature-item {
      padding: 0.35rem 0.85rem;
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    margin: 0.7rem auto;
    
    .feature-title {
      font-size: 1.1rem;
    }
    
    .feature-description {
      font-size: 0.85rem;
    }
    
    .feature-list {
      gap: 0.5rem;
    }
    
    .feature-item {
      padding: 0.3rem 0.8rem;
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem;
    margin: 0.6rem auto;
    
    .feature-title {
      font-size: 1rem;
    }
    
    .feature-description {
      font-size: 0.8rem;
    }
    
    .feature-list {
      gap: 0.4rem;
    }
    
    .feature-item {
      padding: 0.25rem 0.7rem;
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 400px) {
    padding: 0.5rem;
    margin: 0.5rem auto;
    
    .feature-title {
      font-size: 0.9rem;
    }
    
    .feature-description {
      font-size: 0.75rem;
    }
    
    .feature-list {
      gap: 0.3rem;
    }
    
    .feature-item {
      padding: 0.2rem 0.6rem;
      font-size: 0.65rem;
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
  
  @media (max-width: 1200px) {
    min-width: 90px;
    padding: 0.7rem 0.9rem;
    
    .stat-number {
      font-size: 1.8rem;
    }
    
    .stat-label {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 992px) {
    min-width: 85px;
    padding: 0.65rem 0.85rem;
    
    .stat-number {
      font-size: 1.7rem;
    }
    
    .stat-label {
      font-size: 0.8rem;
    }
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
  
  @media (max-width: 576px) {
    min-width: 70px;
    padding: 0.5rem 0.7rem;
    
    .stat-number {
      font-size: 1.3rem;
    }
    
    .stat-label {
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 400px) {
    min-width: 60px;
    padding: 0.4rem 0.6rem;
    
    .stat-number {
      font-size: 1.1rem;
    }
    
    .stat-label {
      font-size: 0.6rem;
    }
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--accent-gold), #b8860b);
  color: var(--primary-dark);
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.7);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1200px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 992px) {
    padding: 0.7rem 1.6rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.65rem 1.3rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
  
  @media (max-width: 400px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    width: 100%;
    max-width: 200px;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: var(--text-light);
  border: 1px solid var(--accent-gold);
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 1200px) {
    bottom: 8px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 992px) {
    bottom: 7px;
    font-size: 0.82rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
  
  // Additional responsive styles for better mobile experience
  @media (max-width: 320px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const SocialProof = styled(motion.p)`
  color: var(--text-muted);
  font-size: 0.9rem;
  
  span {
    color: var(--accent-gold);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;


// Floating Cards Container
const FloatingCardsContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Floating Card
const FloatingCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  width: 250px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  // 3D tilt effect (matching hero card)
  transform: perspective(1000px) rotateY(8deg) rotateX(-3deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(5deg) rotateX(-1.5deg) translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.4);
    border-color: rgba(212, 175, 55, 0.6);
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .project-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0;
  }
  
  .price {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-gold);
  }
  
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #DDDDDD;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  
  .location-icon {
    color: var(--accent-gold);
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent-gold);
  }
  
  .stat-label {
    font-size: 0.7rem;
    color: #CCCCCC;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  @media (max-width: 576px) {
    bottom: 4px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 400px) {
    bottom: 3px;
    font-size: 0.7rem;
  }
`;

const StickyExploreButton = styled(motion.div)`
  position: fixed;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-gold), #b8860b);
  color: var(--primary-dark);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 6px 25px rgba(212, 175, 55, 0.5);
  transition: all var(--transition-speed) ease;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  .explore-text {
    display: none;
  }
  
  .explore-arrow {
    font-size: 2.5rem;
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
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.7);
  }
  
  &.footer-reached {
    top: auto;
    bottom: 30px;
    transform: none;
    
    .explore-arrow {
      transform: rotate(180deg);
    }
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 1200px) {
    left: 15px;
    width: 55px;
    height: 55px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 992px) {
    left: 12px;
    width: 52px;
    height: 52px;
    font-size: 0.82rem;
  }
  
  @media (max-width: 768px) {
    left: 15px;
    width: 60px;
    height: 60px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    left: 8px;
    width: 45px;
    height: 45px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 400px) {
    left: 5px;
    width: 40px;
    height: 40px;
    font-size: 0.7rem;
  }
`;

// Environmental Effects
const EnvironmentalEffects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const LightRay = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.position || '10%'};
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, 
    rgba(212, 175, 55, 0.4) 0%, 
    transparent 70%);
  transform: skewX(-20deg);
  opacity: 0.3;
  filter: blur(1px);
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(212, 175, 55, 0.6);
  border-radius: 50%;
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '30%'};
  box-shadow: 0 0 3px rgba(212, 175, 55, 0.8); /* Reduced shadow */
  animation: float ${props => props.duration || '15s'} infinite linear; /* Slower animation */
  
  @keyframes float {
    0% { 
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% { opacity: 0.7; } /* Reduced opacity */
    90% { opacity: 0.7; } /* Reduced opacity */
    100% { 
      transform: translateY(-100vh) translateX(${props => props.drift || '10px'}); /* Reduced drift */
      opacity: 0;
    }
  }
`;


const HeroSection = () => {


  const [stats] = useState([
    { number: "13.44", label: "Acres" },
    { number: "688", label: "Units" },
    { number: "32", label: "Floors" },
    { number: "5", label: "Star Amenities" }
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
      {/* Background - Image fallback with video option */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        }}
      />
      {/* Video as overlay with lower opacity */}
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          opacity: 0.5,
        }}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="/videos/hero-background.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content Wrapper */}
      <ContentWrapper>
        {/* Environmental Effects - Reduced for performance */}
        <EnvironmentalEffects>
          <LightRay position="45%" /> {/* Reduced from 3 to 1 light ray */}
          {Array.from({ length: 1 }).map((_, i) => ( /* Reduced from 3 to 1 particle */
            <Particle 
              key={i}
              top={`${Math.random() * 100}%`}
              left={`${Math.random() * 100}%`}
              duration={`${30 + Math.random() * 30}s`} /* Even slower particles */
              drift={`${Math.random() * 5 - 2.5}px`} /* Further reduced drift */
            />
          ))}
        </EnvironmentalEffects>
        
        <HeroCard
          initial={{ 
            opacity: 0, 
            transform: 'perspective(1000px) rotateY(10deg) rotateX(-4deg)' 
          }}
          animate={{ 
            opacity: 1, 
            transform: 'perspective(1000px) rotateY(8deg) rotateX(-3deg)' 
          }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent>
            <Tag
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium Residences
            </Tag>
            
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Experience</span>
              <span>{`Luxury Redefined`.includes('Luxury') ? (
                              <span>{`Luxury Redefined`.split('Luxury')[0]}<span className="luxury-text">Luxury</span>{`Luxury Redefined`.split('Luxury')[1]}</span>
                            ) : (
                              `Luxury Redefined`
                            )}</span>
            </Title>
            
            <Description
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover Regal Residencia, where modern architecture meets timeless elegance. 
              {`Our premium residential project redefines luxury living in the heart of Mohali.`.toLowerCase().includes('luxury') ? (
                              <span dangerouslySetInnerHTML={{__html: `Our premium residential project redefines luxury living in the heart of Mohali.`.replace(/(luxury)/gi, '<span class="luxury-text">$1</span>') }} />
                            ) : (
                              `Our premium residential project redefines luxury living in the heart of Mohali.`
                            )}
            </Description>
          
          <CTAContainer>
            <PrimaryButton
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTAClick}
            >
              Schedule a Visit
            </PrimaryButton>
            
            <SecondaryButton
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Scroll to projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                } else {
                  // Fallback to scroll down if projects section not found
                  window.scrollBy({ 
                    top: window.innerHeight * 0.8, 
                    behavior: 'smooth' 
                  });
                }
              }}
            >
              View Projects
            </SecondaryButton>
          </CTAContainer>
          
          <SocialProof
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Trusted by <span>200+</span> satisfied buyers
          </SocialProof>
        </HeroContent>
      </HeroCard>
      </ContentWrapper>
      
      {/* Floating Project Cards */}
      <FloatingCardsContainer>
        <FloatingCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          whileHover={{ y: -10 }}
        >
          <div className="card-header">
            <h3 className="project-name">Regal Residencia</h3>
            <div className="price">₹1.2 Cr*</div>
          </div>
          
          <div className="location">
            <span className="location-icon">📍</span>
            <span>Sector 70, Mohali</span>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">4.8 ★</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">95%</div>
              <div className="stat-label">Sold</div>
            </div>
          </div>
        </FloatingCard>
        
        <FloatingCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ y: -10 }}
        >
          <div className="card-header">
            <h3 className="project-name">Skyline Towers</h3>
            <div className="price">₹95 Lakh*</div>
          </div>
          
          <div className="location">
            <span className="location-icon">📍</span>
            <span>Sector 65, Mohali</span>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">4.6 ★</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">88%</div>
              <div className="stat-label">Sold</div>
            </div>
          </div>
        </FloatingCard>
      </FloatingCardsContainer>
      
    </HeroContainer>
  );
};

export default HeroSection;