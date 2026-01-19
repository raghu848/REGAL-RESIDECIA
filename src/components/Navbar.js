import React, { useState, useEffect } from 'react';
import DownloadBrochureButton from './DownloadBrochureButton';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openMaps = (e) => {
    e.preventDefault();
    closeMenu();
    window.open('https://maps.google.com/?q=Regal+Residencia,+Mohali', '_blank');
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <a href="/" aria-label="Regal Residencia Home">
              <img src="/images/render/Regalia_Logo.png" alt="Regal Residencia Logo" style={{ height: '65px', width: 'auto', display: 'block', objectFit: 'contain' }} />
            </a>
          </div>
          
          <div className="nav-right">
            <div className="nav-links">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Project</a>
              <a href="#amenities" onClick={(e) => scrollToSection(e, 'amenities')}>Amenities</a>
              <button type="button" onClick={openMaps} className="location-link">
                Location
              </button>
            </div>
            
            <div className="button-group">
              <DownloadBrochureButton className="download-btn" />
              
              <a
                href="#inquiry"
                className="cta-btn"
                onClick={(e) => scrollToSection(e, 'inquiry')}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="calendar-icon">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                Book Visit
              </a>
            </div>
            
            <button 
              className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </nav>
      
      {isOpen && (
        <div className="mobile-overlay">
          <div className="mobile-content">
            <div className="mobile-logo">
              <a href="/">
                <img src="/images/render/Regalia_Logo.png" alt="Regal Residencia Logo" style={{ height: '60px', width: 'auto', display: 'block', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="mobile-nav">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Project</a>
              <a href="#amenities" onClick={(e) => scrollToSection(e, 'amenities')}>Amenities</a>
              <button type="button" onClick={openMaps} className="location-link">
                Location
              </button>
            </div>
            
            <div className="mobile-buttons">
              <DownloadBrochureButton className="download-btn mobile" />
              <a href="#inquiry" className="cta-btn mobile" onClick={(e) => scrollToSection(e, 'inquiry')}>
                Book Visit
              </a>
            </div>
            
            <div className="mobile-contact">
              <a href="tel:+91XXXXXXXXXX">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now
              </a>
              <a href="https://wa.me/+91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.96));
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(200, 180, 140, 0.25);
          z-index: 1000;
          padding: 0;
          transition: all 0.3s ease;
          border-radius: 0 0 30px 30px;
        }

        .navbar.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 0;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .logo-container {
          flex-shrink: 0;
        }

        .logo-container a {
          display: block;
        }

        .logo-container img {
          height: 65px;
          width: auto;
          display: block;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex: 1;
          justify-content: flex-end;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #4a4a4a;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          position: relative;
        }

        .nav-links a:hover {
          color: #c8b48c;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c8b48c;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }
        
        .location-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #4a4a4a;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .location-link:hover {
          color: #c8b48c;
        }
        
        .location-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c8b48c;
          transition: width 0.3s ease;
        }
        
        .location-link:hover::after {
          width: 100%;
        }

        .location-icon {
          width: 16px;
          height: 16px;
        }

        .button-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .download-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #4a4a4a;
          background: transparent;
          border: 1.5px solid #c8b48c;
          padding: 0.7rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .download-btn:hover {
          background: rgba(200, 180, 140, 0.1);
          color: #c8b48c;
          transform: translateY(-2px);
        }

        .cta-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: white;
          background: #ab8977;
          border: none;
          padding: 0.7rem 1.8rem;
          border-radius: 4px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(171, 137, 119, 0.3);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(171, 137, 119, 0.45);
        }

        .calendar-icon {
          width: 16px;
          height: 16px;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .mobile-menu-btn div {
          width: 25px;
          height: 2.5px;
          background: #4a4a4a;
          margin: 5px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .mobile-menu-btn.open div:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .mobile-menu-btn.open div:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open div:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          z-index: 999;
          display: none;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          padding: 2rem;
          gap: 2rem;
        }

        .mobile-logo img {
          height: 60px;
          width: auto;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        .mobile-nav a {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: #4a4a4a;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .mobile-nav a:hover {
          color: #c8b48c;
        }

        .mobile-nav svg {
          width: 20px;
          height: 20px;
        }

        .mobile-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 300px;
        }

        .download-btn.mobile,
        .cta-btn.mobile {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 0.95rem;
        }

        .mobile-contact {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }

        .mobile-contact a {
          color: #c8b48c;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .mobile-contact svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 1200px) {
          .navbar-container {
            max-width: 95%;
            padding: 1rem 2rem;
          }

          .nav-links {
            gap: 2rem;
          }

          .nav-right {
            gap: 2rem;
          }
        }

        @media (max-width: 992px) {
          .navbar-container {
            max-width: 95%;
            padding: 1rem 1.5rem;
          }

          .nav-links {
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.8rem;
          }

          .download-btn,
          .cta-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 1rem 1.5rem;
          }

          .logo-container img {
            height: 55px;
          }

          .nav-links,
          .button-group {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-overlay {
            display: flex;
          }

          .nav-right {
            gap: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;