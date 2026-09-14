import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 5rem 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #d4af37 0%, #f4e5a4 50%, #d4af37 100%);
  }
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 5rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    padding: 0 4rem;
  }

  @media (max-width: 992px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Georgia', 'Times New Roman', serif;
  font-style: italic;
  font-size: 2.4rem;
  color: #e5b9a2;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #e5b9a2, #f0d0c0);
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 2.2rem 2rem;
  border: 1px solid rgba(229, 185, 162, 0.25);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: border-color 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    border-color: rgba(229, 185, 162, 0.6);
    box-shadow: 0 15px 40px rgba(229, 185, 162, 0.2);
  }

  h3 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-style: italic;
    font-size: 1.4rem;
    font-weight: 300;
    color: #e5b9a2;
    margin-bottom: 1.2rem;
    line-height: 1.3;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: #ffffff;
    opacity: 0.9;
    text-align: left;
  }
`;

const cardsData = [
  {
    title: "Distinguished Gated Living",
    text: "For discerning buyers seeking to buy an apartment in Mohali or searching for a premium flat for sale in Mohali, Regal Residencia in Sector 114 stands out among the top gated societies in Mohali. Masterfully conceptualized by architect Reza Kabul, this GMADA-approved project offers an unmatched lifestyle rivaling the finest luxury flats in Chandigarh."
  },
  {
    title: "Spacious 3 & 4 BHK Residences",
    text: "Homebuyers exploring 3 BHK luxury flats in Mohali or expansive 4 BHK luxury apartments in Mohali will find thoughtfully planned layouts with sunlit balconies and double-height living spaces. Review our competitive Mohali flats 3 BHK price details and floor plans designed for those demanding the best flats and luxury apartments in Mohali."
  },
  {
    title: "Strategic Growth Corridor",
    text: "Positioned along the Airport Road nexus in Sector 114, Regal Residencia offers rapid access to Chandigarh, IT City, and major medical hubs. For investors and residents searching for premium apartments in Mohali, 4 BHK flats, and luxury residences, this landmark development delivers exceptional comfort and enduring value."
  }
];

const SEOContentSection = () => {
  return (
    <SectionWrapper id="luxury-living">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Premier Luxury Residences & Societies in Mohali
        </SectionTitle>

        <ContentGrid>
          {cardsData.map((card, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </FeatureCard>
          ))}
        </ContentGrid>
      </Container>
    </SectionWrapper>
  );
};

export default SEOContentSection;
