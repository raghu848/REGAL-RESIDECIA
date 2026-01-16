import React from 'react';
import styled from 'styled-components';

const DownloadButton = styled.a`
  background: transparent;
  color: #D4AF37;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: 2px solid #D4AF37;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    background: #D4AF37;
    color: #0F172A;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
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
    
    try {
      // Fetch the text file content
      const response = await fetch('/brochures/regal-residencia-brochure.txt');
      const textContent = await response.text();
      
      // Create a blob with the content
      const blob = new Blob([textContent], { type: 'text/plain' });
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'regal-residencia-brochure.txt';
      
      // Trigger the download
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading brochure:', error);
      
      // Fallback to direct link if fetch fails
      window.location.href = '/brochures/regal-residencia-brochure.txt';
    }
  };
  
  return (
    <DownloadButton 
      onClick={handleDownload}
      href="#"
      className={className}
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