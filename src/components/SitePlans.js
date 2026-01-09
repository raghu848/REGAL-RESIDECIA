import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FilmReelGallery from './FilmReelGallery';

const SitePlansSection = styled.section`
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 0.9rem;
    }
    
    p {
      font-size: 1.05rem;
    }
  }
  
  @media (max-width: 992px) {
    margin-bottom: 2.2rem;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    
    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.7rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1.8rem;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.6rem;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.88rem;
    }
  }
  
  @media (max-width: 400px) {
    margin-bottom: 1.5rem;
    
    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    margin-bottom: 2.1rem;
    
    h2 {
      font-size: 1.85rem;
      margin-bottom: 0.75rem;
    }
    
    p {
      font-size: 0.97rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    margin-bottom: 2.15rem;
    
    h2 {
      font-size: 1.9rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.8rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.6rem;
    margin-top: 1.6rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    margin-top: 1.4rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1.1rem;
    margin-top: 1.1rem;
  }
  
  @media (max-width: 400px) {
    gap: 1rem;
    margin-top: 1rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    margin-top: 1.6rem;
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    .plan-image {
      height: 280px;
    }
  }
  
  @media (max-width: 992px) {
    .plan-image {
      height: 260px;
    }
  }
  
  @media (max-width: 768px) {
    .plan-image {
      height: 240px;
    }
  }
  
  @media (max-width: 576px) {
    .plan-image {
      height: 220px;
    }
  }
  
  @media (max-width: 480px) {
    .plan-image {
      height: 200px;
    }
  }
  
  @media (max-width: 400px) {
    .plan-image {
      height: 180px;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    .plan-image {
      height: 250px;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    .plan-image {
      height: 260px;
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    .plan-content {
      padding: 1.3rem;
    }
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.9rem;
    }
    
    p {
      font-size: 0.95rem;
      margin-bottom: 0.9rem;
    }
    
    .plan-details {
      gap: 0.45rem;
      margin-top: 0.9rem;
    }
    
    .detail-tag {
      padding: 0.25rem 0.7rem;
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 992px) {
    .plan-content {
      padding: 1.2rem;
    }
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    .plan-details {
      gap: 0.4rem;
      margin-top: 0.8rem;
    }
    
    .detail-tag {
      padding: 0.2rem 0.6rem;
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 768px) {
    .plan-content {
      padding: 1.1rem;
    }
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
    }
    
    p {
      font-size: 0.85rem;
      margin-bottom: 0.7rem;
    }
    
    .plan-details {
      gap: 0.35rem;
      margin-top: 0.7rem;
    }
    
    .detail-tag {
      padding: 0.15rem 0.5rem;
      font-size: 0.65rem;
    }
  }
  
  @media (max-width: 576px) {
    .plan-content {
      padding: 1rem;
    }
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.6rem;
    }
    
    p {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
    
    .plan-details {
      gap: 0.3rem;
      margin-top: 0.6rem;
    }
    
    .detail-tag {
      padding: 0.1rem 0.4rem;
      font-size: 0.6rem;
    }
  }
  
  @media (max-width: 480px) {
    .plan-content {
      padding: 0.9rem;
    }
    
    h3 {
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.78rem;
      margin-bottom: 0.5rem;
    }
    
    .plan-details {
      gap: 0.25rem;
      margin-top: 0.5rem;
    }
    
    .detail-tag {
      padding: 0.05rem 0.3rem;
      font-size: 0.55rem;
    }
  }
  
  @media (max-width: 400px) {
    .plan-content {
      padding: 0.8rem;
    }
    
    h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }
    
    p {
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
    }
    
    .plan-details {
      gap: 0.2rem;
      margin-top: 0.4rem;
    }
    
    .detail-tag {
      padding: 0.05rem 0.25rem;
      font-size: 0.5rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    .plan-content {
      padding: 1.15rem;
    }
    
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
    
    p {
      font-size: 0.87rem;
      margin-bottom: 0.75rem;
    }
    
    .plan-details {
      gap: 0.37rem;
      margin-top: 0.75rem;
    }
    
    .detail-tag {
      padding: 0.17rem 0.55rem;
      font-size: 0.67rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    .plan-content {
      padding: 1.2rem;
    }
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    .plan-details {
      gap: 0.4rem;
      margin-top: 0.8rem;
    }
    
    .detail-tag {
      padding: 0.2rem 0.6rem;
      font-size: 0.7rem;
    }
  }
`;

// Building Gallery Items
const buildingGalleryItems = [
  // Building images
  // { id: 4, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg", title: "Tower A Elevation" },
  // { id: 5, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg", title: "Clubhouse & Pool Area" },
  // { id: 6, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg", title: "Main Entrance Foyer" },
  // { id: 7, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg", title: "Garden Courtyard" },
  // { id: 8, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg", title: "Luxury Apartment Interior" },
  // { id: 9, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg", title: "Sky Lounge & Bar" },
  // { id: 10, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg", title: "Fitness Center" },
  // { id: 11, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg", title: "Spa & Wellness Area" },
  // { id: 12, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg", title: "Conference Room" },
  // { id: 13, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg", title: "Children's Play Area" },
  // { id: 14, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg", title: "Parking Area" },
  // { id: 15, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg", title: "Landscaped Gardens" },
  // { id: 16, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg", title: "Swimming Pool & Deck" },
  // { id: 17, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg", title: "Terrace & Outdoor Seating" },
  // { id: 18, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg", title: "Elevator Lobby" },
  // { id: 19, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg", title: "Staircase Design" },
  // { id: 20, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg", title: "Security & Concierge" },
  // { id: 21, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg", title: "Service Areas" },
  
  // Render images
  // { id: 101, src: "/images/render/3-100.jpg", title: "Exterior View - Day" },
  // { id: 102, src: "/images/render/Asset 1-100.jpg", title: "Aerial View - Residential Block" },
  // { id: 103, src: "/images/render/Asset 2-100.jpg", title: "Night View - Illuminated Facade" },
  
  // Additional luxury items
  // { id: 301, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg", title: "Luxury Lobby Design" },
  // { id: 302, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg", title: "Premium Kitchen Setup" },
  // { id: 303, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg", title: "Master Bedroom View" },
  // { id: 304, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg", title: "Luxury Bathroom Design" },
  // { id: 305, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg", title: "Balcony with View" },
  // { id: 306, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg", title: "Home Office Space" },
  // { id: 307, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg", title: "Dining Area Elegance" },
  // { id: 308, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg", title: "Living Room Ambiance" },
  // { id: 309, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg", title: "Penthouse Terrace" },
  // { id: 310, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg", title: "Gated Community Entrance" },
  // { id: 311, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg", title: "Underground Parking" },
  // { id: 312, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg", title: "Landscaped Water Features" },
  // { id: 313, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg", title: "Yoga & Meditation Deck" },
  // { id: 314, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg", title: "Barbecue Pavilion" },
  // { id: 315, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg", title: "Multipurpose Hall" },
  // { id: 316, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg", title: "Library & Study" },
  // { id: 317, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg", title: "Wine Cellar & Tasting Room" },
  // { id: 318, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg", title: "Private Cinema" }
];

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

const filmReelImages = [
  ...buildingGalleryItems.map(item => ({ src: item.src, title: item.title })),
  ...sitePlansData.map(item => ({ src: item.image, title: item.title }))
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
                  className="img-radius-1"
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