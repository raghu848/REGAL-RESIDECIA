import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.4);
    border-color: rgba(212, 175, 55, 0.6);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .project-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-light);
    margin: 0;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--accent-gold);
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .location-icon {
    color: var(--accent-gold);
  }

  .stats {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent-gold);
  }

  .stat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const FloatingCard = ({ 
  projectName, 
  price, 
  location, 
  rating, 
  unitsSold, 
  delay = 0 
}) => {
  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="card-header">
        <h3 className="project-name">{projectName}</h3>
        <div className="price">{price}</div>
      </div>
      
      <div className="location">
        <span className="location-icon">📍</span>
        <span>{location}</span>
      </div>
      
      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{rating}</div>
          <div className="stat-label">Rating</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{unitsSold}%</div>
          <div className="stat-label">Sold</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default FloatingCard;