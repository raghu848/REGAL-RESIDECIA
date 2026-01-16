import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const LivingSpacesSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
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
      radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    pointer-events: none;
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
    color: #1a1a1a;
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
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const TabButton = styled(motion.button)`
  font-family: 'Montserrat', sans-serif;
  background: ${props => props.$active ? 'linear-gradient(135deg, #d4af37 0%, #f4e5a4 100%)' : 'transparent'};
  border: 2px solid ${props => props.$active ? '#d4af37' : 'rgba(212, 175, 55, 0.3)'};
  color: ${props => props.$active ? '#ffffff' : '#1a1a1a'};
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    border-color: #d4af37;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    width: 100%;
    max-width: 250px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ImageCard = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(212, 175, 55, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.3) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    img {
      height: 220px;
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 12px;
    img {
      height: 200px;
    }
  }
`;

const UnitHeader = styled.div`
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border: 2px solid rgba(212, 175, 55, 0.2);
  
  h3 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 2rem;
    font-weight: 300;
    font-style: italic;
    color: #1a1a1a;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
  }
  
  .specs {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    
    .spec-badge {
      font-family: 'Montserrat', sans-serif;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #1a1a1a;
      border: 1px solid rgba(212, 175, 55, 0.3);
      
      .value {
        color: #d4af37;
        font-weight: 700;
      }
    }
  }
  
  .description {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #2a2a2a;
    padding: 1rem;
    background: rgba(212, 175, 55, 0.05);
    border-radius: 10px;
    border-left: 3px solid #d4af37;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.8rem;
    }
  }
`;

const FeaturesSection = styled(motion.div)`
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border: 2px solid rgba(212, 175, 55, 0.2);
  
  h4 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 1.6rem;
    font-weight: 300;
    font-style: italic;
    color: #d4af37;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    
    &::before {
      content: '◆';
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
  
  .feature-item {
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem;
    background: rgba(212, 175, 55, 0.05);
    border-radius: 10px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    transition: all 0.3s ease;
    color: #2a2a2a;
    font-weight: 500;
    
    &:hover {
      transform: translateX(6px);
      border-color: rgba(212, 175, 55, 0.5);
      box-shadow: 0 4px 10px rgba(212, 175, 55, 0.12);
      background: rgba(212, 175, 55, 0.1);
    }
    
    &::before {
      content: '✓';
      color: #d4af37;
      font-weight: bold;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    
    @media (max-width: 480px) {
      padding: 0.7rem;
      gap: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const RoomDetailsSection = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  padding: 1.2rem;
  border-radius: 14px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
  
  h4 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 1.6rem;
    font-weight: 300;
    font-style: italic;
    color: #d4af37;
    margin-bottom: 0.8rem;
    text-align: center;
    
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }
  }
  
  .rooms-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  
  .room-card {
    background: #ffffff;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(212, 175, 55, 0.1);
      border-color: rgba(212, 175, 55, 0.5);
    }
    
    h5 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #1a1a1a;
      margin-bottom: 0.4rem;
      font-weight: 600;
      
      @media (max-width: 480px) {
        font-size: 0.95rem;
      }
    }
    
    p {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      color: #2a2a2a;
      margin: 0;
      line-height: 1.5;
      font-weight: 500;
      
      @media (max-width: 480px) {
        font-size: 0.85rem;
      }
    }
  }
`;

const FloorPlansSection = styled(motion.div)`
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 16px;
  border: 2px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  margin-top: 1.5rem;
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: #d4af37;
    margin-bottom: 0.8rem;
    text-align: center;
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  
  .plans-placeholder {
    text-align: center;
    padding: 1rem;
    
    p {
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem;
      color: #2a2a2a;
      font-weight: 600;
      margin: 0;
    }
  }
`;

const UnifiedFrame = styled.div`
  background: #ffffff;
  border: 3px solid #d4af37;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 40px rgba(212, 175, 55, 0.15);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ContentRow = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;



const spacesData = [
  {
    id: 1,
    name: "3 BHK Luxury Apartment",
    type: "Type 1",
    area: "1450 sq.ft",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "Spacious 3 BHK apartment with premium finishes and modern amenities. Designed for comfort and elegance with an open-concept living area and private balcony.",
    features: [
      "Master bedroom with ensuite",
      "Servant quarters",
      "Modular kitchen",
      "Premium flooring",
      "Smart home automation",
      "Central air conditioning"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" }
    ],
    roomDetails: {
      livingRoom: "18'x14' with open concept dining",
      masterBedroom: "16'x13' with walk-in closet and ensuite",
      secondBedroom: "14'x12' with balcony access",
      thirdBedroom: "12'x11' with built-in storage",
      kitchen: "14'x10' premium modular with breakfast counter",
      servantRoom: "10'x8' with attached bathroom"
    }
  },
  {
    id: 2,
    name: "3+1 BHK Premium Apartment",
    type: "Type 2",
    area: "1565 sq.ft",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "Luxuriously designed 3 BHK apartment with servant room. Features premium materials and thoughtful layouts for the ultimate living experience.",
    features: [
      "Spacious living area",
      "Premium kitchen appliances",
      "Walk-in closets",
      "Double-height ceilings",
      "Private balcony",
      "Energy efficient lighting"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" }
    ],
    roomDetails: {
      livingRoom: "20'x15' with double-height ceiling",
      masterBedroom: "18'x14' with walk-in closet and luxury ensuite",
      secondBedroom: "15'x12' with balcony access",
      thirdBedroom: "13'x11' with built-in storage",
      kitchen: "16'x11' premium modular with island counter",
      servantRoom: "12'x10' with attached bathroom"
    }
  },
  {
    id: 3,
    name: "4 BHK Grand Apartment",
    type: "4 BHK",
    area: "2190 sq.ft",
    images: [
      "https://images.unsplash.com/photo-1571625218382-4e3a7e1ee5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "Grand 4 BHK apartment designed for families who appreciate space and luxury. Features include a private study, entertainment area, and premium finishes throughout.",
    features: [
      "Private study room",
      "Entertainment area",
      "Premium bathroom fixtures",
      "Smart home system",
      "Wine cellar",
      "Private elevator access"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "28/28", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "28/28", commercial: "42/Floor = 168 Shops" }
    ],
    roomDetails: {
      livingRoom: "22'x18' with entertainment area",
      masterBedroom: "20'x16' with walk-in closet, private study and ensuite",
      secondBedroom: "18'x14' with balcony access",
      thirdBedroom: "16'x13' with built-in storage",
      fourthBedroom: "14'x12' with attached bathroom",
      kitchen: "20'x14' premium modular with breakfast area",
      study: "12'x10' private study room"
    }
  }
];

const LivingSpaces = () => {
  const [activeSpace, setActiveSpace] = React.useState(0);
  
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80";
  };
  
  return (
    <LivingSpacesSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <div className="subtitle">DISCOVER YOUR SPACE</div>
            <h2>Living Spaces</h2>
          </SectionHeader>
        </motion.div>
        
        <TabsContainer>
          {spacesData.map((space, index) => (
            <TabButton
              key={space.id}
              $active={activeSpace === index}
              onClick={() => setActiveSpace(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {space.name}
            </TabButton>
          ))}
        </TabsContainer>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpace}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ContentGrid>
              <LeftColumn>
                {spacesData[activeSpace].images.map((image, index) => (
                  <ImageCard
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img
                      src={image}
                      alt={`${spacesData[activeSpace].name} ${index + 1}`}
                      onError={handleImageError}
                    />
                  </ImageCard>
                ))}
                
                <FloorPlansSection
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h4>Floor Plan Options</h4>
                  <div className="plans-placeholder">
                    <p>2BHK | 3BHK | 4BHK options available</p>
                  </div>
                </FloorPlansSection>
              </LeftColumn>
              
              <RightColumn>
                <UnifiedFrame>
                  <ContentRow>
                    <RoomDetailsSection
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h4>Room Dimensions</h4>
                      <div className="rooms-grid">
                        {Object.entries(spacesData[activeSpace].roomDetails).map(([roomName, roomDetails], index) => (
                          <motion.div
                            key={index}
                            className="room-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                          >
                            <h5>{roomName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                            <p>{roomDetails}</p>
                          </motion.div>
                        ))}
                      </div>
                    </RoomDetailsSection>
                    
                    <FeaturesSection
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h4>Premium Features</h4>
                      <div className="features-grid">
                        {spacesData[activeSpace].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="feature-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </FeaturesSection>
                  </ContentRow>
                </UnifiedFrame>
              </RightColumn>
            </ContentGrid>
          </motion.div>
        </AnimatePresence>
      </Container>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
    </LivingSpacesSection>
  );
};

export default LivingSpaces;