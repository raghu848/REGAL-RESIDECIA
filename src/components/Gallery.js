import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  .section-title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #f5f5f5, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
  }
  
  .section-subtitle {
    color: var(--text-muted);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }
  
  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 5px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
    margin: 1.5rem auto;
    border-radius: 3px;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    .section-title {
      font-size: 2.2rem;
      margin-bottom: 2.5rem;
    }
    
    &::after {
      width: 90px;
      height: 3.5px;
      margin: 0.9rem auto;
    }
  }
  
  @media (max-width: 992px) {
    .section-title {
      font-size: 2rem;
      margin-bottom: 2.2rem;
    }
    
    &::after {
      width: 80px;
      height: 3px;
      margin: 0.8rem auto;
    }
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
    
    &::after {
      width: 70px;
      height: 2.5px;
      margin: 0.7rem auto;
    }
  }
  
  @media (max-width: 576px) {
    .section-title {
      font-size: 1.6rem;
      margin-bottom: 1.8rem;
    }
    
    &::after {
      width: 60px;
      height: 2px;
      margin: 0.6rem auto;
    }
  }
  
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.5rem;
      margin-bottom: 1.6rem;
    }
    
    &::after {
      width: 50px;
      height: 1.8px;
      margin: 0.5rem auto;
    }
  }
  
  @media (max-width: 400px) {
    .section-title {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
    }
    
    &::after {
      width: 45px;
      height: 1.5px;
      margin: 0.4rem auto;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    .section-title {
      font-size: 1.85rem;
      margin-bottom: 2.1rem;
    }
    
    &::after {
      width: 72px;
      height: 2.6px;
      margin: 0.72rem auto;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    .section-title {
      font-size: 1.9rem;
      margin-bottom: 2.15rem;
    }
    
    &::after {
      width: 75px;
      height: 2.7px;
      margin: 0.75rem auto;
    }
  }
`;

const GalleryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  .tab {
    padding: 0.8rem 2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: var(--text-muted);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    
    &.active, &:hover {
      background: linear-gradient(135deg, var(--accent-gold), #b8860b);
      color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    .tab {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 0.9rem;
    margin-top: 1.3rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.7rem;
    margin-top: 1.1rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
    margin-top: 0.9rem;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    gap: 0.72rem;
    margin-top: 1.12rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 0.75rem;
    margin-top: 1.15rem;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  height: 300px;
  cursor: pointer;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 18px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 40%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .overlay-text {
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .overlay-category {
    color: var(--accent-gold);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
    
    img {
      transform: scale(1.15);
    }
    
    .overlay {
      opacity: 1;
    }
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    height: 230px;
    box-shadow: 0 9px 27px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 1.1rem;
      padding: 0.9rem;
    }
  }
  
  @media (max-width: 992px) {
    border-radius: 9px;
    height: 210px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    height: 190px;
    box-shadow: 0 7px 21px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.9rem;
      padding: 0.7rem;
    }
  }
  
  @media (max-width: 576px) {
    border-radius: 7px;
    height: 170px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.8rem;
      padding: 0.6rem;
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 6.5px;
    height: 160px;
    box-shadow: 0 5.5px 16.5px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.75rem;
      padding: 0.55rem;
    }
  }
  
  @media (max-width: 400px) {
    border-radius: 6px;
    height: 150px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.7rem;
      padding: 0.5rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    border-radius: 8.2px;
    height: 192px;
    box-shadow: 0 7.2px 21.5px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.92rem;
      padding: 0.72rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    border-radius: 8.5px;
    height: 195px;
    box-shadow: 0 7.5px 22px rgba(0, 0, 0, 0.3);
    
    .overlay-text {
      font-size: 0.95rem;
      padding: 0.75rem;
    }
  }
`;

const galleryImages = [
  {
    id: 1,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-299.jpg",
    alt: "Luxury Apartment Interior",
    category: "Residential"
  },
  {
    id: 2,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-314.jpg",
    alt: "Modern Kitchen",
    category: "Interior"
  },
  {
    id: 3,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-243.jpg",
    alt: "Swimming Pool",
    category: "Amenities"
  },
  {
    id: 4,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-375.jpg",
    alt: "Building Exterior",
    category: "Exterior"
  },
  {
    id: 5,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-251.jpg",
    alt: "Clubhouse",
    category: "Amenities"
  },
  {
    id: 6,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-258.jpg",
    alt: "Kids Play Area",
    category: "Amenities"
  },
  {
    id: 7,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-260.jpg",
    alt: "Landscaped Gardens",
    category: "Amenities"
  },
  {
    id: 8,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-266.jpg",
    alt: "Gym & Fitness Center",
    category: "Amenities"
  },
  {
    id: 9,
    src: "/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-273.jpg",
    alt: "Multipurpose Court",
    category: "Amenities"
  }
];

const Gallery = () => {     
  return (
    <GallerySection id="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader>
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-subtitle">
              {`Explore our luxury residences through stunning visuals that showcase the elegance and sophistication of Regal Residencia`.toLowerCase().includes('luxury') ? (
                <span dangerouslySetInnerHTML={{__html: `Explore our luxury residences through stunning visuals that showcase the elegance and sophistication of Regal Residencia`.replace(/(luxury)/gi, '<span class="luxury-text">$1</span>') }} />
              ) : (
                `Explore our luxury residences through stunning visuals that showcase the elegance and sophistication of Regal Residencia`
              )}
            </p>
          </SectionHeader>
        </motion.div>
        
        <GalleryTabs>
          <div className="tab active">All Projects</div>
          <div className="tab">Residential</div>
          <div className="tab">Amenities</div>
          <div className="tab">Exterior</div>
          <div className="tab">Interior</div>
        </GalleryTabs>
        
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="img-radius-1"
                onError={(e) => {
                  e.target.src = '/images/pictures/Screenshot 2024-08-30 at 9.41.53 PM.pdf-image-375.jpg';
                }}
              />
              <div className="overlay">
                <div className="overlay-text">{image.alt}</div>
                <div className="overlay-category">{image.category}</div>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>
    </GallerySection>
  );
};

export default Gallery;