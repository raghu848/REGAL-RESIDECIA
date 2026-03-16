import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  background-color: var(--primary-dark);
  min-height: 100vh;
  padding-top: 120px; /* Space for navbar */
  padding-bottom: 4rem;
  color: var(--text-light);
`;

const ContentWrapper = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PolicyHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  color: var(--text-light);
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.div`
  width: 80px;
  height: 4px;
  background: var(--accent-gold);
  margin: 1.5rem auto;
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(212, 175, 55, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  color: var(--accent-gold);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: var(--accent-gold);
  }
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 1.5rem;

  strong {
    color: var(--text-light);
    font-weight: 600;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-muted);
  line-height: 1.6;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent-gold);
    font-weight: bold;
  }
`;

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PolicyHeader>
          <Title>Privacy Policy</Title>
          <Subtitle />
        </PolicyHeader>

        <Section>
          <Text>
            <strong>Regal Residencia</strong> is committed to protecting the privacy and accuracy of the information shared on this website. All information published here is provided with the knowledge of the owners, and appropriate measures are taken to ensure that user information is protected from misuse, loss, or unauthorized access within the Regal Residencia environment.
          </Text>
          <Text>
            While every effort has been made to ensure the accuracy of the information available on this website, Regal Residencia shall not be held responsible for any loss or damage that may arise from reliance on the information provided.
          </Text>
        </Section>

        <Section>
          <SectionTitle>What This Privacy Policy Covers</SectionTitle>
          <Text>
            This Privacy Policy explains how we collect, use, and safeguard personally identifiable information shared by users through this website.
          </Text>
          <Text>
            The policy applies to information submitted through enquiry forms, contact forms, or any digital platform owned and operated by Regal Residencia. However, it does not apply to organizations or individuals that are not owned, controlled, or managed by Regal Residencia. It also does not apply where information is required to be disclosed under applicable law, court order, or government authority.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Information Collection and Use</SectionTitle>
          <Text>
            We may collect personal information such as your name, email address, phone number, and other details when you submit an enquiry form or interact with our website.
          </Text>
          <Text>
            This information is collected to respond to your queries, provide details about the project, maintain records, and communicate relevant updates, offers, or services related to Regal Residencia.
          </Text>
          <Text>
            By using this website, you consent to the collection and use of information in accordance with this Privacy Policy.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Disclosure</SectionTitle>
          <Text>
            Regal Residencia may disclose personal information if required to comply with legal obligations, regulations, or lawful requests from authorities. Such disclosure may also occur to protect the safety of individuals, prevent fraud, address security concerns, or safeguard the rights of Regal Residencia and its users.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Third-Party Links</SectionTitle>
          <Text>
            This website may contain links to third-party websites or applications. Regal Residencia is not responsible for the privacy practices or content of such external platforms, and users are advised to review their respective privacy policies.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Information Sharing</SectionTitle>
          <Text>
            Regal Residencia does not sell, rent, or share personally identifiable information provided by users through this website with third parties.
          </Text>
          <Text>
            The content, design, graphics, and logos on this website are the exclusive property of Regal Residencia. No person may copy, reproduce, distribute, or use any material from this website without prior written permission.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Updates to This Policy</SectionTitle>
          <Text>
            Regal Residencia reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page.
          </Text>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPolicy;
