import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Luxury3DGallery from './Luxury3DGallery';

const GallerySection = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
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
  color: #e5b9a2;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 300;
  font-style: italic;
  line-height: 1.3;
  
  &::before {
    content: "";
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #e5b9a2, transparent);
    border-radius: 2px;
  }
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #e5b9a2, #f0d0c0);
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
  color: white;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
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
  { id: 4, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg" },
  { id: 5, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg" },
  { id: 6, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg" },
  { id: 7, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg" },
  { id: 8, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg" },
  { id: 9, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg" },
  { id: 10, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg" },
  { id: 11, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg" },
  { id: 12, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg" },
  { id: 13, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg" },
  { id: 14, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg" },
  { id: 15, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg" },
  { id: 16, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg" },
  { id: 17, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg" },
  { id: 18, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg" },
  { id: 19, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg" },
  { id: 20, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg" },
  { id: 21, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg" },
  
  // Render images
  { id: 101, src: "/images/render/3-100.jpg" },
  { id: 102, src: "/images/render/Asset 1-100.jpg" },
  { id: 103, src: "/images/render/Asset 2-100.jpg" },
  
  // Additional luxury items
  { id: 301, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg" },
  { id: 302, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg" },
  { id: 303, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg" },
  { id: 304, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg" },
  { id: 305, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg" },
  { id: 306, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg" },
  { id: 307, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg" },
  { id: 308, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg" },
  { id: 309, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg" },
  { id: 310, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg" },
  { id: 311, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg" },
  { id: 312, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg" },
  { id: 313, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg" },
  { id: 314, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg" },
  { id: 315, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg" },
  { id: 316, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg" },
  { id: 317, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg" },
  { id: 318, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg" }
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