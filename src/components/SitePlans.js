import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SitePlansSection = styled.section`
  padding: 1rem 2;
  background-color: var(--secondary-dark);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: var(--text-light);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(212, 175, 55, 0.3);
  }
  
  .plan-image {
    height: 300px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-speed) ease;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      pointer-events: none;
    }
  }
  
  &:hover .plan-image img {
    transform: scale(1.1);
  }
  
  .plan-content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-light);
    }
    
    p {
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .plan-details {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .detail-tag {
      background: rgba(212, 175, 55, 0.1);
      color: var(--accent-gold);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
  }
`;

const sitePlansData = [
  {
    id: 1,
    title: "Master Site Plan",
    description: "Comprehensive layout showing building placements, road networks, and green spaces. The 13.44-acre project features excellent connectivity with dedicated residential and commercial zones.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-090.jpg",
    details: ["13.44 Acres", "8.44 Residential", "5 Commercial", "32 Floors"]
  },
  {
    id: 2,
    title: "Parking Layout",
    description: "Efficiently designed parking system with a total capacity of 1538 cars. Includes both lower ground and ground level parking spaces for residents and visitors.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-102.jpg",
    details: ["1538 Cars", "886 Lower Ground", "652 Ground", "24/7 Security"]
  },
  {
    id: 3,
    title: "Landscape Design",
    description: "Thoughtfully planned green spaces featuring landscaped gardens, walking tracks, meditation areas, and recreational zones for a sustainable living environment.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-110.jpg",
    details: ["Landscaped Gardens", "Walking Tracks", "Meditation Areas", "Pergola Seating"]
  },
  {
    id: 4,
    title: "Building Orientation",
    description: "Strategically oriented buildings for optimal sunlight, ventilation, and views. Each residential tower is positioned to maximize privacy and minimize obstruction.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-122.jpg",
    details: ["Optimal Sunlight", "Cross Ventilation", "Panoramic Views", "Privacy Focus"]
  },
  {
    id: 5,
    title: "Amenities Layout",
    description: "Detailed layout of recreational and leisure facilities including swimming pools, clubhouse, gym, and sports courts. Designed for residents of all ages to enjoy premium amenities.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-142.jpg",
    details: ["Swimming Pool", "Clubhouse", "Gym", "Sports Courts"]
  },
  {
    id: 6,
    title: "Infrastructure Plan",
    description: "Comprehensive infrastructure layout showing electrical, water, and sewage systems. Features backup power, water recycling, and smart building technology integration.",
    image: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-159.jpg",
    details: ["Power Backup", "Water Recycling", "Smart Tech", "Sewage Treatment"]
  }
];

const SitePlans = () => {
  return (
    <SitePlansSection>
      <div className="container">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Site Plans & Layouts</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our thoughtfully designed site plans that blend luxury living with functional architecture and sustainable landscaping.
          </motion.p>
        </SectionHeader>
        
        <PlansContainer>
          {sitePlansData.map((plan, index) => (
            <PlanCard
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="plan-image">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  onError={(e) => {
                    // Fallback to a default image if the specific image fails to load
                    e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
                  }}
                />
              </div>
              <div className="plan-content">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="plan-details">
                  {plan.details.map((detail, detailIndex) => (
                    <span key={detailIndex} className="detail-tag">{detail}</span>
                  ))}
                </div>
              </div>
            </PlanCard>
          ))}
        </PlansContainer>
      </div>
    </SitePlansSection>
  );
};

export default SitePlans;