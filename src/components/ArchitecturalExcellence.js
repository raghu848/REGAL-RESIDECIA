import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ArchitecturalExcellenceSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background: #0a0a0a;
  margin-top: 4rem;

  .diagonal-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        135deg,
        transparent,
        transparent 1px,
        rgba(255, 255, 255, 0.015) 1px,
        rgba(255, 255, 255, 0.015) 2px
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 1px,
        rgba(255, 255, 255, 0.015) 1px,
        rgba(255, 255, 255, 0.015) 2px
      ),
      repeating-linear-gradient(
        135deg,
        #000000 0px,
        #0f0f0f 50px,
        #000000 100px
      );
    z-index: 1;
  }

  .diagonal-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 8px,
        rgba(255, 255, 255, 0.008) 8px,
        rgba(255, 255, 255, 0.008) 9px
      ),
      repeating-linear-gradient(
        -135deg,
        transparent 0,
        transparent 8px,
        rgba(255, 255, 255, 0.008) 8px,
        rgba(255, 255, 255, 0.008) 9px
      );
  }

  .diagonal-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 3px,
        rgba(255, 255, 255, 0.012) 3px,
        rgba(255, 255, 255, 0.012) 4px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0,
        transparent 3px,
        rgba(255, 255, 255, 0.012) 3px,
        rgba(255, 255, 255, 0.012) 4px
      );
    opacity: 0.8;
  }

  .content-overlay {
    position: relative;
    z-index: 2;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 5rem;
  }

  .content-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .text-content {
    color: #ffffff;
  }

  .heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-size: 2.2rem;
    color: #e5b9a2;
    margin-bottom: 1.5rem;
    line-height: 1.4;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    display: inline-block;
  }

  .paragraph {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ffffff;
    opacity: 0.9;
    text-align: justify;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1200px) {
    .content-overlay {
      padding: 0 4rem;
    }
  }

  @media (max-width: 992px) {
    .content-overlay {
      padding: 0 3rem;
    }

    .content-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .image-container {
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;

    .content-overlay {
      padding: 0 2rem;
    }

    .content-layout {
      gap: 2rem;
    }

    .heading {
      font-size: 1.8rem;
      letter-spacing: 1px;
    }

    .paragraph {
      font-size: 1rem;
      text-align: justify;
    }
  }

  @media (max-width: 480px) {
    .heading {
      font-size: 1.5rem;
      letter-spacing: 0.8px;
    }

    .paragraph {
      font-size: 0.9rem;
      text-align: justify;
    }
  }
`;

const ArchitecturalExcellence = () => {
  return (
    <ArchitecturalExcellenceSection>
      <div className="diagonal-bg"></div>
      <div className="content-overlay">
        <div className="content-layout">
          <div className="text-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading">
                Architectural Excellence <br />By Reza Kabul
              </h2>
              <p className="paragraph">
                One of India's most respected architects, brings decades of global experience and design excellence to this project. Founder of ARK Reza Kabul Architects, established in 1988, he is known for pioneering landmark developments rooted in his philosophy of "liberating spaces." With studios in India and the USA, his portfolio spans residential, commercial, and iconic high-rise projects across India and internationally. His work is widely recognised for setting new benchmarks in architectural innovation, scale, and timeless design.
              </p>
            </motion.div>
          </div>
          
          <div className="image-container">
            <motion.img
              src="/images/render/Architect_Image.png"
              alt="Architect Reza Kabul"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </ArchitecturalExcellenceSection>
  );
};

export default ArchitecturalExcellence;