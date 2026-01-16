import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LocationSection = styled.section`
  position: relative;
  padding: 8rem 0; /* Increased from 6rem */
  overflow: hidden;
  background: #0a0a0a;
  margin-top: 4rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/render/Location.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3); /* Subtle semi-transparent white overlay */
    z-index: 1;
  }
  
  .location-content {
    position: relative;
    z-index: 3;
    max-width: 1400px; /* Increased from 1320px */
    margin: 0 auto;
    padding: 0 6rem; /* Increased from 5rem */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .location-text {
    text-align: center;
    max-width: 900px; /* Increased from 800px */
    margin: 0 auto;
  }
  
  .location-heading {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    font-size: 3rem; /* Increased from 2.5rem */
    color: #e5b9a2;
    margin-bottom: 2rem; /* Increased from 1.5rem */
    line-height: 1.3;
    font-weight: 300;
  }
  
  .location-paragraph {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 1.3rem; /* Increased from 1.1rem */
    line-height: 1.8; /* Increased from 1.7 */
    color: #000000;
    opacity: 0.9;
    text-align: center;
    margin-top: 3.5rem; /* Increased from 3rem */
  }
  
  @media (max-width: 1200px) {
    padding: 7rem 0; /* Increased from 5rem */
    
    .location-content {
      padding: 0 5rem; /* Increased from 4rem */
    }
    
    .location-heading {
      font-size: 2.7rem; /* Increased from 2.2rem */
    }
    
    .location-paragraph {
      font-size: 1.2rem; /* Increased from 1rem */
      text-align: justify;
    }
  }

  @media (max-width: 992px) {
    padding: 6rem 0; /* Increased from 4rem */
    
    .location-content {
      padding: 0 4rem; /* Increased from 3rem */
    }
    
    .location-heading {
      font-size: 2.4rem; /* Increased from 2rem */
    }
    
    .location-paragraph {
      font-size: 1.1rem; /* Increased from 0.95rem */
      text-align: justify;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 0; /* Increased from 3rem */
    margin-top: 2rem;
    
    .location-content {
      padding: 0 3rem; /* Increased from 2rem */
    }
    
    .location-heading {
      font-size: 2.1rem; /* Increased from 1.8rem */
      margin-bottom: 1.5rem; /* Increased from 1.2rem */
    }
    
    .location-paragraph {
      font-size: 1rem; /* Increased from 0.9rem */
      text-align: justify;
    }
  }

  @media (max-width: 480px) {
    padding: 4rem 0; /* Increased from 2.5rem */
    
    .location-heading {
      font-size: 1.8rem; /* Increased from 1.5rem */
    }
    
    .location-paragraph {
      font-size: 0.95rem; /* Increased from 0.85rem */
      text-align: justify;
    }
  }
`;

const Location = () => {
  return (
    <LocationSection>
      <div className="location-content">
        <motion.div
          className="location-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="location-heading">At the Heart of Mohali's Growth Corridor</h2>
          <div style={{height: '10rem'}}></div> {/* Gap between heading and paragraph */}
          <p className="location-paragraph">
Strategically located in Sector 114, Mohali, the project enjoys seamless connectivity to key city landmarks and regional destinations. With easy access to Chandigarh, Mohali Railway Station, and the International Airport, the location offers unmatched convenience for everyday commuting and long-term value. Proximity to natural attractions such as Sukhna Lake and the Chandigarh Wildlife Sanctuary further enhances the appeal, creating a perfect balance between urban living and natural surroundings.          </p>
        </motion.div>
      </div>
    </LocationSection>
  );
};

export default Location;