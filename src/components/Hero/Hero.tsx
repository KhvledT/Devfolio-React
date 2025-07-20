import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.626)), url('/imgs/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: 100%;
  overflow: hidden;
  
  /* Fallback for mobile devices */
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  width: 100%;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.div)`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: var(--main-color);
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 2.5rem;
    gap: 0.5rem;
  }
`;

const TypeAnimationStyled = styled(TypeAnimation)`
  color: var(--main-color);
  font-weight: bold;
  
  &::after {
    content: '|';
    animation: blink 1s infinite;
    color: var(--main-color);
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: var(--main-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 120, 255, 0.3);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I am Morgan Freeman
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack
          <TypeAnimationStyled
            sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
            ]}
            wrapper="span"
            speed={160}
            repeat={Infinity}
            cursor={false}
          />
        </HeroSubtitle>
        
        <CTAButton
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View My Work
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;