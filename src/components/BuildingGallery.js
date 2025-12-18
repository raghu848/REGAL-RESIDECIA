import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GallerySection = styled.section`
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    
    &::after {
      width: 90px;
      height: 3.5px;
      margin: 0.9rem auto;
    }
  }
  
  @media (max-width: 992px) {
    font-size: 2rem;
    margin-bottom: 2.2rem;
    
    &::after {
      width: 80px;
      height: 3px;
      margin: 0.8rem auto;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    
    &::after {
      width: 70px;
      height: 2.5px;
      margin: 0.7rem auto;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
    
    &::after {
      width: 60px;
      height: 2px;
      margin: 0.6rem auto;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.6rem;
    
    &::after {
      width: 50px;
      height: 1.8px;
      margin: 0.5rem auto;
    }
  }
  
  @media (max-width: 400px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    
    &::after {
      width: 45px;
      height: 1.5px;
      margin: 0.4rem auto;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 2.1rem;
    
    &::after {
      width: 72px;
      height: 2.6px;
      margin: 0.72rem auto;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 2.15rem;
    
    &::after {
      width: 75px;
      height: 2.7px;
      margin: 0.75rem auto;
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.3rem;
    margin-top: 2.5rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.1rem;
    margin-top: 2.2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    margin-top: 1.6rem;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin-top: 1.5rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    gap: 1.05rem;
    margin-top: 2.05rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.1rem;
    margin-top: 2.1rem;
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    height: 280px;
    border: 1.8px solid #555;
    box-shadow: 0 9px 27px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 992px) {
    border-radius: 9px;
    height: 260px;
    border: 1.6px solid #555;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    height: 240px;
    border: 1.4px solid #555;
    box-shadow: 0 7px 21px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 576px) {
    border-radius: 7px;
    height: 220px;
    border: 1.2px solid #555;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    height: 200px;
    border: 1px solid #555;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 400px) {
    border-radius: 5px;
    height: 180px;
    border: 0.8px solid #555;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    border-radius: 8.5px;
    height: 250px;
    border: 1.5px solid #555;
    box-shadow: 0 7.5px 22px rgba(0, 0, 0, 0.3);
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    border-radius: 9px;
    height: 260px;
    border: 1.6px solid #555;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
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