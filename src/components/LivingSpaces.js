import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LivingSpacesSection = styled.section`
  padding: 1rem 2;
  background-color: var(--secondary-dark);
`;

const SpacesTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TabButton = styled.button`
  background: transparent;
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: var(--text-light);
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  border-radius: 4px;
  
  &.active, &:hover {
    background: var(--accent-gold);
    color: var(--primary-dark);
    border-color: var(--accent-gold);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SpacesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpaceImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const SpaceDetails = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  .space-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .spec-item {
    background: rgba(212, 175, 55, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .spec-value {
    color: var(--accent-gold);
    font-weight: 600;
  }
  
  p {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .space-features {
    margin-top: 2rem;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
  }
  
  .feature-item::before {
    content: "✓";
    color: var(--accent-gold);
    font-weight: bold;
  }
  
  .room-details {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .room-details h4 {
    color: var(--accent-gold);
    margin-bottom: 1rem;
  }
  
  .rooms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .room-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
  }
  
  .room-item h5 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  .room-item p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
  
  .floor-plans {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .floor-plans h4 {
    color: var(--accent-gold);
    margin-bottom: 1rem;
  }
  
  .plan-options {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .plan-option {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
  }
  
  .plan-option h5 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
  }
  
  .plan-option p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const spacesData = [
  {
    id: 1,
    name: "3 BHK Luxury Apartment",
    type: "Type 1",
    area: "1450 sq.ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "18'x14' with open concept dining",
      masterBedroom: "16'x13' with walk-in closet and ensuite",
      secondBedroom: "14'x12' with balcony access",
      thirdBedroom: "12'x11' with built-in storage",
      kitchen: "14'x10' premium modular with breakfast counter",
      servantRoom: "10'x8' with attached bathroom",
      bathrooms: "10'x8' master, 8'x6' second, 6'x5' third and servant",
      balcony: "16'x6' main balcony, 10'x4' second bedroom balcony",
      utility: "6'x5' dry yard, 8'x6' kitchen utility with storage"
    }
  },
  {
    id: 2,
    name: "3 BHK Premium Apartment",
    type: "Type 2",
    area: "1565 sq.ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80",
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
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "20'x15' with double-height ceiling",
      masterBedroom: "18'x14' with walk-in closet and luxury ensuite",
      secondBedroom: "15'x12' with balcony access",
      thirdBedroom: "13'x11' with built-in storage",
      kitchen: "16'x11' premium modular with island counter",
      servantRoom: "12'x10' with attached bathroom",
      bathrooms: "12'x9' master ensuite, 8'x7' second, 7'x6' third and servant",
      balcony: "18'x7' main balcony, 12'x5' second bedroom balcony",
      utility: "8'x6' dry yard, 10'x8' kitchen utility with pantry"
    }
  },
  {
    id: 3,
    name: "4 BHK Grand Apartment",
    type: "4 BHK",
    area: "2190 sq.ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
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
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "22'x18' with entertainment area",
      masterBedroom: "20'x16' with walk-in closet, private study and ensuite",
      secondBedroom: "18'x14' with balcony access",
      thirdBedroom: "16'x13' with built-in storage",
      fourthBedroom: "14'x12' with attached bathroom",
      kitchen: "20'x14' premium modular with breakfast area",
      servantRoom: "14'x12' with attached bathroom",
      bathrooms: "14'x10' master ensuite, 10'x8' second, 9'x7' third, 8'x6' fourth and servant",
      balcony: "22'x8' main balcony, 16'x6' second bedroom balcony",
      utility: "10'x8' dry yard, 12'x10' kitchen utility with wine cellar",
      study: "12'x10' private study room"
    }
  }
];

const LivingSpaces = () => {
  const [activeSpace, setActiveSpace] = React.useState(0);
  
  return (
    <LivingSpacesSection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Living Spaces</h2>
        </motion.div>
        
        <SpacesTabs>
          {spacesData.map((space, index) => (
            <TabButton
              key={space.id}
              className={activeSpace === index ? 'active' : ''}
              onClick={() => setActiveSpace(index)}
            >
              {space.name}
            </TabButton>
          ))}
        </SpacesTabs>
        
        <SpacesContent>
          <SpaceImage>
            <motion.img
              key={spacesData[activeSpace].id}
              src={spacesData[activeSpace].image}
              alt={spacesData[activeSpace].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </SpaceImage>
          
          <SpaceDetails>
            <motion.h3
              key={`title-${spacesData[activeSpace].id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {spacesData[activeSpace].name}
            </motion.h3>
            
            <motion.div
              key={`specs-${spacesData[activeSpace].id}`}
              className="space-specs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="spec-item">
                Type: <span className="spec-value">{spacesData[activeSpace].type}</span>
              </div>
              <div className="spec-item">
                Area: <span className="spec-value">{spacesData[activeSpace].area}</span>
              </div>
            </motion.div>
            
            <motion.p
              key={`desc-${spacesData[activeSpace].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {spacesData[activeSpace].description}
            </motion.p>
            
            <motion.div
              key={`features-${spacesData[activeSpace].id}`}
              className="space-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="features-grid">
                {spacesData[activeSpace].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Adding Room Details Section */}
            <motion.div
              key={`rooms-${spacesData[activeSpace].id}`}
              className="room-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4>Room Dimensions & Details</h4>
              <div className="rooms-grid">
                {Object.entries(spacesData[activeSpace].roomDetails).map(([roomName, roomDetails], index) => (
                  <div key={index} className="room-item">
                    <h5>{roomName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                    <p>{roomDetails}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              key={`plans-${spacesData[activeSpace].id}`}
              className="floor-plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4>Floor Plan Options</h4>
              <div className="plan-options">
                {spacesData[activeSpace].floorPlans.map((plan, index) => (
                  <div key={index} className="plan-option">
                    <h5>{plan.option}</h5>
                    <p>Podium: {plan.podium}</p>
                    <p>Floors: {plan.floors}</p>
                    <p>{plan.commercial}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </SpaceDetails>
        </SpacesContent>
      </div>
    </LivingSpacesSection>
  );
};

export default LivingSpaces;