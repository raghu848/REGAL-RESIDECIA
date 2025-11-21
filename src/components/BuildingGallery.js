import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GallerySection = styled.section`
  padding: 1rem 2;
  background-color: var(--primary-dark);
`;

const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--text-light);
  font-family: 'Playfair Display', serif;
  font-weight: 700; /* Make it bolder */
  
  &::after {
    content: '';
    display: block;
    width: 100px; /* Increased width */
    height: 4px; /* Increased height */
    background: var(--accent-gold);
    margin: 1rem auto;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.5); /* Add shadow for glow effect */
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const GalleryItem = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 300px;
  cursor: pointer;
  border: 2px solid #555;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    
    img {
      transform: scale(1.1);
    }
  }
`;

// Landmark Creations from the pictures folder
const buildingImages = [
//   { id: 1, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-016.jpg", alt: "Building Image 1" },
//   { id: 2, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-022.jpg", alt: "Building Image 2" },
//   { id: 3, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-023.jpg", alt: "Building Image 3" },
  { id: 4, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg", alt: "Building Image 4" },
  { id: 5, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg", alt: "Building Image 5" },
  { id: 6, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg", alt: "Building Image 6" },
  { id: 7, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg", alt: "Building Image 7" },
  { id: 8, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg", alt: "Building Image 8" },
  { id: 9, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg", alt: "Building Image 9" },
  { id: 10, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-275.jpg", alt: "Building Image 10" },
  { id: 11, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-281.jpg", alt: "Building Image 11" },
  { id: 12, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-282.jpg", alt: "Building Image 12" },
  { id: 13, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-289.jpg", alt: "Building Image 13" },
  { id: 14, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-290.jpg", alt: "Building Image 14" },
  { id: 15, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-291.jpg", alt: "Building Image 15" },
  { id: 16, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-298.jpg", alt: "Building Image 16" },
  { id: 17, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg", alt: "Building Image 17" },
  { id: 18, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-306.jpg", alt: "Building Image 18" },
  { id: 19, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-308.jpg", alt: "Building Image 19" },
  { id: 20, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg", alt: "Building Image 20" },
  { id: 21, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-315.jpg", alt: "Building Image 21" },
//   { id: 22, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-316.jpg", alt: "Building Image 22" },
  // { id: 23, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-322.jpg", alt: "Building Image 23" },
  // { id: 24, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-323.jpg", alt: "Building Image 24" },
  // { id: 25, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-330.jpg", alt: "Building Image 25" },
//   { id: 26, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-331.jpg", alt: "Building Image 26" },
//   { id: 27, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-337.jpg", alt: "Building Image 27" },
//   { id: 28, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-338.jpg", alt: "Building Image 28" },
//   { id: 29, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-339.jpg", alt: "Building Image 29" },
//   { id: 30, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-345.jpg", alt: "Building Image 30" },
//   { id: 31, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-346.jpg", alt: "Building Image 31" },
//   { id: 32, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-352.jpg", alt: "Building Image 32" },
//   { id: 33, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-363.jpg", alt: "Building Image 33" },
//   { id: 34, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-375.jpg", alt: "Building Image 34" },
//   { id: 35, src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-416.jpg", alt: "Building Image 35" }
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
          <SectionTitle>Landmark Creations</SectionTitle>
        </motion.div>
        
        <GalleryGrid>
          {buildingImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>
    </GallerySection>
  );
};

export default BuildingGallery;