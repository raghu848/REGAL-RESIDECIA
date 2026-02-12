import React from 'react';
import styled from 'styled-components';
import { trackDownload, trackEvent } from '../services/analytics';

const DownloadButton = styled.a`
  background: linear-gradient(135deg, #D4AF37 0%, #F4E5A4 100%);
  color: #0F172A;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: 2px solid #D4AF37;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #F4E5A4 0%, #D4AF37 100%);
    color: #0F172A;
    text-decoration: none;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
    border-color: #e5b9a2;
  }
  
  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
`;

const DownloadIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

const DownloadBrochureButton = ({ className, variant = 'default' }) => {
  const handleDownload = async (e) => {
    e.preventDefault();
    
    // Track download initiation
    trackEvent('click_download', 'engagement', 'brochure_download');
    
    try {
      // Try to download the HTML version first as it's more informative
      const response = await fetch('/brochures/regal-residencia-brochure.html');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const htmlContent = await response.text();
      
      // Create a blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Regal-Residencia-Brochure.html';
      
      // Trigger the download
      document.body.appendChild(a);
      a.click();
      
      // Track successful download
      trackDownload('Regal-Residencia-Brochure.html');
      
      // Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading HTML brochure:', error);
      
      try {
        // Fallback to TXT version
        const response = await fetch('/brochures/regal-residencia-brochure.txt');
        const textContent = await response.text();
        
        // Create a blob with the content
        const blob = new Blob([textContent], { type: 'text/plain' });
        
        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Regal-Residencia-Brochure.txt';
        
        // Trigger the download
        document.body.appendChild(a);
        a.click();
        
        // Track successful download
        trackDownload('Regal-Residencia-Brochure.txt');
        
        // Cleanup
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (txtError) {
        console.error('Error downloading TXT brochure:', txtError);
        
        // Final fallback - redirect to the file directly
        window.open('/brochures/regal-residencia-brochure.html', '_blank');
        
        // Track successful download
        trackDownload('Regal-Residencia-Brochure.html_redirect');
      }
    }
  };
  
  return (
    <DownloadButton 
      onClick={handleDownload}
      href="#"
      className={`download-btn ${className || ''}`.trim()}
      title="Download our project brochure"
    >
      <DownloadIcon viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </DownloadIcon>
      Download Brochure
    </DownloadButton>
  );
};

export default DownloadBrochureButton;