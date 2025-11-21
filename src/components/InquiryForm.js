import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const FormSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%);
  position: relative;
  overflow: hidden;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 2rem;
  }
  
  .contact-info {
    margin-top: 2rem;
  }
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .info-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(212, 175, 55, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-gold);
    font-size: 1.2rem;
  }
  
  .info-details h4 {
    color: var(--text-light);
    margin-bottom: 0.3rem;
  }
  
  .info-details p {
    margin: 0;
    font-size: 1rem;
    color: var(--text-muted);
  }
`;

const StyledForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-light);
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: var(--text-light);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: border-color var(--transition-speed) ease;
    
    &:focus {
      outline: none;
      border-color: var(--accent-gold);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .submit-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--accent-gold), #b8860b);
    color: var(--primary-dark);
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(212, 175, 55, 0.6);
    }
    
    &:disabled {
      background: rgba(212, 175, 55, 0.5);
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
  
  .form-message {
    text-align: center;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    
    &.success {
      background: rgba(40, 167, 69, 0.2);
      color: #28a745;
      border: 1px solid #28a745;
    }
    
    &.error {
      background: rgba(220, 53, 69, 0.2);
      color: #dc3545;
      border: 1px solid #dc3545;
    }
  }
`;

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageType, setFormMessageType] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');
    
    try {
      // In a real application, this would point to your backend API
      await axios.post('/api/inquiry', formData);
      
      setFormMessage('Thank you for your inquiry! Our team will contact you shortly.');
      setFormMessageType('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setFormMessage('Failed to submit inquiry. Please try again.');
      setFormMessageType('error');
      console.error('Error submitting inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <FormSection id="inquiry">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Schedule a Visit</h2>
        </motion.div>
        
        <FormContainer>
          <FormInfo>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interested in Regal Residencia?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Schedule a visit to experience luxury living at Regal Residencia. Our team of experts will guide you through our premium amenities and residential spaces.
            </motion.p>
            
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Mohali Sector 114, Punjab</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>info@regalresidencia.com</p>
                </div>
              </div>
            </motion.div>
          </FormInfo>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StyledForm onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
              
              {formMessage && (
                <div className={`form-message ${formMessageType}`}>
                  {formMessage}
                </div>
              )}
            </StyledForm>
          </motion.div>
        </FormContainer>
      </div>
    </FormSection>
  );
};

export default InquiryForm;