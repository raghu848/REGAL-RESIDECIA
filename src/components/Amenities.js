import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AmenitiesSection = styled.section`
  padding: 1rem 2;
  background-color: var(--primary-dark);
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AmenityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-speed) ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(212, 175, 55, 0.3);
  }
  
  .amenity-image {
    height: 200px;
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
  
  &:hover .amenity-image img {
    transform: scale(1.1);
  }
  
  .amenity-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-light);
    }
    
    p {
      color: var(--text-muted);
      line-height: 1.6;
      flex-grow: 1;
    }
  }
`;

const amenitiesData = [
  {
    id: 1,
    title: "Swimming Pool",
    description: "Olympic-sized infinity pool with panoramic views and luxury cabanas. Open sky swimming pool area with deck and seating.",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 2,
    title: "Clubhouse",
    description: "World-class clubhouse with gym, spa, and entertainment facilities. Includes indoor games room, banquet hall, mini theatre, and indoor golf.",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 3,
    title: "Landscaped Gardens",
    description: "Expansive green spaces with walking tracks, meditation areas, pergola seating, palm island, and zen garden.",
    image: "https://images.unsplash.com/photo-1515542408672-7ef1ed6e9b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 4,
    title: "Kids Play Area",
    description: "Safe and engaging play zones designed for children of all ages. Includes toddler play areas and skating rink.",
    image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    title: "Gym & Fitness",
    description: "State-of-the-art fitness center with professional equipment and trainers. Includes spa and sauna facilities.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 6,
    title: "Multipurpose Court",
    description: "Basketball, tennis, and badminton courts for sports enthusiasts. Includes box cricket pitch and multipurpose court.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 7,
    title: "Commercial Spaces",
    description: "Showroom spaces with carpet area of 1440 sq.ft (18'0\"X80'0\") and 960 sq.ft (16'0\"X60'0\"). Total saleable area of 5760 sq.ft and 3840 sq.ft respectively.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 8,
    title: "Parking",
    description: "Ample parking spaces with lower ground capacity of 886 cars and ground capacity of 652 cars. Total parking capacity of 1538 cars.",
    image: "https://images.unsplash.com/photo-1758448721043-2cc4eba0e483?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Amenities = () => {
  return (
    <AmenitiesSection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Luxury Amenities</h2>
        </motion.div>
        
        <AmenitiesGrid>
          {amenitiesData.map((amenity, index) => (
            <AmenityCard
              key={amenity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="amenity-image">
                <img src={amenity.image} alt={amenity.title} onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
                }} />
              </div>
              <div className="amenity-content">
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            </AmenityCard>
          ))}
        </AmenitiesGrid>
      </div>
    </AmenitiesSection>
  );
};

export default Amenities;