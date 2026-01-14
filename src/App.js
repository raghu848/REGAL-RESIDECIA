import React, { Suspense, lazy } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/RedesignedHero';
import Disclaimer from './components/Disclaimer';

// Lazy load heavy components
const SparkleStars = lazy(() => import('./components/SparkleStars'));
const ProjectOverview = lazy(() => import('./components/ProjectOverview'));
const Amenities = lazy(() => import('./components/Amenities'));
const LivingSpaces = lazy(() => import('./components/LivingSpaces'));
const BuildingGallery = lazy(() => import('./components/BuildingGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const InquiryForm = lazy(() => import('./components/InquiryForm'));
const Footer = lazy(() => import('./components/Footer'));
const SitePlans = lazy(() => import('./components/SitePlans'));

// Loading fallback component
const LoadingFallback = () => <div style={{ minHeight: '200px' }} />;



// Global Styles for Dark Theme
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  :root {
    --primary-dark: #0a0a0a;
    --secondary-dark: #121212;
    --accent-gold: #d4af37;
    --accent-silver: #c0c0c0;
    --text-light: #f5f5f5;
    --text-muted: #aaaaaa;
    --transition-speed: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Inter', sans-serif;
    background-color: var(--primary-dark);
    color: var(--text-light);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', 'Poppins', serif;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .section-title {
    position: relative;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.8rem;
    color: var(--text-light);
    font-weight: 800; /* Make it bolder */
    font-family: 'Playfair Display', 'Poppins', serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 100px; /* Increased width */
    height: 4px; /* Increased height */
    background: var(--accent-gold);
    margin: 1rem auto;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.5); /* Add shadow for glow effect */
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  /* Enhanced responsive design for all resolutions including 125% scaling */
  @media (max-width: 1200px) {
    .container {
      width: 95%;
      padding: 1.5rem 0;
    }
    
    .section-title {
      font-size: 2.2rem;
      margin-bottom: 2.5rem;
    }
  }
  
  @media (max-width: 992px) {
    .container {
      width: 95%;
      padding: 1.5rem 0;
    }
    
    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      width: 95%;
      padding: 1rem 0;
    }
    
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
    
    .section-title::after {
      width: 80px;
      height: 3px;
    }
  }
  
  @media (max-width: 576px) {
    .container {
      width: 95%;
      padding: 0.8rem 0;
    }
    
    .section-title {
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    .section-title::after {
      width: 60px;
      height: 2px;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      width: 95%;
      padding: 0.6rem 0;
    }
    
    .section-title {
      font-size: 1.4rem;
      margin-bottom: 1.1rem;
    }
    
    .section-title::after {
      width: 50px;
      height: 1.5px;
    }
  }
  
  @media (max-width: 400px) {
    .container {
      width: 95%;
      padding: 0.5rem 0;
    }
    
    .section-title {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    .container {
      width: 95%;
      padding: 1.1rem 0;
    }
    
    .section-title {
      font-size: 1.85rem;
      margin-bottom: 1.55rem;
    }
    
    .section-title::after {
      width: 82px;
      height: 3.2px;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    .container {
      width: 95%;
      padding: 1.2rem 0;
    }
    
    .section-title {
      font-size: 1.9rem;
      margin-bottom: 1.6rem;
    }
    
    .section-title::after {
      width: 85px;
      height: 3.5px;
    }
  }

  .btn {
    background: linear-gradient(135deg, var(--accent-gold), #b8860b);
    color: var(--primary-dark);
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }

  .btn:active {
    transform: translateY(0);
  }

  /* Image border-radius utility classes */
  .img-radius-1 {
    border-radius: 32px;
    border: 3px solid var(--accent-gold);
    max-width: 100%;
    display: block;
  }
  
  .img-radius-2 {
    border-radius: 32px 50px;
    border: 3px solid var(--accent-gold);
    max-width: 100%;
    display: block;
  }
  
  .img-radius-3 {
    border-radius: 20px 36px 12px;
    border: 3px solid var(--accent-gold);
    max-width: 100%;
    display: block;
  }
  
  .img-radius-4 {
    border-radius: 20px 28px 40px 32px;
    border: 3px solid var(--accent-gold);
    max-width: 100%;
    display: block;
  }
  
  .luxury-text {
    color: var(--accent-gold);
    font-weight: 700;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
`;

const AppContainer = styled.div`
  background-color: var(--primary-dark);
  min-height: 100vh;
  width: 100%;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    min-height: 100vh;
  }
  
  @media (max-width: 992px) {
    min-height: 100vh;
  }
  
  @media (max-width: 768px) {
    min-height: 100vh;
  }
  
  @media (max-width: 576px) {
    min-height: 100vh;
  }
  
  @media (max-width: 480px) {
    min-height: 100vh;
  }
  
  @media (max-width: 400px) {
    min-height: 100vh;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    min-height: 100vh;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    min-height: 100vh;
  }
`;

// Sticky Icons Container
const StickyIconsContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    right: 18px;
    bottom: 18px;
    gap: 13px;
  }
  
  @media (max-width: 992px) {
    right: 16px;
    bottom: 16px;
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    right: 15px;
    bottom: 15px;
    gap: 11px;
  }
  
  @media (max-width: 576px) {
    right: 12px;
    bottom: 12px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    right: 10px;
    bottom: 10px;
    gap: 9px;
  }
  
  @media (max-width: 400px) {
    right: 8px;
    bottom: 8px;
    gap: 8px;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    right: 16px;
    bottom: 16px;
    gap: 12px;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    right: 17px;
    bottom: 17px;
    gap: 13px;
  }
`;

// Social Icon Button
const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-gold);
  color: var(--primary-dark);
  font-size: 1.5rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-speed) ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// Phone Icon specifically styled
const PhoneIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #25D366, #128C7E);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// WhatsApp Icon
const WhatsAppIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #25D366, #128C7E);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// Facebook Icon
const FacebookIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #4267B2, #898F9C);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(66, 103, 178, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// Instagram Icon
const InstagramIcon = styled(SocialIcon)`
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(188, 24, 136, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

// LinkedIn Icon
const LinkedInIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #0077B5, #00A0DC);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 119, 181, 0.5);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    width: 48px;
    height: 48px;
    font-size: 1.4rem;
  }
  
  @media (max-width: 992px) {
    width: 46px;
    height: 46px;
    font-size: 1.35rem;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    width: 47px;
    height: 47px;
    font-size: 1.35rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <HeroSection />
        <Suspense fallback={LoadingFallback()}>
          <div id="about">
            <ProjectOverview />
          </div>
          <div id="living-spaces">
            <LivingSpaces />
          </div>
          <div id="amenities">
            <SitePlans />
            <Amenities />
          </div>
          <div id="location">
            <BuildingGallery />
          </div>
          <Testimonials />
          <div id="inquiry">
            <InquiryForm />
          </div>
          <Footer />
          <SparkleStars />
        </Suspense>
        <Disclaimer />
        
        {/* Sticky Social Media Icons */}
        <StickyIconsContainer>
          <PhoneIcon
            href="tel:+919876543210"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Call us"
          >
            📞
          </PhoneIcon>
          
          <WhatsAppIcon
            href="https://wa.me/919876543210"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </WhatsAppIcon>
          
          <FacebookIcon
            href="https://www.facebook.com/gdplmohali"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Follow us on Facebook"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
            </svg>
          </FacebookIcon>
          
          <InstagramIcon
            href="https://www.instagram.com/gdpl70/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Follow us on Instagram"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </InstagramIcon>
          

        </StickyIconsContainer>
      </AppContainer>
    </>
  );
}

export default App;