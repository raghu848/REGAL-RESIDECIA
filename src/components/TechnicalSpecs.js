import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechSpecsSection = styled.section`
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

const SpecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
    margin-top: 1.8rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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

const SpecCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .category-header {
    background: rgba(212, 175, 55, 0.1);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    h3 {
      color: var(--accent-gold);
      margin: 0;
      font-size: 1.5rem;
    }
  }
  
  .category-content {
    padding: 1.5rem;
  }
  
  .spec-item {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    h4 {
      color: var(--text-light);
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    
    p {
      color: var(--text-muted);
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    .category-header {
      padding: 0.9rem 1.3rem;
      
      h3 {
        font-size: 1.4rem;
      }
    }
    
    .category-content {
      padding: 1.3rem;
    }
    
    .spec-item {
      margin-bottom: 1.3rem;
      
      h4 {
        font-size: 1.05rem;
        margin-bottom: 0.45rem;
      }
      
      p {
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 992px) {
    .category-header {
      padding: 0.8rem 1.2rem;
      
      h3 {
        font-size: 1.3rem;
      }
    }
    
    .category-content {
      padding: 1.2rem;
    }
    
    .spec-item {
      margin-bottom: 1.2rem;
      
      h4 {
        font-size: 1rem;
        margin-bottom: 0.4rem;
      }
      
      p {
        font-size: 0.85rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    .category-header {
      padding: 0.7rem 1.1rem;
      
      h3 {
        font-size: 1.2rem;
      }
    }
    
    .category-content {
      padding: 1.1rem;
    }
    
    .spec-item {
      margin-bottom: 1.1rem;
      
      h4 {
        font-size: 0.95rem;
        margin-bottom: 0.35rem;
      }
      
      p {
        font-size: 0.8rem;
      }
    }
  }
  
  @media (max-width: 576px) {
    .category-header {
      padding: 0.6rem 1rem;
      
      h3 {
        font-size: 1.1rem;
      }
    }
    
    .category-content {
      padding: 1rem;
    }
    
    .spec-item {
      margin-bottom: 1rem;
      
      h4 {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
      
      p {
        font-size: 0.75rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    .category-header {
      padding: 0.55rem 0.9rem;
      
      h3 {
        font-size: 1.05rem;
      }
    }
    
    .category-content {
      padding: 0.9rem;
    }
    
    .spec-item {
      margin-bottom: 0.9rem;
      
      h4 {
        font-size: 0.88rem;
        margin-bottom: 0.25rem;
      }
      
      p {
        font-size: 0.72rem;
      }
    }
  }
  
  @media (max-width: 400px) {
    .category-header {
      padding: 0.5rem 0.8rem;
      
      h3 {
        font-size: 1rem;
      }
    }
    
    .category-content {
      padding: 0.8rem;
    }
    
    .spec-item {
      margin-bottom: 0.8rem;
      
      h4 {
        font-size: 0.85rem;
        margin-bottom: 0.2rem;
      }
      
      p {
        font-size: 0.7rem;
      }
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    .category-header {
      padding: 0.75rem 1.15rem;
      
      h3 {
        font-size: 1.25rem;
      }
    }
    
    .category-content {
      padding: 1.15rem;
    }
    
    .spec-item {
      margin-bottom: 1.15rem;
      
      h4 {
        font-size: 0.97rem;
        margin-bottom: 0.37rem;
      }
      
      p {
        font-size: 0.82rem;
      }
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    .category-header {
      padding: 0.8rem 1.2rem;
      
      h3 {
        font-size: 1.3rem;
      }
    }
    
    .category-content {
      padding: 1.2rem;
    }
    
    .spec-item {
      margin-bottom: 1.2rem;
      
      h4 {
        font-size: 1rem;
        margin-bottom: 0.4rem;
      }
      
      p {
        font-size: 0.85rem;
      }
    }
  }
`;

const technicalSpecsData = [
  {
    id: 1,
    category: "Construction & Materials",
    specs: [
      {
        title: "Structural Framework",
        description: "Reinforced cement concrete (RCC) frame structure with earthquake-resistant design standards. High-strength TMT bars and premium grade cement used throughout."
      },
      {
        title: "Walls & Partitions",
        description: "External walls constructed with solid concrete blocks. Internal partitions using lightweight AAC blocks for better thermal insulation and soundproofing."
      },
      {
        title: "Flooring",
        description: "Premium vitrified tiles in living areas with designer laminated wooden flooring in bedrooms. Anti-skid ceramic tiles in wet areas."
      }
    ]
  },
  {
    id: 2,
    category: "Electrical & Plumbing",
    specs: [
      {
        title: "Electrical Systems",
        description: "Concealed copper wiring with modular switches and sockets. MCB distribution board with individual circuit breakers for each room. Provision for UPS and generator backup."
      },
      {
        title: "Plumbing Systems",
        description: "CPVC pipes for internal plumbing with ISI marked fixtures. Dual-line water supply system with overhead and underground tanks. Individual water meters for each unit."
      },
      {
        title: "Smart Home Technology",
        description: "Pre-wired for smart home automation including lighting control, climate control, security systems, and entertainment systems. Provision for IoT device integration."
      }
    ]
  },
  {
    id: 3,
    category: "HVAC & Security",
    specs: [
      {
        title: "HVAC Systems",
        description: "Split AC units in all bedrooms with central HVAC provision in living areas. Heat recovery ventilation system for fresh air circulation. Insulated UPVC windows for thermal efficiency."
      },
      {
        title: "Security Systems",
        description: "24/7 manned security with CCTV surveillance throughout the premises. Video door phones in each unit. Fire alarm and suppression systems with smoke detectors."
      },
      {
        title: "Elevators",
        description: "High-speed gearless traction elevators with automatic rescue devices. Fireman's switch and power backup. Stainless steel finish with anti-slip flooring."
      }
    ]
  }
];

const TechnicalSpecs = () => {
  return (
    <TechSpecsSection>
      <div className="container">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Technical Specifications</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium quality materials and advanced construction techniques ensure durability, safety, and luxury in every aspect of Regal Residencia.
          </motion.p>
        </SectionHeader>
        
        <SpecsContainer>
          {technicalSpecsData.map((category, index) => (
            <SpecCategory
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="category-header">
                <h3>{category.category}</h3>
              </div>
              <div className="category-content">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="spec-item">
                    <h4>{spec.title}</h4>
                    <p>{spec.description}</p>
                  </div>
                ))}
              </div>
            </SpecCategory>
          ))}
        </SpecsContainer>
      </div>
    </TechSpecsSection>
  );
};

export default TechnicalSpecs;