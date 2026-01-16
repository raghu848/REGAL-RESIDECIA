import React from 'react';
import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
    { icon: '/images/icons/club_10934333.svg', name: 'Clubhouse' },
    { icon: '/images/icons/bar-counter_4256133.svg', name: 'Lounge Bar' },
    { icon: '/images/icons/game-center_18369956.svg', name: 'Indoor Games Room' },
    { icon: '/images/icons/stadium_4276518.svg', name: 'Banquet Hall' },
    { icon: '/images/icons/theater_3041710.svg', name: 'Mini Theatre' },
    { icon: '/images/icons/gym_11055008.svg', name: 'Gymnasium' },
    { icon: '/images/icons/sauna_17386830.svg', name: 'Spa & Sauna' },
    { icon: '/images/icons/computer_14197303.svg', name: 'Library' },
    { icon: '/images/icons/rubber-pool_10772888.svg', name: 'Open-to-Sky Swimming Pool' },
    { icon: '/images/icons/beach_18694042.svg', name: 'Palm Island Pool Area' },
    { icon: '/images/icons/ice-skate_11249697.svg', name: 'Skating Rink' },
    { icon: '/images/icons/playground_10638591.svg', name: 'Kids Play Area' },
    { icon: '/images/icons/cricket-stump_17559333.svg', name: 'Box Cricket Pitch' },
    { icon: '/images/icons/badminton_12635730.svg', name: 'Badminton Court' },
    { icon: '/images/icons/golf-equipment_5477988.svg', name: 'Open-to-Sky Mini Golf' },
    { icon: '/images/icons/wedding-dinner_9360394.svg', name: 'Amphitheatre' },
    { icon: '/images/icons/computer_14197303.svg', name: 'Lawn Zen Garden' },
    { icon: '/images/icons/gazebo_4590895.svg', name: 'Gazebo' },
  ];

  return (
    <section className="amenities-section">
      <div className="background-image"></div>
      
      <div className="content-wrapper">
        <div className="text-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading"
          >
            An Elevated Lifestyle Hub
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subheading"
          >
            Where wellness, recreation, and refined social spaces come together seamlessly.
          </motion.p>
        </div>
        
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="amenity-item"
            >
                        <div 
                className="icon-container"
                style={{
                  backgroundImage: `url(${amenity.icon})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'invert(85%) sepia(30%) saturate(400%) hue-rotate(340deg)',
                }}
              ></div>
              <span className="amenity-name">{amenity.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .amenities-section {
          position: relative;
          padding: 6rem 0;
          min-height: 100vh;
          overflow: hidden;
          background: #0a0a0a;
        }
        
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/render/Asset 1-100.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.15; /* Blurry, less opacity */
          filter: blur(2px);
          z-index: 1;
        }
        
        .content-wrapper {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          z-index: 2;
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .heading {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 3.5rem;
          font-weight: 300;
          font-style: italic;
          color: #e5b9a2; /* e5b9a2 color tone */
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        
        .subheading {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          line-height: 1.6;
          color: white;
          max-width: 500px;
        }
        
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          padding: 1rem 0;
        }
        
        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.8rem 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .amenity-item:hover {
          transform: translateY(-5px);
        }
        
        .icon-container {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .icon-container {
          width: 50px;
          height: 50px;
          margin-bottom: 1rem;
        }
        
        .amenity-name {
          color: white; /* White text */
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.4;
          text-align: center;
        }
        
        @media (max-width: 1200px) {
          .content-wrapper {
            padding: 0 3rem;
            gap: 3rem;
          }
          
          .heading {
            font-size: 3rem;
          }
          
          .subheading {
            font-size: 1.1rem;
          }
          
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        @media (max-width: 992px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 0 2rem;
          }
          
          .text-content {
            align-items: center;
            text-align: center;
          }
          
          .subheading {
            max-width: 100%;
          }
          
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 0 1.5rem;
          }
          
          .heading {
            font-size: 2.5rem;
          }
          
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }
          
          .icon-container {
            width: 45px;
            height: 45px;
          }
        }
        
        @media (max-width: 480px) {
          .amenities-section {
            padding: 4rem 0;
          }
          
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
          }
          
          .heading {
            font-size: 2rem;
          }
          
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .icon-container {
            width: 40px;
            height: 40px;
          }
          
          .amenity-name {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Amenities;