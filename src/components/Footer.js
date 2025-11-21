import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background: var(--secondary-dark);
  padding: 3rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: var(--accent-gold);
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--accent-gold);
  }
  
  p, li {
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
  }
  
  li::before {
    content: '•';
    color: var(--accent-gold);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`;

const MapContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  position: relative;
  margin-bottom: 1rem;
  
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
    background: rgba(0, 0, 0, 0.7);
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
    color: var(--accent-gold);
  }
  
  .map-overlay p {
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }
`;

const DirectionsButton = styled.button`
  background: var(--accent-gold);
  color: var(--primary-dark);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    background: #e6c542;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .icon {
    width: 40px;
    height: 40px;
    background: rgba(212, 175, 55, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: var(--accent-gold);
    font-size: 1.2rem;
  }
  
  .contact-details h4 {
    color: var(--text-light);
    margin-bottom: 0.2rem;
  }
  
  .contact-details p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-light);
    text-decoration: none;
    transition: all var(--transition-speed) ease;
    font-size: 1.2rem;
  }
  
  a:hover {
    background: var(--accent-gold);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  font-size: 0.9rem;
  
  p {
    margin: 0.5rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <FooterContainer>
          <FooterColumn>
            <h3>Regal Residencia</h3>
            <p>Experience unparalleled luxury in the heart of Mohali. Premium residential-commercial project designed for those who demand excellence in every detail.</p>
            
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
              <a href="https://instagram.com/regalresidencia" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047z"/>
                  <path d="M8 3.993c-2.205 0-4 1.795-4 4s1.795 4 4 4 4-1.795 4-4-1.795-4-4-4zm0 7c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3z"/>
                  <circle cx="12.5" cy="3.5" r="1.5"/>
                </svg>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/regalresidencia" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
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
        
        <Copyright>
          <p>&copy; {new Date().getFullYear()} Regal Residencia. All Rights Reserved.</p>
          <p>Premium Residential-Commercial Project at Mohali Sector 114</p>
        </Copyright>
      </div>
    </FooterSection>
  );
};

export default Footer;