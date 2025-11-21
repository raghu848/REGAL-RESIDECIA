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
  font-weight: 700;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: var(--accent-gold);
    margin: 1rem auto;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.5);
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

// Architecture images from the architech folder
const architectureImages = [
//   { id: 1, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-034.jpg", alt: "Architecture Design 1" },
//   { id: 2, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-054.png", alt: "Architecture Design 2" },
//   { id: 3, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-068.jpg", alt: "Architecture Design 3" },
//   { id: 4, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-078.jpg", alt: "Architecture Design 4" },
  { id: 5, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-090.jpg", alt: "Architecture Design 5" },
  { id: 6, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-102.jpg", alt: "Architecture Design 6" },
  { id: 7, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-110.jpg", alt: "Architecture Design 7" },
  { id: 8, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-122.jpg", alt: "Architecture Design 8" },
  { id: 9, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-123.jpg", alt: "Architecture Design 9" },
  { id: 10, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-131.jpg", alt: "Architecture Design 10" },
  // { id: 11, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-134.jpg", alt: "Architecture Design 11" },
  { id: 12, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-142.jpg", alt: "Architecture Design 12" },
  { id: 13, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-159.jpg", alt: "Architecture Design 13" },
  // { id: 14, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image- 160.jpg", alt: "Architecture Design 14" },
  { id: 15, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-166.jpg", alt: "Architecture Design 15" },
//   { id: 16, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-167.jpg", alt: "Architecture Design 16" },
//   { id: 17, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-173.jpg", alt: "Architecture Design 17" },
  { id: 18, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-174.jpg", alt: "Architecture Design 18" },
  { id: 19, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-185.jpg", alt: "Architecture Design 19" },
//   { id: 20, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-186.jpg", alt: "Architecture Design 20" },
  { id: 21, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-192.jpg", alt: "Architecture Design 21" },
//   { id: 22, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-198.jpg", alt: "Architecture Design 22" },
//   { id: 23, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-204.jpg", alt: "Architecture Design 23" },
  { id: 24, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-210.jpg", alt: "Architecture Design 24" },
//   { id: 25, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-216.jpg", alt: "Architecture Design 25" },
  { id: 26, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-252.jpg", alt: "Architecture Design 26" },
  { id: 27, src: "/images/architech/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-324.jpg", alt: "Architecture Design 27" }
];

const ArchitectureGallery = () => {
  return (
    <GallerySection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Architectural Highlights</SectionTitle>
        </motion.div>
        
        <GalleryGrid>
          {architectureImages.map((image, index) => (
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

export default ArchitectureGallery;