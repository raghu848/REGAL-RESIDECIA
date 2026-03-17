import React, { useEffect } from 'react';
import styled from 'styled-components';

const PolicySection = styled.section`
  background: var(--primary-dark);
  min-height: 100vh;
  padding: 120px 0 4rem;

  @media (max-width: 768px) {
    padding: 100px 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 90px 0 2rem;
  }
`;

const PolicyContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
`;

const PolicyTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', 'Poppins', serif;
  font-weight: 700;
  letter-spacing: 1px;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: var(--accent-gold);
    margin: 1rem auto 0;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(212, 175, 55, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

const PolicyContent = styled.div`
  color: var(--text-muted);
  font-family: 'Poppins', sans-serif;
  line-height: 1.8;
  font-size: 1rem;

  h2 {
    color: #e5b9a2;
    font-size: 1.5rem;
    margin: 2.5rem 0 1rem;
    font-family: 'Playfair Display', 'Poppins', serif;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #e5b9a2, #f0d0c0);
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 1.2rem;
    color: #cccccc;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;

    h2 {
      font-size: 1.3rem;
      margin: 2rem 0 0.8rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;

    h2 {
      font-size: 1.2rem;
    }
  }
`;

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PolicySection>
      <PolicyContainer>
        <PolicyTitle>Privacy Policy</PolicyTitle>
        <LastUpdated>Last Updated: March 2025</LastUpdated>

        <PolicyContent>
          <p>
            Regal Residencia is committed to protecting the privacy and accuracy of the information shared on this website. All information published here is provided with the knowledge of the owners, and appropriate measures are taken to ensure that user information is protected from misuse, loss, or unauthorized access within the Regal Residencia environment.
          </p>
          <p>
            While every effort has been made to ensure the accuracy of the information available on this website, Regal Residencia shall not be held responsible for any loss or damage that may arise from reliance on the information provided.
          </p>

          <h2>What This Privacy Policy Covers</h2>
          <p>
            This Privacy Policy explains how we collect, use, and safeguard personally identifiable information shared by users through this website.
          </p>
          <p>
            The policy applies to information submitted through enquiry forms, contact forms, or any digital platform owned and operated by Regal Residencia. However, it does not apply to organizations or individuals that are not owned, controlled, or managed by Regal Residencia. It also does not apply where information is required to be disclosed under applicable law, court order, or government authority.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and other details when you submit an enquiry form or interact with our website.
          </p>
          <p>
            This information is collected to respond to your queries, provide details about the project, maintain records, and communicate relevant updates, offers, or services related to Regal Residencia.
          </p>
          <p>
            By using this website, you consent to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2>Disclosure</h2>
          <p>
            Regal Residencia may disclose personal information if required to comply with legal obligations, regulations, or lawful requests from authorities. Such disclosure may also occur to protect the safety of individuals, prevent fraud, address security concerns, or safeguard the rights of Regal Residencia and its users.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites or applications. Regal Residencia is not responsible for the privacy practices or content of such external platforms, and users are advised to review their respective privacy policies.
          </p>

          <h2>Information Sharing</h2>
          <p>
            Regal Residencia does not sell, rent, or share personally identifiable information provided by users through this website with third parties.
          </p>
          <p>
            The content, design, graphics, and logos on this website are the exclusive property of Regal Residencia. No person may copy, reproduce, distribute, or use any material from this website without prior written permission.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            Regal Residencia reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page.
          </p>
        </PolicyContent>
      </PolicyContainer>
    </PolicySection>
  );
};

export default PrivacyPolicy;
