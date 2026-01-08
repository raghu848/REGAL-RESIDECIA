import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #D4A540, transparent);
  }
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    margin-bottom: 1.4rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.2rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.1rem;
    margin-bottom: 1.1rem;
  }
  
  @media (max-width: 400px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.45rem;
    margin-bottom: 1.45rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

// Logo container for footer
const LogoContainer = styled.div`
  position: relative;
  width: 220px;
  height: 90px;
  margin: 0 auto 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 80px;
    margin: 0 auto 2rem;
  }
  
  @media (max-width: 480px) {
    width: 160px;
    height: 70px;
  }
`;

const BarsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  
  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const Bar = styled.div`
  background: linear-gradient(90deg, #D4A540 0%, #F4D576 50%, #D4A540 100%);
  height: 6px;
  border-radius: 3px;
  width: ${props => props.width || '20px'};
  box-shadow: 0 2px 5px rgba(212, 175, 55, 0.3);
  
  @media (max-width: 480px) {
    height: 5px;
  }
`;

const Circle = styled.div`
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  border: 2px solid #666;
  background: rgba(26, 26, 26, 0.8);
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  
  @media (max-width: 480px) {
    right: 40px;
    width: 30px;
    height: 30px;
  }
`;

const TextContainer = styled.div`
  padding-top: 0;
  z-index: 3;
`;

const RegalText = styled.div`
  font-family: 'Arial Black', 'Arial Bold', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: #D4A540;
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
  display: block;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ResidenciaText = styled.div`
  font-family: 'Brush Script MT', cursive, sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: #D4A540;
  margin: -8px 0 0 0;
  letter-spacing: 0.5px;
  font-style: italic;
  display: block;
  line-height: 1;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: #D4A540;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    position: relative;
    padding-bottom: 0.5rem;
    font-weight: 600;
  }
  
  h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #D4A540, #F4D576);
    border-radius: 2px;
  }
  
  p, li {
    color: #e0e0e0;
    line-height: 1.7;
    margin-bottom: 0.6rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.9rem;
    display: flex;
    align-items: flex-start;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  li:hover {
    transform: translateX(5px);
    color: #D4A540;
  }
  
  li::before {
    content: '•';
    color: #D4A540;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.3rem;
    }
    
    p, li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    
    li {
      margin-bottom: 0.8rem;
    }
  }
  
  @media (max-width: 992px) {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
    
    p, li {
      font-size: 0.95rem;
      margin-bottom: 0.4rem;
    }
    
    li {
      margin-bottom: 0.7rem;
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 1.1rem;
    }
    
    p, li {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
    
    li {
      margin-bottom: 0.6rem;
    }
  }
  
  @media (max-width: 576px) {
    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    
    p, li {
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.9rem;
    }
    
    p, li {
      font-size: 0.8rem;
      margin-bottom: 0.15rem;
    }
    
    li {
      margin-bottom: 0.45rem;
    }
  }
  
  @media (max-width: 400px) {
    h3 {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    p, li {
      font-size: 0.75rem;
    }
    
    li {
      margin-bottom: 0.4rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    h3 {
      font-size: 1.12rem;
      margin-bottom: 1.12rem;
    }
    
    p, li {
      font-size: 0.92rem;
      margin-bottom: 0.32rem;
    }
    
    li {
      margin-bottom: 0.62rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    h3 {
      font-size: 1.15rem;
      margin-bottom: 1.15rem;
    }
    
    p, li {
      font-size: 0.95rem;
      margin-bottom: 0.35rem;
    }
    
    li {
      margin-bottom: 0.65rem;
    }
  }
`;

const MapContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  height: 250px;
  position: relative;
  margin-bottom: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 26, 26, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    color: white;
  }
  
  .map-overlay h4 {
    margin-bottom: 1rem;
    color: #D4A540;
    font-size: 1.2rem;
  }
  
  .map-overlay p {
    margin-bottom: 0.5rem;
    color: #e0e0e0;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    height: 230px;
    margin-bottom: 0.9rem;
    
    .map-overlay {
      padding: 0.9rem;
    }
    
    .map-overlay h4 {
      font-size: 1.1rem;
      margin-bottom: 0.9rem;
    }
    
    .map-overlay p {
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
    }
  }
  
  @media (max-width: 992px) {
    border-radius: 8px;
    height: 210px;
    margin-bottom: 0.8rem;
    
    .map-overlay {
      padding: 0.8rem;
    }
    
    .map-overlay h4 {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    
    .map-overlay p {
      font-size: 0.85rem;
      margin-bottom: 0.3rem;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 6px;
    height: 190px;
    margin-bottom: 0.7rem;
    
    .map-overlay {
      padding: 0.7rem;
    }
    
    .map-overlay h4 {
      font-size: 0.9rem;
      margin-bottom: 0.7rem;
    }
    
    .map-overlay p {
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
    }
  }
  
  @media (max-width: 576px) {
    height: 170px;
    margin-bottom: 0.6rem;
    
    .map-overlay {
      padding: 0.6rem;
    }
    
    .map-overlay h4 {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
    
    .map-overlay p {
      font-size: 0.75rem;
      margin-bottom: 0.1rem;
    }
  }
  
  @media (max-width: 400px) {
    height: 150px;
    margin-bottom: 0.5rem;
    
    .map-overlay {
      padding: 0.5rem;
    }
    
    .map-overlay h4 {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
    
    .map-overlay p {
      font-size: 0.7rem;
    }
  }
`;

const DirectionsButton = styled.button`
  background: linear-gradient(135deg, #D4A540, #B8860B);
  color: #0F172A;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #e6c542, #D4A540);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    padding: 0.8rem 1.4rem;
    border-radius: 7px;
    font-size: 0.95rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 992px) {
    padding: 0.7rem 1.3rem;
    border-radius: 6px;
    font-size: 0.9rem;
    gap: 0.35rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.65rem 1.2rem;
    border-radius: 5px;
    font-size: 0.85rem;
    gap: 0.3rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 1.1rem;
    font-size: 0.8rem;
    gap: 0.25rem;
  }
  
  @media (max-width: 400px) {
    padding: 0.55rem 1rem;
    font-size: 0.75rem;
    gap: 0.2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
  
  .icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    color: #D4A540;
    font-size: 1.3rem;
    border: 1px solid rgba(212, 175, 55, 0.2);
  }
  
  .contact-details h4 {
    color: #e0e0e0;
    margin-bottom: 0.2rem;
    font-weight: 500;
  }
  
  .contact-details p {
    margin: 0;
    color: #D4A540;
    font-size: 0.95rem;
    font-weight: 500;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    margin-bottom: 1.1rem;
    
    .icon {
      width: 42px;
      height: 42px;
      font-size: 1.2rem;
      margin-right: 1.1rem;
    }
    
    .contact-details h4 {
      font-size: 0.95rem;
      margin-bottom: 0.15rem;
    }
    
    .contact-details p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 992px) {
    margin-bottom: 1rem;
    
    .icon {
      width: 38px;
      height: 38px;
      font-size: 1.1rem;
      margin-right: 1rem;
    }
    
    .contact-details h4 {
      font-size: 0.9rem;
    }
    
    .contact-details p {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0.9rem;
    
    .icon {
      width: 34px;
      height: 34px;
      font-size: 1rem;
      margin-right: 0.9rem;
    }
    
    .contact-details h4 {
      font-size: 0.85rem;
    }
    
    .contact-details p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.8rem;
    
    .icon {
      width: 30px;
      height: 30px;
      font-size: 0.9rem;
      margin-right: 0.8rem;
    }
    
    .contact-details h4 {
      font-size: 0.8rem;
    }
    
    .contact-details p {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 400px) {
    margin-bottom: 0.7rem;
    
    .icon {
      width: 26px;
      height: 26px;
      font-size: 0.8rem;
      margin-right: 0.7rem;
    }
    
    .contact-details h4 {
      font-size: 0.75rem;
    }
    
    .contact-details p {
      font-size: 0.7rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(0, 0, 0, 0.8));
    color: #D4A540;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.3rem;
    border: 1px solid rgba(212, 175, 55, 0.2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  a:hover {
    background: linear-gradient(135deg, #D4A540, #F4D576);
    color: #0F172A;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 6px 15px rgba(212, 175, 55, 0.4);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    gap: 1.1rem;
    margin-top: 1.3rem;
    
    a {
      width: 42px;
      height: 42px;
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 992px) {
    gap: 1rem;
    margin-top: 1.2rem;
    
    a {
      width: 38px;
      height: 38px;
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 768px) {
    gap: 0.9rem;
    margin-top: 1.1rem;
    
    a {
      width: 34px;
      height: 34px;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-top: 1rem;
    
    a {
      width: 30px;
      height: 30px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 400px) {
    gap: 0.7rem;
    margin-top: 0.9rem;
    
    a {
      width: 26px;
      height: 26px;
      font-size: 0.8rem;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  color: #e0e0e0;
  font-size: 0.95rem;
  flex: 1;
  margin-left: 2rem;
  
  p {
    margin: 0.6rem 0;
    font-size: 0.9rem;
  }
  
  p:first-child {
    color: #D4A540;
    font-weight: 500;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    padding-top: 1.5rem;
    font-size: 0.9rem;
    margin-left: 1.5rem;
    
    p {
      margin: 0.5rem 0;
    }
  }
  
  @media (max-width: 992px) {
    padding-top: 1.5rem;
    font-size: 0.85rem;
    margin-left: 1rem;
    
    p {
      margin: 0.4rem 0;
    }
  }
  
  @media (max-width: 768px) {
    padding-top: 1.5rem;
    font-size: 0.8rem;
    margin-left: 0;
    text-align: center;
    
    p {
      margin: 0.3rem 0;
    }
  }
  
  @media (max-width: 576px) {
    padding-top: 1.5rem;
    font-size: 0.75rem;
    
    p {
      margin: 0.2rem 0;
    }
  }
  
  @media (max-width: 400px) {
    padding-top: 1.2rem;
    font-size: 0.7rem;
    
    p {
      margin: 0.15rem 0;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">

        
        <FooterContainer>
          <FooterColumn>
            <h3>About Us</h3>
            <p>{`Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.`.toLowerCase().includes('luxury') ? (
                          <span dangerouslySetInnerHTML={{__html: `Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.`.replace(/(luxury)/gi, '<span class="luxury-text">$1</span>') }} />
                        ) : (
                          `Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.`
                        )}</p>
            
            <ContactInfo>
              <div className="icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Mohali Sector 114, Punjab</p>
              </div>
            </ContactInfo>
            
            <ContactInfo>
              <div className="icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </ContactInfo>
            
            <ContactInfo>
              <div className="icon">✉️</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@regalresidencia.com</p>
              </div>
            </ContactInfo>
            
            <SocialLinks>
              <a href="https://facebook.com/regalresidencia" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Connectivity</h3>
            <ul>
              <li>International Airport – 22 KM / 33 MIN</li>
              <li>Railway Station - 13 KM / 26 MIN</li>
              <li>Chandigarh - Nearby Tourist Destination</li>
              <li>Sukhna Lake - Nearby Tourist Destination</li>
              <li>Wildlife Sanctuary - Nearby Tourist Destination</li>
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Location Map</h3>
            <MapContainer>
              {/* In a real implementation, you would use Google Maps or another mapping service */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.8684601234567!2d76.70894567345678!3d30.7333148456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0x9a7b4b5e5e5e5e5e!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy"
                title="Regal Residencia Location Map"
              ></iframe>
            </MapContainer>
            <DirectionsButton onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Mohali+Sector+114,+Punjab', '_blank')}>
              🚗 Get Directions
            </DirectionsButton>
          </FooterColumn>
        </FooterContainer>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '2rem' }}>
          <LogoContainer style={{ margin: 0 }}>
            <BarsContainer>
              <Bar width="25px" />
              <Bar width="32px" />
              <Bar width="40px" />
              <Bar width="32px" />
              <Bar width="25px" />
            </BarsContainer>
            <Circle />
            <TextContainer>
              <RegalText>
                REGAL
              </RegalText>
              <ResidenciaText>Residencial</ResidenciaText>
            </TextContainer>
          </LogoContainer>
          
          <Copyright>
            <p>&copy; {new Date().getFullYear()} Regal Residencia. All Rights Reserved.</p>
            <p>Premium Residential-Commercial Project at Mohali Sector 114</p>
          </Copyright>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;