import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Luxury3DGallery from './Luxury3DGallery';

const GallerySection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
    pointer-events: none;
  }
  
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

const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #D4A540;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #D4A540, #F4D576);
    margin: 1rem auto;
    border-radius: 2px;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GallerySubtitle = styled.p`
  text-align: center;
  color: #e0e0e0;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;



// Combined gallery items for the 3D gallery
const galleryItems = [
  // Building images
  { id: 4, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg", title: "Tower A Elevation" },
  { id: 5, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg", title: "Clubhouse & Pool Area" },
  { id: 6, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg", title: "Main Entrance Foyer" },
  { id: 7, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg", title: "Garden Courtyard" },
  { id: 8, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg", title: "Luxury Apartment Interior" },
  { id: 9, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg", title: "Sky Lounge & Bar" },
  { id: 10, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg", title: "Fitness Center" },
  { id: 11, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg", title: "Spa & Wellness Area" },
  { id: 12, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg", title: "Conference Room" },
  { id: 13, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg", title: "Children's Play Area" },
  { id: 14, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg", title: "Parking Area" },
  { id: 15, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg", title: "Landscaped Gardens" },
  { id: 16, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg", title: "Swimming Pool & Deck" },
  { id: 17, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg", title: "Terrace & Outdoor Seating" },
  { id: 18, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg", title: "Elevator Lobby" },
  { id: 19, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg", title: "Staircase Design" },
  { id: 20, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg", title: "Security & Concierge" },
  { id: 21, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg", title: "Service Areas" },
  
  // Render images
  { id: 101, src: "/images/render/3-100.jpg", title: "Exterior View - Day" },
  { id: 102, src: "/images/render/Asset 1-100.jpg", title: "Aerial View - Residential Block" },
  { id: 103, src: "/images/render/Asset 2-100.jpg", title: "Night View - Illuminated Facade" },
  
  // Additional luxury items
  { id: 301, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg", title: "Luxury Lobby Design" },
  { id: 302, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg", title: "Premium Kitchen Setup" },
  { id: 303, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg", title: "Master Bedroom View" },
  { id: 304, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg", title: "Luxury Bathroom Design" },
  { id: 305, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg", title: "Balcony with View" },
  { id: 306, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg", title: "Home Office Space" },
  { id: 307, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg", title: "Dining Area Elegance" },
  { id: 308, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg", title: "Living Room Ambiance" },
  { id: 309, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg", title: "Penthouse Terrace" },
  { id: 310, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg", title: "Gated Community Entrance" },
  { id: 311, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg", title: "Underground Parking" },
  { id: 312, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg", title: "Landscaped Water Features" },
  { id: 313, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg", title: "Yoga & Meditation Deck" },
  { id: 314, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg", title: "Barbecue Pavilion" },
  { id: 315, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg", title: "Multipurpose Hall" },
  { id: 316, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg", title: "Library & Study" },
  { id: 317, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg", title: "Wine Cellar & Tasting Room" },
  { id: 318, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg", title: "Private Cinema" }
];

const BuildingGallery = () => {
  return (
    <GallerySection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Project & Landmark Gallery</SectionTitle>
          <GallerySubtitle>Explore Regal Residencia from every angle</GallerySubtitle>
        </motion.div>
        
        <Luxury3DGallery items={galleryItems} />
      </div>
    </GallerySection>
  );
};

export default BuildingGallery;