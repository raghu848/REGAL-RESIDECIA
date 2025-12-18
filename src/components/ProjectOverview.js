import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OverviewSection = styled.section`
  padding: 1rem 2;
  background-color: var(--secondary-dark);
  
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.9rem;
  }
  
  @media (max-width: 400px) {
    gap: 0.8rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.7rem;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.3rem;
    }
    
    p {
      font-size: 1.05rem;
      margin-bottom: 1.3rem;
    }
  }
  
  @media (max-width: 992px) {
    h2 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.1rem;
    }
    
    p {
      font-size: 0.95rem;
      margin-bottom: 1.1rem;
    }
  }
  
  @media (max-width: 576px) {
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.9rem;
    }
    
    p {
      font-size: 0.88rem;
      margin-bottom: 0.9rem;
    }
  }
  
  @media (max-width: 400px) {
    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 0.85rem;
      margin-bottom: 0.8rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    h2 {
      font-size: 1.85rem;
      margin-bottom: 1.15rem;
    }
    
    p {
      font-size: 0.97rem;
      margin-bottom: 1.15rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    h2 {
      font-size: 1.9rem;
      margin-bottom: 1.2rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.3rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-top: 1.6rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.1rem;
    margin-top: 1.4rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    margin-top: 1.1rem;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-top: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.15rem;
    margin-top: 1.45rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-top: 1.5rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-gold);
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
    color: var(--text-muted);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    padding: 1.3rem;
    
    .stat-number {
      font-size: 1.8rem;
    }
    
    .stat-label {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 992px) {
    padding: 1.2rem;
    
    .stat-number {
      font-size: 1.7rem;
    }
    
    .stat-label {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem;
    
    .stat-number {
      font-size: 1.6rem;
    }
    
    .stat-label {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    
    .stat-number {
      font-size: 1.4rem;
    }
    
    .stat-label {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem;
    
    .stat-number {
      font-size: 1.3rem;
    }
    
    .stat-label {
      font-size: 0.78rem;
    }
  }
  
  @media (max-width: 400px) {
    padding: 0.8rem;
    
    .stat-number {
      font-size: 1.2rem;
    }
    
    .stat-label {
      font-size: 0.75rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    padding: 1.15rem;
    
    .stat-number {
      font-size: 1.65rem;
    }
    
    .stat-label {
      font-size: 0.87rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    padding: 1.2rem;
    
    .stat-number {
      font-size: 1.7rem;
    }
    
    .stat-label {
      font-size: 0.9rem;
    }
  }
`;

const ImageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  position: relative;
  
  .large-image {
    grid-column: span 2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .small-image {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    gap: 0.9rem;
    
    .large-image {
      box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 992px) {
    gap: 0.8rem;
    
    .large-image {
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    
    .large-image {
      grid-column: span 1;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.6rem;
    
    .large-image {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.55rem;
    
    .large-image {
      box-shadow: 0 11px 22px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 5.5px 11px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media (max-width: 400px) {
    gap: 0.5rem;
    
    .large-image {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    
    .large-image {
      grid-column: span 1;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 7.5px 15px rgba(0, 0, 0, 0.2);
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    
    .large-image {
      grid-column: span 1;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }
    
    .small-image {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

const ConnectivitySection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  .connectivity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    margin-top: 2.5rem;
    padding-top: 1.8rem;
    
    h3 {
      font-size: 1.7rem;
      margin-bottom: 1.3rem;
    }
    
    .connectivity-grid {
      gap: 1.3rem;
    }
  }
  
  @media (max-width: 992px) {
    margin-top: 2.2rem;
    padding-top: 1.6rem;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }
    
    .connectivity-grid {
      gap: 1.2rem;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 1.4rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.1rem;
    }
    
    .connectivity-grid {
      gap: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    margin-top: 1.8rem;
    padding-top: 1.2rem;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    .connectivity-grid {
      gap: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-top: 1.7rem;
    padding-top: 1.1rem;
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.9rem;
    }
    
    .connectivity-grid {
      gap: 0.7rem;
    }
  }
  
  @media (max-width: 400px) {
    margin-top: 1.5rem;
    padding-top: 1rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    
    .connectivity-grid {
      gap: 0.6rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    margin-top: 2.1rem;
    padding-top: 1.45rem;
    
    h3 {
      font-size: 1.55rem;
      margin-bottom: 1.15rem;
    }
    
    .connectivity-grid {
      gap: 1.05rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    margin-top: 2.15rem;
    padding-top: 1.5rem;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }
    
    .connectivity-grid {
      gap: 1.1rem;
    }
  }
  
  .connectivity-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    h4 {
      color: var(--accent-gold);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
    }
    
    h4::before {
      content: '📍';
      margin-right: 0.5rem;
    }
    
    p {
      color: var(--text-muted);
      margin: 0;
    }
  }
  
  .accessibility-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    h4 {
      color: var(--accent-gold);
      margin-bottom: 1rem;
    }
    
    .accessibility-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }
      
    @media (max-width: 1200px) {
      .accessibility-grid {
        gap: 0.9rem;
      }
    }
      
    @media (max-width: 992px) {
      .accessibility-grid {
        gap: 0.8rem;
      }
    }
      
    @media (max-width: 768px) {
      .accessibility-grid {
        gap: 0.7rem;
      }
    }
      
    @media (max-width: 576px) {
      .accessibility-grid {
        gap: 0.6rem;
      }
    }
      
    @media (max-width: 400px) {
      .accessibility-grid {
        gap: 0.5rem;
      }
    }
    
    .accessibility-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
    }
    
    .accessibility-item::before {
      content: "✓";
      color: var(--accent-gold);
      font-weight: bold;
    }
  }
  
  .neighborhood-amenities {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    h4 {
      color: var(--accent-gold);
      margin-bottom: 1rem;
    }
    
    .amenities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
      
    @media (max-width: 1200px) {
      .amenities-grid {
        gap: 0.9rem;
      }
    }
      
    @media (max-width: 992px) {
      .amenities-grid {
        gap: 0.8rem;
      }
    }
      
    @media (max-width: 768px) {
      .amenities-grid {
        gap: 0.7rem;
      }
    }
      
    @media (max-width: 576px) {
      .amenities-grid {
        gap: 0.6rem;
      }
    }
      
    @media (max-width: 400px) {
      .amenities-grid {
        gap: 0.5rem;
      }
    }
    
    .amenity-item {
      background: rgba(212, 175, 55, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
  }
`;

const ProjectOverview = () => {
  return (
    <OverviewSection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Project Overview</h2>
        </motion.div>
        
        <ContentWrapper>
          <TextContent>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining Luxury Living in Mohali
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Regal Residencia is a premium residential-commercial project located in the prime location of Mohali Sector 114. Designed with meticulous attention to detail, this project offers an unparalleled living experience that combines modern architecture with luxurious amenities.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With excellent connectivity to International Airport (22 km) and Railway Station (13 km), Regal Residencia offers the perfect blend of convenience and luxury. The project spans across 13.44 acres with 8.44 acres dedicated to residential spaces and 5 acres for commercial establishments.
            </motion.p>
            
            <StatsGrid>
              <StatCard>
                <div className="stat-number">13.44</div>
                <div className="stat-label">Acres</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-number">32</div>
                <div className="stat-label">Floors</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-number">688</div>
                <div className="stat-label">Units</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-number">1538</div>
                <div className="stat-label">Parking</div>
              </StatCard>
            </StatsGrid>
            
            <ConnectivitySection>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Location & Connectivity
              </motion.h3>
              
              <div className="connectivity-grid">
                <motion.div 
                  className="connectivity-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4>International Airport</h4>
                  <p>22 KM / 33 MIN</p>
                </motion.div>
                
                <motion.div 
                  className="connectivity-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h4>Railway Station</h4>
                  <p>13 KM / 26 MIN</p>
                </motion.div>
                
                <motion.div 
                  className="connectivity-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h4>Chandigarh</h4>
                  <p>Nearby Tourist Destination</p>
                </motion.div>
                
                <motion.div 
                  className="connectivity-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h4>Sukhna Lake</h4>
                  <p>Nearby Tourist Destination</p>
                </motion.div>
              </div>
              
              {/* Adding Accessibility Information */}
              <motion.div
                className="accessibility-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h4>Accessibility & Transportation</h4>
                <div className="accessibility-grid">
                  <div className="accessibility-item">Well-connected roads</div>
                  <div className="accessibility-item">Public transport nearby</div>
                  <div className="accessibility-item">Easy access to main highways</div>
                  <div className="accessibility-item">24/7 security checkpoints</div>
                  <div className="accessibility-item">Underground parking</div>
                  <div className="accessibility-item">Elevator access in all towers</div>
                </div>
              </motion.div>
              
              {/* Adding Neighborhood Amenities */}
              <motion.div
                className="neighborhood-amenities"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <h4>Nearby Amenities</h4>
                <div className="amenities-grid">
                  <div className="amenity-item">Shopping Malls</div>
                  <div className="amenity-item">Schools & Colleges</div>
                  <div className="amenity-item">Hospitals</div>
                  <div className="amenity-item">Restaurants</div>
                  <div className="amenity-item">Parks & Recreation</div>
                  <div className="amenity-item">Banks & ATMs</div>
                  <div className="amenity-item">Fuel Stations</div>
                  <div className="amenity-item">Gyms & Fitness Centers</div>
                </div>
              </motion.div>
            </ConnectivitySection>
          </TextContent>
          
          <ImageContent>
            <motion.div 
              className="large-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Regal Residencia Project" />
            </motion.div>
            
            <motion.div 
              className="small-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Luxury Apartment" />
            </motion.div>
            
            <motion.div 
              className="small-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80" alt="Modern Architecture" />
            </motion.div>
          </ImageContent>
        </ContentWrapper>
      </div>
    </OverviewSection>
  );
};

export default ProjectOverview;