import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--secondary-dark);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 3rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .quote-icon {
    font-size: 5rem;
    color: rgba(212, 175, 55, 0.15);
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: 'Playfair Display', serif;
    transform: rotate(180deg);
  }
  
  .testimonial-text {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 2rem;
    font-style: italic;
    position: relative;
    z-index: 1;
    font-weight: 300;
  }
  
  .client-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .client-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--accent-gold), #d4af37);
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-dark);
    border: 3px solid var(--accent-gold);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  }
  
  .client-details {
    text-align: left;
  }
  
  .client-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 0.3rem;
  }
  
  .client-title {
    font-size: 1rem;
    color: var(--accent-gold);
    margin-bottom: 0.3rem;
  }
  
  .client-location {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .rating {
    color: var(--accent-gold);
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--accent-gold);
    border-radius: 3px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-light);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin: 0 10px;
  
  &:hover {
    background: var(--accent-gold);
    border-color: var(--accent-gold);
    transform: translateY(-3px);
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const Indicator = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.4)'};
  }
`;

const testimonialsData = [
  {
    id: 1,
    text: "Moving to Regal Residencia was the best investment decision we've ever made. The craftsmanship is exceptional, and the attention to detail in every corner reflects the premium quality. Our family enjoys the serene environment and world-class amenities daily.",
    name: "Dr. Amit Sharma",
    title: "Senior Executive, TechCorp",
    location: "Sector 114, Mohali",
    initials: "AS",
    rating: 5
  },
  {
    id: 2,
    text: "As an interior designer, I'm extremely particular about aesthetics and functionality. Regal Residencia exceeded my expectations with their thoughtful design elements and premium finishes. The community vibe is welcoming, and the security is top-notch.",
    name: "Priya Patel",
    title: "Interior Designer",
    location: "Chandigarh",
    initials: "PP",
    rating: 5
  },
  {
    id: 3,
    text: "After researching multiple luxury developments, Regal Residencia stood out for its strategic location and future appreciation potential. The transparency throughout the purchase process and the timely delivery made it a stress-free experience. Now enjoying our dream home!",
    name: "Rajiv Mehta",
    title: "Real Estate Investor",
    location: "Delhi",
    initials: "RM",
    rating: 5
  },
  {
    id: 4,
    text: "The clubhouse facilities are outstanding! From the infinity pool to the fully equipped gym, everything is maintained to perfection. My kids love the play area, and we often host gatherings in the party lawn. Truly a premium living experience.",
    name: "Sunita Verma",
    title: "Entrepreneur",
    location: "Mohali",
    initials: "SV",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  
  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  const renderRating = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  
  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Verified Testimonials</SectionTitle>
          <Subtitle>Hear from our esteemed residents about their premium living experience</Subtitle>
        </motion.div>
        
        <TestimonialsContainer>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeTestimonial === index ? 1 : 0,
                y: activeTestimonial === index ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              style={{ display: activeTestimonial === index ? 'block' : 'none' }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="client-info">
                <div className="client-avatar">
                  {testimonial.initials}
                </div>
                <div className="client-details">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-title">{testimonial.title}</div>
                  <div className="client-location">{testimonial.location}</div>
                  <div className="rating">{renderRating(testimonial.rating)}</div>
                </div>
              </div>
            </TestimonialCard>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
            <NavigationButton onClick={prevTestimonial}>❮</NavigationButton>
            
            <IndicatorsContainer>
              {testimonialsData.map((_, index) => (
                <Indicator
                  key={index}
                  active={activeTestimonial === index}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </IndicatorsContainer>
            
            <NavigationButton onClick={nextTestimonial}>❯</NavigationButton>
          </div>
        </TestimonialsContainer>
      </div>
    </TestimonialsSection>
  );
};

export default Testimonials;