import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AmenitiesSection = styled.section`
  padding: 1rem 2;
  background-color: var(--primary-dark);
  
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

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.8rem;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.6rem;
    margin-top: 2.2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.4rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.1rem;
    margin-top: 1.7rem;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    gap: 1.45rem;
    margin-top: 2.05rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2.1rem;
  }
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    
    .amenity-image {
      height: 180px;
    }
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 18px 27px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1.3rem;
      
      h3 {
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
      }
      
      p {
        font-size: 0.95rem;
      }
    }
  }
  
  @media (max-width: 992px) {
    border-radius: 9px;
    
    .amenity-image {
      height: 160px;
    }
    
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 24px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1.2rem;
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.3rem;
      }
      
      p {
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    
    .amenity-image {
      height: 150px;
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 14px 21px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1.1rem;
      
      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
      }
      
      p {
        font-size: 0.85rem;
      }
    }
  }
  
  @media (max-width: 576px) {
    border-radius: 7px;
    
    .amenity-image {
      height: 140px;
    }
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 18px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1rem;
      
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.1rem;
      }
      
      p {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 6.5px;
    
    .amenity-image {
      height: 135px;
    }
    
    &:hover {
      transform: translateY(-3.5px);
      box-shadow: 0 11px 16.5px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 0.95rem;
      
      h3 {
        font-size: 1.05rem;
      }
      
      p {
        font-size: 0.78rem;
      }
    }
  }
  
  @media (max-width: 400px) {
    border-radius: 6px;
    
    .amenity-image {
      height: 130px;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 0.9rem;
      
      h3 {
        font-size: 1rem;
      }
      
      p {
        font-size: 0.75rem;
      }
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    border-radius: 8.2px;
    
    .amenity-image {
      height: 152px;
    }
    
    &:hover {
      transform: translateY(-5.2px);
      box-shadow: 0 14.5px 22px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1.12rem;
      
      h3 {
        font-size: 1.22rem;
        margin-bottom: 0.22rem;
      }
      
      p {
        font-size: 0.87rem;
      }
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    border-radius: 8.5px;
    
    .amenity-image {
      height: 155px;
    }
    
    &:hover {
      transform: translateY(-5.5px);
      box-shadow: 0 15px 23px rgba(0, 0, 0, 0.3);
    }
    
    .amenity-content {
      padding: 1.15rem;
      
      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
      }
      
      p {
        font-size: 0.9rem;
      }
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