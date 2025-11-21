import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OverviewSection = styled.section`
  padding: 1rem 2;
  background-color: var(--secondary-dark);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
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