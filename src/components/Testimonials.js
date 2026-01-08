import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2.2rem 0;
  }
  
  @media (max-width: 400px) {
    padding: 2rem 0;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    padding: 3.2rem 0;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    padding: 3.4rem 0;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  background: #f8f8f8;
  border-radius: 16px;
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid #e0e0e0;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    padding: 2.5rem;
    margin: 1.8rem 0;
    border-radius: 14px;
  }
  
  @media (max-width: 992px) {
    padding: 2.2rem;
    margin: 1.6rem 0;
    border-radius: 12px;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 1.8rem 1.2rem;
    margin: 0.8rem;
    border-radius: 9px;
  }
  
  @media (max-width: 480px) {
    padding: 1.6rem 1rem;
    margin: 0.7rem;
    border-radius: 8px;
  }
  
  @media (max-width: 400px) {
    padding: 1.4rem 0.8rem;
    margin: 0.6rem;
    border-radius: 7px;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    padding: 2.1rem 1.6rem;
    margin: 1.1rem;
    border-radius: 10.5px;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    padding: 2.2rem 1.7rem;
    margin: 1.2rem;
    border-radius: 11px;
  }
  
  .quote-icon {
    font-size: 5rem;
    color: rgba(212, 175, 55, 0.3);
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: 'Playfair Display', serif;
    transform: rotate(180deg);
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 4.5rem;
      top: 18px;
      left: 18px;
    }
    
    @media (max-width: 992px) {
      font-size: 4rem;
      top: 16px;
      left: 16px;
    }
    
    @media (max-width: 768px) {
      font-size: 3.5rem;
      top: 14px;
      left: 14px;
    }
    
    @media (max-width: 576px) {
      font-size: 3rem;
      top: 12px;
      left: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 2.5rem;
      top: 10px;
      left: 10px;
    }
    
    @media (max-width: 400px) {
      font-size: 2rem;
      top: 8px;
      left: 8px;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 3.7rem;
      top: 15px;
      left: 15px;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 4rem;
      top: 16px;
      left: 16px;
    }
  }
  
  .testimonial-text {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #333333;
    margin-bottom: 2rem;
    font-style: italic;
    position: relative;
    z-index: 1;
    font-weight: 300;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 1.15rem;
      margin-bottom: 1.8rem;
      line-height: 1.7;
    }
    
    @media (max-width: 992px) {
      font-size: 1.1rem;
      margin-bottom: 1.6rem;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      font-size: 1.05rem;
      margin-bottom: 1.4rem;
      line-height: 1.5;
    }
    
    @media (max-width: 576px) {
      font-size: 1rem;
      margin-bottom: 1.2rem;
      line-height: 1.4;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 1.1rem;
      line-height: 1.3;
    }
    
    @media (max-width: 400px) {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 1.07rem;
      margin-bottom: 1.5rem;
      line-height: 1.55;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1.6rem;
      line-height: 1.6;
    }
  }
  
  .client-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      gap: 1.3rem;
    }
    
    @media (max-width: 992px) {
      gap: 1.1rem;
    }
    
    @media (max-width: 768px) {
      gap: 1rem;
    }
    
    @media (max-width: 576px) {
      gap: 0.8rem;
    }
    
    @media (max-width: 480px) {
      gap: 0.7rem;
    }
    
    @media (max-width: 400px) {
      gap: 0.6rem;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      gap: 1.05rem;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      gap: 1.1rem;
    }
  }
  
  .client-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #d4af37, #b8860b);
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-dark);
    border: 3px solid var(--accent-gold);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
      border: 2.5px solid var(--accent-gold);
    }
    
    @media (max-width: 992px) {
      width: 60px;
      height: 60px;
      font-size: 1.6rem;
      border: 2px solid var(--accent-gold);
    }
    
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 1.4rem;
      border: 1.5px solid var(--accent-gold);
    }
    
    @media (max-width: 576px) {
      width: 45px;
      height: 45px;
      font-size: 1.2rem;
      border: 1.2px solid var(--accent-gold);
    }
    
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
      font-size: 1.1rem;
      border: 1px solid var(--accent-gold);
    }
    
    @media (max-width: 400px) {
      width: 35px;
      height: 35px;
      font-size: 1rem;
      border: 0.8px solid var(--accent-gold);
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      width: 55px;
      height: 55px;
      font-size: 1.5rem;
      border: 1.7px solid var(--accent-gold);
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      width: 60px;
      height: 60px;
      font-size: 1.6rem;
      border: 2px solid var(--accent-gold);
    }
  }
  
  .client-details {
    text-align: left;
  }
  
  .client-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 0.3rem;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }
    
    @media (max-width: 992px) {
      font-size: 1.1rem;
      margin-bottom: 0.2rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 0.15rem;
    }
    
    @media (max-width: 576px) {
      font-size: 0.95rem;
      margin-bottom: 0.1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 0.05rem;
    }
    
    @media (max-width: 400px) {
      font-size: 0.85rem;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 1.05rem;
      margin-bottom: 0.17rem;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.2rem;
    }
  }
  
  .client-title {
    font-size: 1rem;
    color: var(--accent-gold);
    margin-bottom: 0.3rem;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 0.95rem;
      margin-bottom: 0.25rem;
    }
    
    @media (max-width: 992px) {
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 0.15rem;
    }
    
    @media (max-width: 576px) {
      font-size: 0.8rem;
      margin-bottom: 0.1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.75rem;
      margin-bottom: 0.05rem;
    }
    
    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 0.87rem;
      margin-bottom: 0.17rem;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
  }
  
  .client-location {
    font-size: 0.9rem;
    color: #666666;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 0.85rem;
    }
    
    @media (max-width: 992px) {
      font-size: 0.8rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
    
    @media (max-width: 576px) {
      font-size: 0.7rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.65rem;
    }
    
    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 0.77rem;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  
  .rating {
    color: var(--accent-gold);
    font-size: 1.2rem;
    margin-top: 0.5rem;
    
    /* Responsive design for all resolutions */
    @media (max-width: 1200px) {
      font-size: 1.1rem;
      margin-top: 0.4rem;
    }
    
    @media (max-width: 992px) {
      font-size: 1rem;
      margin-top: 0.3rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 0.2rem;
    }
    
    @media (max-width: 576px) {
      font-size: 0.8rem;
      margin-top: 0.1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
    
    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
    
    /* Additional media queries for 125% scaling */
    @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
      font-size: 0.95rem;
      margin-top: 0.25rem;
    }
    
    @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
      font-size: 1rem;
      margin-top: 0.3rem;
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--accent-gold);
    border-radius: 3px;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    font-size: 2.2rem;
    margin-bottom: 0.9rem;
    
    &::after {
      width: 70px;
      height: 2.5px;
      bottom: -9px;
    }
  }
  
  @media (max-width: 992px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    
    &::after {
      width: 60px;
      height: 2px;
      bottom: -8px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.7rem;
    
    &::after {
      width: 50px;
      height: 1.5px;
      bottom: -7px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    
    &::after {
      width: 40px;
      height: 1px;
      bottom: -6px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
    &::after {
      width: 35px;
      height: 0.8px;
      bottom: -5px;
    }
  }
  
  @media (max-width: 400px) {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    
    &::after {
      width: 30px;
      height: 0.5px;
      bottom: -4px;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 0.75rem;
    
    &::after {
      width: 52px;
      height: 1.6px;
      bottom: -7.2px;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 0.8rem;
    
    &::after {
      width: 55px;
      height: 1.7px;
      bottom: -7.5px;
    }
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    font-size: 1.05rem;
    max-width: 550px;
    margin: 0 auto 2.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1rem;
    max-width: 500px;
    margin: 0 auto 2.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 450px;
    margin: 0 auto 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    max-width: 400px;
    margin: 0 auto 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    max-width: 350px;
    margin: 0 auto 1.6rem;
  }
  
  @media (max-width: 400px) {
    font-size: 0.8rem;
    max-width: 300px;
    margin: 0 auto 1.4rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    font-size: 0.97rem;
    max-width: 470px;
    margin: 0 auto 2.1rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    font-size: 1rem;
    max-width: 500px;
    margin: 0 auto 2.2rem;
  }
`;

const NavigationButton = styled.button`
  background: #f0f0f0;
  border: 1px solid #d0d0d0;
  color: #333333;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin: 0 10px;
  
  &:hover {
    background: var(--accent-gold);
    border-color: var(--accent-gold);
    transform: translateY(-3px);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    margin: 0 9px;
  }
  
  @media (max-width: 992px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin: 0 8px;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    margin: 0 7px;
  }
  
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
    margin: 0 6px;
  }
  
  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
    margin: 0 5px;
  }
  
  @media (max-width: 400px) {
    width: 25px;
    height: 25px;
    font-size: 0.7rem;
    margin: 0 4px;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 37px;
    height: 37px;
    font-size: 0.95rem;
    margin: 0 7.5px;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin: 0 8px;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    gap: 0.7rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 992px) {
    gap: 0.6rem;
    margin-top: 1.6rem;
  }
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 1.4rem;
  }
  
  @media (max-width: 576px) {
    gap: 0.4rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.35rem;
    margin-top: 1.1rem;
  }
  
  @media (max-width: 400px) {
    gap: 0.3rem;
    margin-top: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    gap: 0.55rem;
    margin-top: 1.5rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    gap: 0.6rem;
    margin-top: 1.6rem;
  }
`;

const Indicator = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'var(--accent-gold)' : '#d0d0d0'};
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--accent-gold)' : '#a0a0a0'};
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 13px;
    height: 13px;
  }
  
  @media (max-width: 992px) {
    width: 12px;
    height: 12px;
  }
  
  @media (max-width: 768px) {
    width: 11px;
    height: 11px;
  }
  
  @media (max-width: 576px) {
    width: 10px;
    height: 10px;
  }
  
  @media (max-width: 480px) {
    width: 9px;
    height: 9px;
  }
  
  @media (max-width: 400px) {
    width: 8px;
    height: 8px;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 11.5px;
    height: 11.5px;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

const testimonialsData = [
  {
    id: 1,
    text: "Moving to Regal Residencia was the best investment decision we've ever made. The craftsmanship is exceptional, and the attention to detail in every corner reflects the premium quality. Our family enjoys the serene environment and world-class amenities daily.",
    name: "Dr. Amit Sharma",
    title: "Senior Executive, TechCorp",
    location: "Sector 114, Mohali",
    initials: "AS",
    rating: 5
  },
  {
    id: 2,
    text: "As an interior designer, I'm extremely particular about aesthetics and functionality. Regal Residencia exceeded my expectations with their thoughtful design elements and premium finishes. The community vibe is welcoming, and the security is top-notch.",
    name: "Priya Patel",
    title: "Interior Designer",
    location: "Chandigarh",
    initials: "PP",
    rating: 5
  },
  {
    id: 3,
    text: "After researching multiple luxury developments, Regal Residencia stood out for its strategic location and future appreciation potential. The transparency throughout the purchase process and the timely delivery made it a stress-free experience. Now enjoying our dream home!",
    name: "Rajiv Mehta",
    title: "Real Estate Investor",
    location: "Delhi",
    initials: "RM",
    rating: 5
  },
  {
    id: 4,
    text: "The clubhouse facilities are outstanding! From the infinity pool to the fully equipped gym, everything is maintained to perfection. My kids love the play area, and we often host gatherings in the party lawn. Truly a premium living experience.",
    name: "Sunita Verma",
    title: "Entrepreneur",
    location: "Mohali",
    initials: "SV",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  
  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  const renderRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  
  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Verified Testimonials</SectionTitle>
          <Subtitle>Hear from our esteemed residents about their premium living experience</Subtitle>
        </motion.div>
        
        <TestimonialsContainer>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeTestimonial === index ? 1 : 0,
                y: activeTestimonial === index ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              style={{ display: activeTestimonial === index ? 'block' : 'none' }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="client-info">
                <div className="client-avatar">
                  {testimonial.initials}
                </div>
                <div className="client-details">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-title">{testimonial.title}</div>
                  <div className="client-location">{testimonial.location}</div>
                  <div className="rating">{renderRating(testimonial.rating)}</div>
                </div>
              </div>
            </TestimonialCard>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
            <NavigationButton onClick={prevTestimonial}>❮</NavigationButton>
            
            <IndicatorsContainer>
              {testimonialsData.map((_, index) => (
                <Indicator
                  key={index}
                  active={activeTestimonial === index}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </IndicatorsContainer>
            
            <NavigationButton onClick={nextTestimonial}>❯</NavigationButton>
          </div>
        </TestimonialsContainer>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;