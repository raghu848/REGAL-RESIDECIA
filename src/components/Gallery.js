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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
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
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 250px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .overlay-text {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
  }
  
  &:hover {
    img {
      transform: scale(1.1);
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
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Luxury Apartment Interior",
    category: "Residential"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80",
    alt: "Modern Kitchen",
    category: "Interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    alt: "Swimming Pool",
    category: "Amenities"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Building Exterior",
    category: "Exterior"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Clubhouse",
    category: "Amenities"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Kids Play Area",
    category: "Amenities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515542408672-7ef1ed6e9b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Landscaped Gardens",
    category: "Amenities"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Gym & Fitness Center",
    category: "Amenities"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Multipurpose Court",
    category: "Amenities"
  }
];

const Gallery = () => {     
  return (
    <GallerySection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Project Gallery</h2>
        </motion.div>
        
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
                }}
              />
              <div className="overlay">
                <div className="overlay-text">
                  {image.alt}<br />
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1rem' }}>{image.category}</span>
                </div>
              </div>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>
    </GallerySection>
  );
};

export default Gallery;