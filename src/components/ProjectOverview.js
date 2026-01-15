import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OverviewSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1629 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(212, 175, 55, 0.02) 50%,
      transparent 70%
    );
    animation: shimmer 15s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.8rem;
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, #d4af37, transparent);
    }
  }
  
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1rem;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
  }
  
  .description {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.7);
    max-width: 800px;
    margin: 0 auto;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const FeatureBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: rgba(212, 175, 55, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(212, 175, 55, 0.12);
  }
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #d4af37;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    &::before {
      content: '◆';
      font-size: 0.7rem;
      opacity: 0.6;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      gap: 0.6rem;
    }
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.8rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
  
  .highlight {
    display: inline-block;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    border-left: 3px solid #d4af37;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    margin-top: 0.8rem;
    
    @media (max-width: 480px) {
      padding: 0.3rem 0.6rem;
      font-size: 0.85rem;
    }
  }
`;

const StatsWrapper = styled.div`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 70%
    );
    animation: shimmerStat 8s linear infinite;
  }
  
  @keyframes shimmerStat {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(212, 175, 55, 0.4);
    transform: scale(1.03);
  }
  
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #d4af37 0%, #f4e5a4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.4rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
  
  .stat-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    
    @media (max-width: 480px) {
      font-size: 0.75rem;
      letter-spacing: 1px;
    }
  }
`;

const ConnectivitySection = styled.div`
  margin-top: 3rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #d4af37, transparent);
    }
    
    @media (max-width: 480px) {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
      
      &::after {
        bottom: -8px;
        width: 60px;
        height: 1.5px;
      }
    }
  }
`;

const ConnectivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const ConnectivityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #d4af37, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateX(6px);
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: -5px 8px 24px rgba(212, 175, 55, 0.08);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .icon {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #d4af37;
    margin-bottom: 0.4rem;
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
  
  p {
    font-family: 'Inter', sans-serif;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-size: 0.9rem;
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }
`;

const AmenitiesSection = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.15);
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: #d4af37;
    margin-bottom: 1.5rem;
    text-align: center;
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
    }
  }
  
  .amenities-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .amenities-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }
  
  @media (max-width: 768px) {
    .amenities-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .amenities-row {
      grid-template-columns: 1fr;
    }
  }
  
  .amenity-item {
    font-family: 'Inter', sans-serif;
    background: rgba(212, 175, 55, 0.08);
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(212, 175, 55, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(212, 175, 55, 0.15);
      border-color: rgba(212, 175, 55, 0.4);
      transform: translateY(-3px);
    }
    
    strong {
      font-weight: 500;
    }
    
    &::before {
      content: '✦';
      color: #d4af37;
      margin-right: 0.4rem;
    }
    
    @media (max-width: 480px) {
      padding: 0.7rem 1rem;
      font-size: 0.85rem;
      border-radius: 8px;
    }
  }
`;

const ProjectOverview = () => {
  return (
    <OverviewSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <div className="subtitle">DISCOVER EXCELLENCE</div>
            <h2>Project Overview</h2>
            <p className="description">
              Experience the epitome of luxury living at Regal Residencia, where sophisticated design meets modern convenience in the heart of Mohali's most prestigious location.
            </p>
          </SectionHeader>
        </motion.div>
        
        <ContentGrid>
          <FeatureBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Prime Location</h3>
            <p>
              Strategically positioned in Mohali Sector 114, Regal Residencia offers unparalleled access to the region's finest amenities. Experience seamless connectivity to international hubs while enjoying the tranquility of an exclusive residential enclave.
            </p>
            <div className="highlight">
              📍 Minutes from International Airport & Railway Station
            </div>
          </FeatureBox>
          
          <FeatureBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Architectural Marvel</h3>
            <p>
              Spanning 13.44 acres of meticulously planned space, our development combines residential elegance with commercial sophistication. Every detail reflects our commitment to creating spaces that inspire and elevate everyday living.
            </p>
            <div className="highlight">
              🏗️ 32 Floors of Premium Living Spaces
            </div>
          </FeatureBox>
        </ContentGrid>
        
        <StatsWrapper>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="stat-number">13.44</div>
              <div className="stat-label">Total Acres</div>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="stat-number">32</div>
              <div className="stat-label">Floors</div>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="stat-number">688</div>
              <div className="stat-label">Premium Units</div>
            </StatCard>
            
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="stat-number">1538</div>
              <div className="stat-label">Parking Spaces</div>
            </StatCard>
          </StatsGrid>
        </StatsWrapper>
        
        <ConnectivitySection>
          <h3>Location & Connectivity</h3>
          
          <ConnectivityGrid>
            <ConnectivityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon">✈️</div>
              <h4>International Airport</h4>
              <p>22 KM / 33 Minutes Drive</p>
            </ConnectivityCard>
            
            <ConnectivityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon">🚆</div>
              <h4>Railway Station</h4>
              <p>13 KM / 26 Minutes Drive</p>
            </ConnectivityCard>
            
            <ConnectivityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon">🏛️</div>
              <h4>Chandigarh City</h4>
              <p>Premier Urban Destination</p>
            </ConnectivityCard>
            
            <ConnectivityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="icon">🌊</div>
              <h4>Sukhna Lake</h4>
              <p>Scenic Natural Retreat</p>
            </ConnectivityCard>
          </ConnectivityGrid>
          
          <AmenitiesSection>
            <h4>Premium Lifestyle Amenities</h4>
            <div className="amenities-grid">
              <div className="amenities-row">
                <div className="amenity-item"><strong>Luxury Shopping Districts</strong></div>
                <div className="amenity-item"><strong>Prestigious Educational Institutions</strong></div>
                <div className="amenity-item"><strong>Elite Healthcare Facilities</strong></div>
                <div className="amenity-item"><strong>Gourmet Dining Experiences</strong></div>
              </div>
              <div className="amenities-row">
                <div className="amenity-item"><strong>Exclusive Parks & Recreation</strong></div>
                <div className="amenity-item"><strong>Private Banking Services</strong></div>
                <div className="amenity-item"><strong>Premium Fuel Stations</strong></div>
                <div className="amenity-item"><strong>World-Class Fitness Centers</strong></div>
              </div>
            </div>
          </AmenitiesSection>
        </ConnectivitySection>
      </Container>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </OverviewSection>
  );
};

export default ProjectOverview;