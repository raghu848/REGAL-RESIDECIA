import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #d4af37 0%, #f4e5a4 50%, #d4af37 100%);
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    padding: 0 4rem;
    max-width: 1100px;
  }
  
  @media (max-width: 992px) {
    padding: 0 3rem;
    max-width: 900px;
  }
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(212, 175, 55, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(212, 175, 55, 0.1) 0%, 
      transparent 30%, 
      transparent 70%, 
      rgba(212, 175, 55, 0.05) 100%);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
  
  @media (max-width: 992px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TextContent = styled.div`
  h2 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 2.8rem;
    font-weight: 300;
    color: #2c2c2c;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    position: relative;
    
    span {
      color: #ab8977;
      font-style: italic;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #d4af37, transparent);
    }
  }
  
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555555;
    text-align: justify;
    
  }
  
  @media (max-width: 1200px) {
    h2 {
      font-size: 2.4rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 992px) {
    text-align: center;
    
    h2 {
      font-size: 2.2rem;
    }
    
    p {
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    
    
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.6rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const DecorativeElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: 5%;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
      top: 5%;
      right: 3%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      bottom: 5%;
      left: 3%;
    }
  }
`;

const AboutUs = () => {
  return (
    <div id="about">
      <AboutSection>
        <DecorativeElements />
        <Container>
          <ContentLayout>
            <ImageContainer
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/render/Render_1.png" 
                alt="Regal Residencia Development View"
              />
            </ImageContainer>
            
            <TextContent>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
               <span>A Landmark<br />Destination in Mohali</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                This proposed residential–commercial development at Sector 114, Mohali, is envisioned as a thoughtfully planned urban destination that seamlessly blends modern living with vibrant commercial spaces. Spread across expansive residential and commercial zones, The project features high-rise towers with spacious 3 & 4 BHK residences crowned by exclusive 3+1 and 4+1 BHK penthouses, complemented by a well-integrated retail and lifestyle hub. Designed around open landscapes, podium-level amenities, and connected green spaces, the development offers an elevated lifestyle with world-class facilities, efficient planning, and excellent connectivity to Chandigarh, the airport, and key city landmarks.

              </motion.p>
            </TextContent>
          </ContentLayout>
        </Container>
      </AboutSection>
    </div>
  );
};

export default AboutUs;