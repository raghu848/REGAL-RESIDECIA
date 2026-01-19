import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #0a0a0a;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(45deg, 
        transparent 0%,
        transparent 25%,
        rgba(229, 185, 162, 0.08) 25%,
        rgba(229, 185, 162, 0.08) 50%,
        transparent 50%,
        transparent 75%,
        rgba(229, 185, 162, 0.08) 75%,
        rgba(229, 185, 162, 0.08) 100%
      );
    background-size: 100px 100px;
    z-index: 1;
  }
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  
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
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
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



const FooterColumn = styled.div`
  h3 {
    color: #e5b9a2;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    position: relative;
    padding-bottom: 0.5rem;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    font-weight: 300;
  }
  
  h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #e5b9a2, #f0d0c0);
    border-radius: 2px;
  }
  
  p, li {
    color: white;
    line-height: 1.7;
    margin-bottom: 0.6rem;
    font-family: 'Montserrat', sans-serif;
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
  background: #e5b9a2;
  color: #0a0a0a;
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
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 4px 15px rgba(229, 185, 162, 0.3);
  
  &:hover {
    background: #f0d0c0;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(229, 185, 162, 0.4);
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
    background: rgba(229, 185, 162, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    color: #e5b9a2;
    font-size: 1.3rem;
    border: 2px solid rgba(229, 185, 162, 0.4);
    box-shadow: 0 4px 10px rgba(229, 185, 162, 0.2);
    transition: all 0.3s ease;
  }
  
  .icon:hover {
    background: rgba(229, 185, 162, 0.3);
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(229, 185, 162, 0.4);
  }
  
  .contact-details h4 {
    color: white;
    margin-bottom: 0.2rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }
  
  .contact-details p {
    margin: 0;
    color: #e5b9a2;
    font-size: 0.95rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    margin-bottom: 1.1rem;
    
    .icon {
      width: 42px;
      height: 42px;
      font-size: 1.2rem;
      margin-right: 1.1rem;
      border-width: 2px;
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
      border-width: 2px;
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
      border-width: 2px;
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
      border-width: 2px;
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
      border-width: 2px;
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
    background: rgba(26, 26, 26, 0.8);
    color: #e5b9a2;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.3rem;
    border: 1px solid rgba(229, 185, 162, 0.2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  a:hover {
    background: #e5b9a2;
    color: #0a0a0a;
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 6px 15px rgba(229, 185, 162, 0.4);
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
  border-top: 1px solid rgba(229, 185, 162, 0.2);
  color: white;
  font-size: 0.95rem;
  flex: 1;
  margin-left: 2rem;
  font-family: 'Montserrat', sans-serif;
  
  p {
    margin: 0.6rem 0;
    font-size: 0.9rem;
  }
  
  p:first-child {
    color: #e5b9a2;
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
          {/* First Column - About Us */}
          <FooterColumn>
            <LogoContainer style={{ margin: '2rem 0 3rem 0', width: '180px', height: '70px' }}>
              <a href="/" aria-label="Regal Residencia Home">
                <img src="/images/render/Regalia_Logo_white.png" alt="Regal Residencia Logo" style={{ objectFit: 'contain' }} />
              </a>
            </LogoContainer>
            
            {/* <h3>About Us</h3>
            <p>Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.</p>
             */}
            <SocialLinks style={{ marginTop: '2rem' }}>
              <a href="https://facebook.com/regalresidencia" target="_blank" rel="noopener noreferrer" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="https://instagram.com/regalresidencia" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
            </SocialLinks>
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>
              <p>𝑷𝒓𝒐𝒅𝒖𝒄𝒕 𝒃𝒚</p>
              <img 
                src="/images/render/GDPL_Logo_white.png" 
                alt="GDPR Compliance Logo"
                style={{ maxWidth: '150px', height: 'auto' }}
              />
            </div>
          </FooterColumn>
          
          {/* Second Column - Contact Us */}
          <FooterColumn>
            <h3>Contact Us</h3>
            
            <ContactInfo>
              <div className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#e5b9a2"/>
                            </svg>
                          </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Mohali Sector 114, Punjab</p>
              </div>
            </ContactInfo>
            
            <ContactInfo>
              <div className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z" stroke="#e5b9a2" stroke-width="2" fill="none"/>
                              <path d="M7 7H17" stroke="#e5b9a2" stroke-width="2" stroke-linecap="round"/>
                              <path d="M7 11H13" stroke="#e5b9a2" stroke-width="2" stroke-linecap="round"/>
                              <path d="M7 15H10" stroke="#e5b9a2" stroke-width="2" stroke-linecap="round"/>
                              <path d="M15 15V17" stroke="#e5b9a2" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                          </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </ContactInfo>
            
            <ContactInfo>
              <div className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#e5b9a2"/>
                            </svg>
                          </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@regalresidencia.com</p>
              </div>
            </ContactInfo>
          </FooterColumn>
          
          {/* Third Column - Map */}
          <FooterColumn>
            <h3>Location Map</h3>
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.8684601234567!2d76.70894567345678!3d30.7333148456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0x9a7b4b5e5e5e5e5e!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy"
                title="Regal Residencia Location Map"
              ></iframe>
            </MapContainer>
            <DirectionsButton onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Mohali+Sector+114,+Punjab', '_blank')}>
               Get Directions
            </DirectionsButton>
          </FooterColumn>
        </FooterContainer>
        
        <Copyright>
          <p>&copy; {new Date().getFullYear()} Regal Residencia. All Rights Reserved.</p>
          <p>Premium Residential-Commercial Project at Mohali Sector 114</p>
        </Copyright>
      </div>
    </FooterSection>
  );
};

export default Footer;