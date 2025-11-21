import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechSpecsSection = styled.section`
  padding: 1rem 2;
  background-color: var(--primary-dark);
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
`;

const SpecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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