import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { trackFormSubmission, trackEvent } from '../services/analytics';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  pointer-events: ${props => props.show ? 'all' : 'none'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const PopupContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #c8b48c;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 50px; /* Positioned at 50px from top as per requirement */
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4a4a4a;
  z-index: 10000;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    color: #c8b48c;
  }
  
  &::before {
    content: '×';
  }
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #4a4a4a;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #4a4a4a;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #4a4a4a;
  
  &:focus {
    outline: none;
    border-color: #c8b48c;
    box-shadow: 0 0 0 2px rgba(200, 180, 140, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #4a4a4a;
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    outline: none;
    border-color: #c8b48c;
    box-shadow: 0 0 0 2px rgba(200, 180, 140, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: #ab8977;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #c8b48c;
  }
  
  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const PopupEnquiryForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [dismissCount, setDismissCount] = useState(0); // Track how many times the popup has been dismissed
  const timeoutRef = useRef(null); // Track timeout ID to clear if needed

  // Show popup with increasing delay after each dismissal, but not after submission
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const calculateDelay = () => {
      // Base delay is 15 seconds, plus 15 seconds for each dismissal
      return 15000 + (dismissCount * 15000);
    };
    
    // Schedule next popup if not submitted
    if (!hasSubmitted) {
      timeoutRef.current = setTimeout(() => {
        setShowPopup(true);
      }, calculateDelay());
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasSubmitted, dismissCount]);

  const handleClose = () => {
    setShowPopup(false);
    // Increase the dismiss count
    setDismissCount(prev => prev + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track form submission event
    trackEvent('form_start', 'engagement', 'popup_enquiry_form');
    
    // Determine the API URL based on environment
    const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:5000/api/inquiry'
      : 'https://www.regalresidenciamohali.com/api/inquiry';
    
    try {
      // Send inquiry to backend API
      await axios.post(apiUrl, {
        ...formData,
        email: '' // Adding empty email field as it's not in the popup form
      });
      
      // Mark as submitted to prevent future popups
      setHasSubmitted(true);
      
      // Track successful form submission
      trackFormSubmission('popup_enquiry_form_success');
      
      // Show success message
      setShowSuccessMessage(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      
      // Reset form and close popup
      setFormData({ name: '', phone: '', message: '' });
      setShowPopup(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit inquiry. Please try again.');
      
      // Track failed form submission
      trackEvent('form_error', 'engagement', 'popup_enquiry_form');
    }
  };

  return (
    <>
      <PopupOverlay show={showPopup}>
        <PopupContainer>
          <CloseButton onClick={handleClose} />
          <PopupTitle>Submit Your Enquiry</PopupTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="popup-name">Name</Label>
              <Input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="popup-phone">Phone</Label>
              <Input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="popup-message">Message</Label>
              <TextArea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </PopupContainer>
      </PopupOverlay>
      
      {/* Success Message */}
      {showSuccessMessage && (
        <PopupOverlay show={true}>
          <PopupContainer style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ 
              color: '#4a4a4a', 
              marginBottom: '1rem', 
              fontFamily: 'Montserrat, sans-serif' 
            }}>
              Thank You!
            </h3>
            <p style={{ 
              color: '#666', 
              fontSize: '1rem', 
              fontFamily: 'Montserrat, sans-serif' 
            }}>
              Your enquiry has been submitted successfully. We'll contact you soon.
            </p>
          </PopupContainer>
        </PopupOverlay>
      )}
    </>
  );
};

export default PopupEnquiryForm;