import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ProjectOverview from './components/ProjectOverview';
import Amenities from './components/Amenities';
import LivingSpaces from './components/LivingSpaces';
import Gallery from './components/Gallery';
import ArchitectureGallery from './components/ArchitectureGallery';
import BuildingGallery from './components/BuildingGallery';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import SitePlans from './components/SitePlans';
import TechnicalSpecs from './components/TechnicalSpecs';

// Global Styles for Dark Theme
const GlobalStyle = createGlobalStyle`
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
    font-family: 'Inter', sans-serif;
    background-color: var(--primary-dark);
    color: var(--text-light);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }

  .section-title {
    position: relative;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-light);
    font-weight: 700; /* Make it bolder */
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

  .btn {
    background: linear-gradient(135deg, var(--accent-gold), #b8860b);
    color: var(--primary-dark);
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }

  .btn:active {
    transform: translateY(0);
  }
`;

const AppContainer = styled.div`
  background-color: var(--primary-dark);
  min-height: 100vh;
  width: 100%;
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
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
`;

// Phone Icon specifically styled
const PhoneIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #25D366, #128C7E);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  }
`;

// WhatsApp Icon
const WhatsAppIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #25D366, #128C7E);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  }
`;

// Facebook Icon
const FacebookIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #4267B2, #898F9C);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(66, 103, 178, 0.5);
  }
`;

// Instagram Icon
const InstagramIcon = styled(SocialIcon)`
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(188, 24, 136, 0.5);
  }
`;

// LinkedIn Icon
const LinkedInIcon = styled(SocialIcon)`
  background: linear-gradient(135deg, #0077B5, #00A0DC);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 119, 181, 0.5);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HeroSection />
        <LivingSpaces />
        <ProjectOverview />
        <SitePlans />
        <TechnicalSpecs />
        <Amenities />
        <Gallery />
        <ArchitectureGallery />
        <BuildingGallery />
        <Testimonials />
        <InquiryForm />
        <Footer />
        
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
            href="https://facebook.com/regalresidencia"
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
            href="https://instagram.com/regalresidencia"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Follow us on Instagram"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </InstagramIcon>
          
          <LinkedInIcon
            href="https://linkedin.com/company/regalresidencia"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Connect on LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </LinkedInIcon>
        </StickyIconsContainer>
      </AppContainer>
    </>
  );
}

export default App;