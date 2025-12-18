import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LivingSpacesSection = styled.section`
  padding: 1rem 2;
  background-color: var(--secondary-dark);
  
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
`;

const SpacesTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TabButton = styled.button`
  background: transparent;
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: var(--text-light);
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  border-radius: 4px;
  
  &.active, &:hover {
    background: var(--accent-gold);
    color: var(--primary-dark);
    border-color: var(--accent-gold);
  }
  
  @media (max-width: 1200px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 992px) {
    padding: 0.65rem 1.15rem;
    font-size: 0.92rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.45rem 0.75rem;
    font-size: 0.78rem;
  }
  
  @media (max-width: 400px) {
    padding: 0.4rem 0.7rem;
    font-size: 0.75rem;
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    padding: 0.65rem 1.05rem;
    font-size: 0.92rem;
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    padding: 0.68rem 1.08rem;
    font-size: 0.94rem;
  }
`;

const SpacesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
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
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.9rem;
  }
  
  @media (max-width: 400px) {
    gap: 0.8rem;
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

const SpaceImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    border-radius: 10px;
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 992px) {
    border-radius: 9px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 576px) {
    border-radius: 7px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 480px) {
    border-radius: 6.5px;
    box-shadow: 0 11px 22px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 400px) {
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    border-radius: 8.2px;
    box-shadow: 0 14.5px 29px rgba(0, 0, 0, 0.3);
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    border-radius: 8.5px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const SpaceDetails = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
  }
  
  .space-specs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .spec-item {
    background: rgba(212, 175, 55, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .spec-value {
    color: var(--accent-gold);
    font-weight: 600;
  }
  
  p {
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 2rem;
  }
  
  .space-features {
    margin-top: 2rem;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
  }
  
  .feature-item::before {
    content: "✓";
    color: var(--accent-gold);
    font-weight: bold;
  }
  
  .room-details {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .room-details h4 {
    color: var(--accent-gold);
    margin-bottom: 1rem;
  }
  
  .rooms-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .room-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
  }
  
  .room-item h5 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  .room-item p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-muted);
  }
  
  .floor-plans {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .floor-plans h4 {
    color: var(--accent-gold);
    margin-bottom: 1rem;
  }
  
  .plan-options {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .plan-option {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    min-width: 120px;
  }
  
  .plan-option h5 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
  }
  
  .plan-option p {
    margin: 0;
    font-size: 0.9rem;
  }
  
  /* Responsive design for all resolutions */
  @media (max-width: 1200px) {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.3rem;
    }
    
    .space-specs {
      gap: 0.9rem;
      margin-bottom: 1.8rem;
    }
    
    .spec-item {
      padding: 0.45rem 0.9rem;
      font-size: 0.85rem;
    }
    
    p {
      margin-bottom: 1.8rem;
    }
    
    .space-features {
      margin-top: 1.8rem;
    }
    
    .features-grid {
      gap: 0.9rem;
    }
    
    .room-details {
      margin-top: 1.8rem;
      padding-top: 1.8rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.9rem;
    }
    
    .rooms-grid {
      gap: 0.9rem;
    }
    
    .room-item {
      padding: 0.9rem;
    }
    
    .room-item h5 {
      font-size: 0.95rem;
    }
    
    .room-item p {
      font-size: 0.85rem;
    }
    
    .floor-plans {
      margin-top: 1.8rem;
      padding-top: 1.8rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.9rem;
    }
    
    .plan-options {
      gap: 0.9rem;
    }
    
    .plan-option {
      padding: 0.9rem;
      min-width: 110px;
    }
    
    .plan-option p {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 992px) {
    h3 {
      font-size: 1.7rem;
      margin-bottom: 1.2rem;
    }
    
    .space-specs {
      gap: 0.8rem;
      margin-bottom: 1.6rem;
    }
    
    .spec-item {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
    
    p {
      margin-bottom: 1.6rem;
    }
    
    .space-features {
      margin-top: 1.6rem;
    }
    
    .features-grid {
      gap: 0.8rem;
    }
    
    .room-details {
      margin-top: 1.6rem;
      padding-top: 1.6rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.8rem;
    }
    
    .rooms-grid {
      gap: 0.8rem;
    }
    
    .room-item {
      padding: 0.8rem;
    }
    
    .room-item h5 {
      font-size: 0.9rem;
    }
    
    .room-item p {
      font-size: 0.8rem;
    }
    
    .floor-plans {
      margin-top: 1.6rem;
      padding-top: 1.6rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.8rem;
    }
    
    .plan-options {
      gap: 0.8rem;
    }
    
    .plan-option {
      padding: 0.8rem;
      min-width: 100px;
    }
    
    .plan-option p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1.1rem;
    }
    
    .space-specs {
      gap: 0.7rem;
      margin-bottom: 1.4rem;
    }
    
    .spec-item {
      padding: 0.35rem 0.7rem;
      font-size: 0.75rem;
    }
    
    p {
      margin-bottom: 1.4rem;
    }
    
    .space-features {
      margin-top: 1.4rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
    
    .room-details {
      margin-top: 1.4rem;
      padding-top: 1.4rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.7rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.7rem;
    }
    
    .room-item {
      padding: 0.7rem;
    }
    
    .room-item h5 {
      font-size: 0.85rem;
    }
    
    .room-item p {
      font-size: 0.75rem;
    }
    
    .floor-plans {
      margin-top: 1.4rem;
      padding-top: 1.4rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.7rem;
    }
    
    .plan-options {
      gap: 0.7rem;
    }
    
    .plan-option {
      padding: 0.7rem;
      min-width: 90px;
    }
    
    .plan-option p {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 576px) {
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    .space-specs {
      gap: 0.6rem;
      margin-bottom: 1.2rem;
    }
    
    .spec-item {
      padding: 0.3rem 0.6rem;
      font-size: 0.7rem;
    }
    
    p {
      margin-bottom: 1.2rem;
    }
    
    .space-features {
      margin-top: 1.2rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }
    
    .room-details {
      margin-top: 1.2rem;
      padding-top: 1.2rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.6rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }
    
    .room-item {
      padding: 0.6rem;
    }
    
    .room-item h5 {
      font-size: 0.8rem;
    }
    
    .room-item p {
      font-size: 0.7rem;
    }
    
    .floor-plans {
      margin-top: 1.2rem;
      padding-top: 1.2rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.6rem;
    }
    
    .plan-options {
      gap: 0.6rem;
    }
    
    .plan-option {
      padding: 0.6rem;
      min-width: 80px;
    }
    
    .plan-option p {
      font-size: 0.7rem;
    }
  }
  
  @media (max-width: 480px) {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.9rem;
    }
    
    .space-specs {
      gap: 0.55rem;
      margin-bottom: 1.1rem;
    }
    
    .spec-item {
      padding: 0.28rem 0.55rem;
      font-size: 0.68rem;
    }
    
    p {
      margin-bottom: 1.1rem;
    }
    
    .space-features {
      margin-top: 1.1rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }
    
    .room-details {
      margin-top: 1.1rem;
      padding-top: 1.1rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.55rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.55rem;
    }
    
    .room-item {
      padding: 0.55rem;
    }
    
    .room-item h5 {
      font-size: 0.78rem;
    }
    
    .room-item p {
      font-size: 0.68rem;
    }
    
    .floor-plans {
      margin-top: 1.1rem;
      padding-top: 1.1rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.55rem;
    }
    
    .plan-options {
      gap: 0.55rem;
    }
    
    .plan-option {
      padding: 0.55rem;
      min-width: 75px;
    }
    
    .plan-option p {
      font-size: 0.68rem;
    }
  }
  
  @media (max-width: 400px) {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    
    .space-specs {
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .spec-item {
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    .space-features {
      margin-top: 1rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    
    .room-details {
      margin-top: 1rem;
      padding-top: 1rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.5rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    
    .room-item {
      padding: 0.5rem;
    }
    
    .room-item h5 {
      font-size: 0.75rem;
    }
    
    .room-item p {
      font-size: 0.65rem;
    }
    
    .floor-plans {
      margin-top: 1rem;
      padding-top: 1rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.5rem;
    }
    
    .plan-options {
      gap: 0.5rem;
    }
    
    .plan-option {
      padding: 0.5rem;
      min-width: 70px;
    }
    
    .plan-option p {
      font-size: 0.65rem;
    }
  }
  
  /* Additional media queries for 125% scaling */
  @media screen and (min-resolution: 120dpi) and (max-width: 768px) {
    h3 {
      font-size: 1.65rem;
      margin-bottom: 1.15rem;
    }
    
    .space-specs {
      gap: 0.72rem;
      margin-bottom: 1.45rem;
    }
    
    .spec-item {
      padding: 0.37rem 0.72rem;
      font-size: 0.77rem;
    }
    
    p {
      margin-bottom: 1.45rem;
    }
    
    .space-features {
      margin-top: 1.45rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.72rem;
    }
    
    .room-details {
      margin-top: 1.45rem;
      padding-top: 1.45rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.72rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.72rem;
    }
    
    .room-item {
      padding: 0.72rem;
    }
    
    .room-item h5 {
      font-size: 0.87rem;
    }
    
    .room-item p {
      font-size: 0.77rem;
    }
    
    .floor-plans {
      margin-top: 1.45rem;
      padding-top: 1.45rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.72rem;
    }
    
    .plan-options {
      gap: 0.72rem;
    }
    
    .plan-option {
      padding: 0.72rem;
      min-width: 92px;
    }
    
    .plan-option p {
      font-size: 0.77rem;
    }
  }
  
  @media screen and (min-resolution: 144dpi) and (max-width: 768px) {
    h3 {
      font-size: 1.7rem;
      margin-bottom: 1.2rem;
    }
    
    .space-specs {
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .spec-item {
      padding: 0.38rem 0.75rem;
      font-size: 0.8rem;
    }
    
    p {
      margin-bottom: 1.5rem;
    }
    
    .space-features {
      margin-top: 1.5rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    
    .room-details {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
    
    .room-details h4 {
      margin-bottom: 0.75rem;
    }
    
    .rooms-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    
    .room-item {
      padding: 0.75rem;
    }
    
    .room-item h5 {
      font-size: 0.88rem;
    }
    
    .room-item p {
      font-size: 0.8rem;
    }
    
    .floor-plans {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
    
    .floor-plans h4 {
      margin-bottom: 0.75rem;
    }
    
    .plan-options {
      gap: 0.75rem;
    }
    
    .plan-option {
      padding: 0.75rem;
      min-width: 95px;
    }
    
    .plan-option p {
      font-size: 0.8rem;
    }
  }
`;

const spacesData = [
  {
    id: 1,
    name: "3 BHK Luxury Apartment",
    type: "Type 1",
    area: "1450 sq.ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Spacious 3 BHK apartment with premium finishes and modern amenities. Designed for comfort and elegance with an open-concept living area and private balcony.",
    features: [
      "Master bedroom with ensuite",
      "Servant quarters",
      "Modular kitchen",
      "Premium flooring",
      "Smart home automation",
      "Central air conditioning"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" }
    ],
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "18'x14' with open concept dining",
      masterBedroom: "16'x13' with walk-in closet and ensuite",
      secondBedroom: "14'x12' with balcony access",
      thirdBedroom: "12'x11' with built-in storage",
      kitchen: "14'x10' premium modular with breakfast counter",
      servantRoom: "10'x8' with attached bathroom",
      bathrooms: "10'x8' master, 8'x6' second, 6'x5' third and servant",
      balcony: "16'x6' main balcony, 10'x4' second bedroom balcony",
      utility: "6'x5' dry yard, 8'x6' kitchen utility with storage"
    }
  },
  {
    id: 2,
    name: "3 BHK Premium Apartment",
    type: "Type 2",
    area: "1565 sq.ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80",
    description: "Luxuriously designed 3 BHK apartment with servant room. Features premium materials and thoughtful layouts for the ultimate living experience.",
    features: [
      "Spacious living area",
      "Premium kitchen appliances",
      "Walk-in closets",
      "Double-height ceilings",
      "Private balcony",
      "Energy efficient lighting"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "26/29/32/29/26", commercial: "42/Floor = 168 Shops" }
    ],
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "20'x15' with double-height ceiling",
      masterBedroom: "18'x14' with walk-in closet and luxury ensuite",
      secondBedroom: "15'x12' with balcony access",
      thirdBedroom: "13'x11' with built-in storage",
      kitchen: "16'x11' premium modular with island counter",
      servantRoom: "12'x10' with attached bathroom",
      bathrooms: "12'x9' master ensuite, 8'x7' second, 7'x6' third and servant",
      balcony: "18'x7' main balcony, 12'x5' second bedroom balcony",
      utility: "8'x6' dry yard, 10'x8' kitchen utility with pantry"
    }
  },
  {
    id: 3,
    name: "4 BHK Grand Apartment",
    type: "4 BHK",
    area: "2190 sq.ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    description: "Grand 4 BHK apartment designed for families who appreciate space and luxury. Features include a private study, entertainment area, and premium finishes throughout.",
    features: [
      "Private study room",
      "Entertainment area",
      "Premium bathroom fixtures",
      "Smart home system",
      "Wine cellar",
      "Private elevator access"
    ],
    floorPlans: [
      { option: "Option 1", podium: "1 Acre", floors: "28/28", commercial: "42/Floor = 168 Shops" },
      { option: "Option 2", podium: "1.2 Acre", floors: "28/28", commercial: "42/Floor = 168 Shops" }
    ],
    // Adding detailed unit information
    roomDetails: {
      livingRoom: "22'x18' with entertainment area",
      masterBedroom: "20'x16' with walk-in closet, private study and ensuite",
      secondBedroom: "18'x14' with balcony access",
      thirdBedroom: "16'x13' with built-in storage",
      fourthBedroom: "14'x12' with attached bathroom",
      kitchen: "20'x14' premium modular with breakfast area",
      servantRoom: "14'x12' with attached bathroom",
      bathrooms: "14'x10' master ensuite, 10'x8' second, 9'x7' third, 8'x6' fourth and servant",
      balcony: "22'x8' main balcony, 16'x6' second bedroom balcony",
      utility: "10'x8' dry yard, 12'x10' kitchen utility with wine cellar",
      study: "12'x10' private study room"
    }
  }
];

const LivingSpaces = () => {
  const [activeSpace, setActiveSpace] = React.useState(0);
  
  return (
    <LivingSpacesSection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Living Spaces</h2>
        </motion.div>
        
        <SpacesTabs>
          {spacesData.map((space, index) => (
            <TabButton
              key={space.id}
              className={activeSpace === index ? 'active' : ''}
              onClick={() => setActiveSpace(index)}
            >
              {space.name}
            </TabButton>
          ))}
        </SpacesTabs>
        
        <SpacesContent>
          <SpaceImage>
            <motion.img
              key={spacesData[activeSpace].id}
              src={spacesData[activeSpace].image}
              alt={spacesData[activeSpace].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </SpaceImage>
          
          <SpaceDetails>
            <motion.h3
              key={`title-${spacesData[activeSpace].id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {spacesData[activeSpace].name}
            </motion.h3>
            
            <motion.div
              key={`specs-${spacesData[activeSpace].id}`}
              className="space-specs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="spec-item">
                Type: <span className="spec-value">{spacesData[activeSpace].type}</span>
              </div>
              <div className="spec-item">
                Area: <span className="spec-value">{spacesData[activeSpace].area}</span>
              </div>
            </motion.div>
            
            <motion.p
              key={`desc-${spacesData[activeSpace].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {spacesData[activeSpace].description}
            </motion.p>
            
            <motion.div
              key={`features-${spacesData[activeSpace].id}`}
              className="space-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="features-grid">
                {spacesData[activeSpace].features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Adding Room Details Section */}
            <motion.div
              key={`rooms-${spacesData[activeSpace].id}`}
              className="room-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4>Room Dimensions & Details</h4>
              <div className="rooms-grid">
                {Object.entries(spacesData[activeSpace].roomDetails).map(([roomName, roomDetails], index) => (
                  <div key={index} className="room-item">
                    <h5>{roomName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                    <p>{roomDetails}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              key={`plans-${spacesData[activeSpace].id}`}
              className="floor-plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4>Floor Plan Options</h4>
              <div className="plan-options">
                {spacesData[activeSpace].floorPlans.map((plan, index) => (
                  <div key={index} className="plan-option">
                    <h5>{plan.option}</h5>
                    <p>Podium: {plan.podium}</p>
                    <p>Floors: {plan.floors}</p>
                    <p>{plan.commercial}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </SpaceDetails>
        </SpacesContent>
      </div>
    </LivingSpacesSection>
  );
};

export default LivingSpaces;