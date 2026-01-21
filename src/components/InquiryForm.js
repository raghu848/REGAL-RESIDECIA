import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const FormSection = styled.section`
  padding: 2rem 0;
  
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
  background: url('/images/render/from_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 4rem 0;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.9rem;
    padding: 0.8rem;
  }
  
  @media (max-width: 400px) {
    gap: 0.8rem;
    padding: 0.6rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.7rem;
  }
`;

const FormInfo = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 3px solid var(--accent-gold);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ab8977;
    font-style: italic;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-weight: 300;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--primary-dark);
    margin-bottom: 2rem;
    font-family: 'Montserrat', sans-serif;
    text-align: justify;
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
    color: var(--primary-dark);
    margin-bottom: 0.3rem;
  }
  
  .info-details p {
    margin: 0;
    font-size: 1rem;
    color: var(--primary-dark);
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.3rem;
    }
    
    p {
      font-size: 1.05rem;
      margin-bottom: 1.8rem;
      text-align: justify;
    }
    
    .contact-info {
      margin-top: 1.8rem;
    }
    
    .info-item {
      gap: 0.9rem;
      margin-bottom: 1.3rem;
    }
    
    .info-icon {
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }
    
    .info-details h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }
    
    .info-details p {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 992px) {
    h2 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 1.6rem;
      text-align: justify;
    }
    
    .contact-info {
      margin-top: 1.6rem;
    }
    
    .info-item {
      gap: 0.8rem;
      margin-bottom: 1.2rem;
    }
    
    .info-icon {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
    
    .info-details h4 {
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }
    
    .info-details p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.1rem;
    }
    
    p {
      font-size: 0.95rem;
      margin-bottom: 1.4rem;
      text-align: justify;
    }
    
    .contact-info {
      margin-top: 1.4rem;
    }
    
    .info-item {
      gap: 0.7rem;
      margin-bottom: 1.1rem;
    }
    
    .info-icon {
      width: 35px;
      height: 35px;
      font-size: 0.9rem;
    }
    
    .info-details h4 {
      font-size: 0.95rem;
      margin-bottom: 0.15rem;
    }
    
    .info-details p {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 576px) {
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 1.2rem;
      text-align: justify;
    }
    
    .contact-info {
      margin-top: 1.2rem;
    }
    
    .info-item {
      gap: 0.6rem;
      margin-bottom: 1rem;
    }
    
    .info-icon {
      width: 30px;
      height: 30px;
      font-size: 0.8rem;
    }
    
    .info-details h4 {
      font-size: 0.9rem;
      margin-bottom: 0.1rem;
    }
    
    .info-details p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.9rem;
    }
    
    p {
      font-size: 0.88rem;
      margin-bottom: 1.1rem;
    }
    
    .contact-info {
      margin-top: 1.1rem;
    }
    
    .info-item {
      gap: 0.55rem;
      margin-bottom: 0.9rem;
    }
    
    .info-icon {
      width: 28px;
      height: 28px;
      font-size: 0.75rem;
    }
    
    .info-details h4 {
      font-size: 0.85rem;
      margin-bottom: 0.05rem;
    }
    
    .info-details p {
      font-size: 0.78rem;
    }
  }
  
  @media (max-width: 400px) {
    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    
    p {
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
    
    .contact-info {
      margin-top: 1rem;
    }
    
    .info-item {
      gap: 0.5rem;
      margin-bottom: 0.8rem;
    }
    
    .info-icon {
      width: 25px;
      height: 25px;
      font-size: 0.7rem;
    }
    
    .info-details h4 {
      font-size: 0.8rem;
    }
    
    .info-details p {
      font-size: 0.75rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    h2 {
      font-size: 1.85rem;
      margin-bottom: 1.15rem;
    }
    
    p {
      font-size: 0.97rem;
      margin-bottom: 1.45rem;
    }
    
    .contact-info {
      margin-top: 1.45rem;
    }
    
    .info-item {
      gap: 0.72rem;
      margin-bottom: 1.12rem;
    }
    
    .info-icon {
      width: 36px;
      height: 36px;
      font-size: 0.92rem;
    }
    
    .info-details h4 {
      font-size: 0.97rem;
      margin-bottom: 0.17rem;
    }
    
    .info-details p {
      font-size: 0.87rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    h2 {
      font-size: 1.9rem;
      margin-bottom: 1.2rem;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .contact-info {
      margin-top: 1.5rem;
    }
    
    .info-item {
      gap: 0.75rem;
      margin-bottom: 1.15rem;
    }
    
    .info-icon {
      width: 38px;
      height: 38px;
      font-size: 0.95rem;
    }
    
    .info-details h4 {
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }
    
    .info-details p {
      font-size: 0.9rem;
    }
  }
`;

const StyledForm = styled.form`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  border: 3px solid var(--accent-gold);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-dark);
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--accent-gold);
    border-radius: 4px;
    color: var(--primary-dark);
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    transition: border-color var(--transition-speed) ease;
    
    &:focus {
      outline: none;
      border-color: #b8860b;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .submit-btn {
    width: 100%;
    background: #ab8977;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(171, 137, 119, 0.4);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(171, 137, 119, 0.6);
    }
    
    &:disabled {
      background: rgba(171, 137, 119, 0.5);
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
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    padding: 2.2rem;
    
    .form-group {
      margin-bottom: 1.3rem;
    }
    
    label {
      margin-bottom: 0.4rem;
      font-size: 0.95rem;
    }
    
    input, textarea {
      padding: 0.7rem 0.9rem;
      font-size: 0.95rem;
    }
    
    textarea {
      min-height: 140px;
    }
    
    .submit-btn {
      padding: 0.9rem;
      font-size: 1.05rem;
    }
    
    .form-message {
      padding: 0.9rem;
      margin-top: 0.9rem;
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 992px) {
    border-radius: 9px;
    padding: 2rem;
    
    .form-group {
      margin-bottom: 1.2rem;
    }
    
    label {
      margin-bottom: 0.35rem;
      font-size: 0.9rem;
    }
    
    input, textarea {
      padding: 0.65rem 0.85rem;
      font-size: 0.9rem;
    }
    
    textarea {
      min-height: 130px;
    }
    
    .submit-btn {
      padding: 0.85rem;
      font-size: 1rem;
    }
    
    .form-message {
      padding: 0.85rem;
      margin-top: 0.85rem;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 1.8rem;
    
    .form-group {
      margin-bottom: 1.1rem;
    }
    
    label {
      margin-bottom: 0.3rem;
      font-size: 0.85rem;
    }
    
    input, textarea {
      padding: 0.6rem 0.8rem;
      font-size: 0.85rem;
    }
    
    textarea {
      min-height: 120px;
    }
    
    .submit-btn {
      padding: 0.8rem;
      font-size: 0.95rem;
    }
    
    .form-message {
      padding: 0.8rem;
      margin-top: 0.8rem;
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 576px) {
    border-radius: 7px;
    padding: 1.5rem;
    
    .form-group {
      margin-bottom: 1rem;
    }
    
    label {
      margin-bottom: 0.25rem;
      font-size: 0.8rem;
    }
    
    input, textarea {
      padding: 0.5rem 0.7rem;
      font-size: 0.8rem;
    }
    
    textarea {
      min-height: 110px;
    }
    
    .submit-btn {
      padding: 0.7rem;
      font-size: 0.9rem;
    }
    
    .form-message {
      padding: 0.7rem;
      margin-top: 0.7rem;
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 6.5px;
    padding: 1.35rem;
    
    .form-group {
      margin-bottom: 0.9rem;
    }
    
    label {
      margin-bottom: 0.22rem;
      font-size: 0.78rem;
    }
    
    input, textarea {
      padding: 0.45rem 0.65rem;
      font-size: 0.78rem;
    }
    
    textarea {
      min-height: 105px;
    }
    
    .submit-btn {
      padding: 0.65rem;
      font-size: 0.88rem;
    }
    
    .form-message {
      padding: 0.65rem;
      margin-top: 0.65rem;
      font-size: 0.78rem;
    }
  }
  
  @media (max-width: 400px) {
    border-radius: 6px;
    padding: 1.2rem;
    
    .form-group {
      margin-bottom: 0.8rem;
    }
    
    label {
      margin-bottom: 0.2rem;
      font-size: 0.75rem;
    }
    
    input, textarea {
      padding: 0.4rem 0.6rem;
      font-size: 0.75rem;
    }
    
    textarea {
      min-height: 100px;
    }
    
    .submit-btn {
      padding: 0.6rem;
      font-size: 0.85rem;
    }
    
    .form-message {
      padding: 0.6rem;
      margin-top: 0.6rem;
      font-size: 0.75rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    border-radius: 8.2px;
    padding: 1.85rem;
    
    .form-group {
      margin-bottom: 1.15rem;
    }
    
    label {
      margin-bottom: 0.32rem;
      font-size: 0.87rem;
    }
    
    input, textarea {
      padding: 0.62rem 0.82rem;
      font-size: 0.87rem;
    }
    
    textarea {
      min-height: 122px;
    }
    
    .submit-btn {
      padding: 0.82rem;
      font-size: 0.97rem;
    }
    
    .form-message {
      padding: 0.82rem;
      margin-top: 0.82rem;
      font-size: 0.87rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    border-radius: 8.5px;
    padding: 1.9rem;
    
    .form-group {
      margin-bottom: 1.18rem;
    }
    
    label {
      margin-bottom: 0.33rem;
      font-size: 0.9rem;
    }
    
    input, textarea {
      padding: 0.63rem 0.83rem;
      font-size: 0.9rem;
    }
    
    textarea {
      min-height: 125px;
    }
    
    .submit-btn {
      padding: 0.83rem;
      font-size: 0.98rem;
    }
    
    .form-message {
      padding: 0.83rem;
      margin-top: 0.83rem;
      font-size: 0.9rem;
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
      // Send inquiry to backend API
      await axios.post('http://localhost:5000/api/inquiry', formData);
      
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
          <h2 className="section-title" style={{ background: 'white', padding: '0.5rem 1.5rem', borderRadius: '8px', border: '2px solid var(--accent-gold)', color: '#ab8977', fontStyle: 'italic', fontFamily: 'Georgia, Times New Roman, serif', fontWeight: '300' }}>Schedule a Visit</h2>
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
              {`Schedule a visit to experience luxury living at Regal Residencia. Our team of experts will guide you through our premium amenities and residential spaces.`.toLowerCase().includes('luxury') ? (
                            <span dangerouslySetInnerHTML={{__html: `Schedule a visit to experience luxury living at Regal Residencia. Our team of experts will guide you through our premium amenities and residential spaces.`.replace(/(luxury)/gi, '<span class="luxury-text">$1</span>') }} />
                          ) : (
                            `Schedule a visit to experience luxury living at Regal Residencia. Our team of experts will guide you through our premium amenities and residential spaces.`
                          )}
            </motion.p>
            
            {/* <motion.div
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
                  <p>+91 778900 0077</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>gdplmohali@gmail.com</p>
                </div>
              </div>
            </motion.div> */}
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