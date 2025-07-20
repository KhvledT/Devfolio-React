import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const AboutSection = styled.section`
  background-color: var(--bg-main);
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

const Card = styled(motion.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  border: none;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
  }
`;

const CardBody = styled.div`
  padding: 2.5rem;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  max-width: 200px;
  border: 4px solid #fff;
  box-shadow: var(--shadow-medium);
  transition: var(--transition);
  border-radius: 15px;
  
  @media (max-width: 768px) {
    max-width: 150px;
    border-width: 3px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const InfoItem = styled.div`
  margin-bottom: 0.75rem;
  
  strong {
    color: var(--main-color);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillsTitle = styled.h3`
  color: var(--main-color);
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span:first-child {
    font-weight: 600;
    color: #495057;
    font-size: 0.875rem;
  }
  
  span:last-child {
    font-weight: 700;
    color: var(--main-color);
    font-size: 0.875rem;
  }
  
  @media (max-width: 768px) {
    span:first-child,
    span:last-child {
      font-size: 0.8rem;
    }
  }
`;

const ProgressContainer = styled.div`
  height: 12px;
  border-radius: 10px;
  background-color: #e9ecef;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 10px;
  }
`;

const ProgressBar = styled(motion.div)<{ $percentage: number }>`
  height: 100%;
  background: linear-gradient(90deg, var(--main-color), #0056b3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const AboutText = styled.div`
  h2 {
    color: var(--main-color);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 70px;
      height: 3px;
      background: linear-gradient(90deg, var(--main-color), #0056b3);
      border-radius: 2px;
    }
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "-100px 0px -100px 0px"
  });

  return (
    <AboutSection id="about" ref={ref}>
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="row g-4">
          {/* Left Card - Personal Info & Skills */}
          <div className="col-lg-6">
            <Card
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <CardBody>
                {/* Personal Info Section */}
                <div className="row mb-4">
                  <div className="col-lg-6 text-center mb-3 mb-lg-0">
                    <ProfileImage 
                      src={personalInfo.image} 
                      alt={`Portrait of ${personalInfo.name}`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/imgs/hero-bg.jpg'; // fallback image
                      }}
                    />
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <InfoItem>
                      <strong>Name:</strong> {personalInfo.name}
                    </InfoItem>
                    <InfoItem>
                      <strong>Profile:</strong> {personalInfo.profile}
                    </InfoItem>
                    <InfoItem>
                      <strong>Email:</strong> {personalInfo.email}
                    </InfoItem>
                    <InfoItem>
                      <strong>Phone:</strong> {personalInfo.phone}
                    </InfoItem>
                  </div>
                </div>
                
                {/* Skills Section */}
                <div className="mt-4">
                  <SkillsTitle>Skills</SkillsTitle>
                  
                  {personalInfo.skills.map((skill, index) => (
                    <SkillItem key={skill.name}>
                      <SkillHeader>
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </SkillHeader>
                      <ProgressContainer>
                        <ProgressBar
                          $percentage={skill.percentage}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            ease: "easeOut"
                          }}
                        />
                      </ProgressContainer>
                    </SkillItem>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
          
          {/* Right Card - About Me */}
          <div className="col-lg-6">
            <Card
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              <CardBody className="d-flex flex-column justify-content-center">
                <AboutText>
                  <h2>About Me</h2>
                  {personalInfo.about.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </AboutText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About; 