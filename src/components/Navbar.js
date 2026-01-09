import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadBrochureButton from './DownloadBrochureButton';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95); /* White background */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1); /* Champagne gold accent */
  z-index: 1000;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0; /* Removing side margins to make navbar full width */

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    margin: 0; /* No side margins on smaller screens */
  }

  @media (max-width: 480px) {
    margin: 0; /* No side margins on very small screens */
  }

  &.scrolled {
    padding: 0.5rem 1.5rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }
`;

const NavbarWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 140px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const BarsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 2;
`;

const Bar = styled.div`
  background: linear-gradient(90deg, #D4A540 0%, #F4D576 50%, #D4A540 100%);
  height: 4px;
  border-radius: 2px;
  width: ${props => props.width || '20px'};
`;

const Circle = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  border: 1.5px solid #666;
  border-radius: 50%;
  z-index: 1;
`;

const TextContainer = styled.div`
  padding-top: 0;
  z-index: 3;
`;

const RegalText = styled.a`
  font-family: 'Arial Black', 'Arial Bold', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #D4A540;
  text-decoration: none;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: uppercase;
  display: block;
`;

const ResidenciaText = styled.span`
  font-family: 'Brush Script MT', cursive, sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #999;
  margin: -5px 0 0 0;
  letter-spacing: 0.5px;
  font-style: italic;
  display: block;
  line-height: 1;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem; /* Slight left shift */
  
  @media (max-width: 1024px) {
    margin-left: 1.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.8rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 1.2rem;
  }
`;

const NavLink = styled.li`
  a {
    color: #0F172A; /* Dark text for contrast on white background */
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      color: #D4AF37;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #D4AF37;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const CTAButton = styled(motion.a)`
  background: linear-gradient(135deg, #D4AF37, #B8860B);
  color: #0F172A;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background: #0F172A; /* Dark color for contrast on white background */
    margin: 5px 0;
    transition: 0.3s;
    border-radius: 2px;
  }

  &.open div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98); /* White background for mobile menu */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 2rem;
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2.5rem;
  text-align: center;
  width: 100%;
  max-width: 300px;
`;

const MobileNavLink = styled.li`
  a {
    color: #0F172A; /* Dark text for contrast on white background */
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #D4AF37;
    }
  }
`;

const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 300px;
  margin-top: 2rem;
`;

const MobileCTAButton = styled(motion.a)`
  background: linear-gradient(135deg, #D4AF37, #B8860B);
  color: #0F172A;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 1.2rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: none;
  font-size: 1.1rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  width: 100%;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

const QuickContact = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactLink = styled.a`
  color: #D4AF37;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFF;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CalendarIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

const LocationIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Smooth scrolling function
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  // Open Google Maps
  const openMaps = (e) => {
    e.preventDefault();
    closeMenu();
    // Replace with actual coordinates for Regal Residencia
    window.open('https://maps.google.com/?q=Regal+Residencia,+Mohali', '_blank');
  };

  return (
    <>
      <NavbarContainer className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <NavbarWrapper>
          <LogoContainer>
            <BarsContainer>
              <Bar width="18px" />
              <Bar width="24px" />
              <Bar width="30px" />
              <Bar width="24px" />
              <Bar width="18px" />
            </BarsContainer>
            <Circle />
            <TextContainer>
              <RegalText href="/" aria-label="Regal Residencia Home">
                REGAL
              </RegalText>
              <ResidenciaText>Residencial</ResidenciaText>
            </TextContainer>
          </LogoContainer>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavContainer>
              <NavLinks>
                <NavLink><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Project</a></NavLink>
                <NavLink><a href="#amenities" onClick={(e) => scrollToSection(e, 'amenities')}>Amenities</a></NavLink>
                <NavLink>
                  <a href="#" onClick={openMaps}>
                    <LocationIcon viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                    </LocationIcon>
                    Location
                  </a>
                </NavLink>
              </NavLinks>
            </NavContainer>
            
            <ButtonsContainer>
              <DownloadBrochureButton />
              
              <CTAButton
                href="#inquiry"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => scrollToSection(e, 'inquiry')}
                aria-label="Schedule Site Visit"
              >
                <CalendarIcon viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </CalendarIcon>
                Book Visit
              </CTAButton>
            </ButtonsContainer>
            
            <MobileMenuButton 
              className={isOpen ? 'open' : ''} 
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div></div>
              <div></div>
              <div></div>
            </MobileMenuButton>
          </div>
        </NavbarWrapper>
      </NavbarContainer>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
          >
            <MobileNavLinks>
              <MobileNavLink><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Project</a></MobileNavLink>
              <MobileNavLink><a href="#amenities" onClick={(e) => scrollToSection(e, 'amenities')}>Amenities</a></MobileNavLink>
              <MobileNavLink>
                <a href="#" onClick={openMaps}>
                  <LocationIcon viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </LocationIcon>
                  Location
                </a>
              </MobileNavLink>
            </MobileNavLinks>
            
            <MobileButtonsContainer>
              <DownloadBrochureButton />
              <MobileCTAButton
                href="#inquiry"
                onClick={(e) => scrollToSection(e, 'inquiry')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Visit
              </MobileCTAButton>
            </MobileButtonsContainer>
            
            <QuickContact>
              <ContactLink href="tel:+91XXXXXXXXXX" aria-label="Call us">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm17 4.53l-6.24 5.1a1 1 0 01-1.28 0L6 6.53V19h12V6.53z" />
                </svg>
                Call Now
              </ContactLink>
              <ContactLink href="https://wa.me/+91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </ContactLink>
            </QuickContact>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;