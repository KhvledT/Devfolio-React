import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { services } from '../../data/portfolioData';

const ServicesSection = styled.section`
  background-color: var(--bg-second);
  padding: 5rem 0;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background: linear-gradient(90deg, var(--main-color), #0056b3);
    border-radius: 2px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  border: none;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  height: 100%;
  padding: 2.5rem;
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--main-color), #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  transition: var(--transition);
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  color: var(--main-color);
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "-100px 0px -100px 0px"
  });

  return (
    <ServicesSection id="services" ref={ref}>
      <div className="container">
        <SectionTitle>Services</SectionTitle>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <ServiceCard
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ServiceIcon>
                  <i className={service.icon}></i>
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            </div>
          ))}
        </div>
      </div>
    </ServicesSection>
  );
};

export default Services; 