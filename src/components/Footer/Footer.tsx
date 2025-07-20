import React from 'react';
import styled from 'styled-components';
import { contactInfo } from '../../data/portfolioData';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 3rem 0 1rem;
  overflow: hidden;
  width: 100%;
`;

const FooterContent = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  color: var(--main-color);
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  a {
    width: 45px;
    height: 45px;
    background: var(--main-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    font-size: 1.2rem;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 120, 255, 0.3);
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  
  i {
    color: var(--main-color);
    font-size: 1.1rem;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #444;
  padding-top: 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterTitle>{contactInfo.name}</FooterTitle>
          <FooterDescription>
            Full Stack Developer specializing in modern web development and creating exceptional digital experiences.
            Let's work together to bring your ideas to life.
          </FooterDescription>
          
          <SocialLinks>
            <a href={contactInfo.socialLinks.facebook} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={contactInfo.socialLinks.instagram} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={contactInfo.socialLinks.twitter} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={contactInfo.socialLinks.linkedin} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </SocialLinks>
          
          <ContactInfo>
            <ContactItem>
              <i className="fas fa-envelope"></i>
              <span>{contactInfo.email}</span>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-phone"></i>
              <span>{contactInfo.phone}</span>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-map-marker-alt"></i>
              <span>{contactInfo.address}</span>
            </ContactItem>
          </ContactInfo>
        </FooterContent>
        
        <Copyright>
          <p>&copy; {currentYear} {contactInfo.name}. All rights reserved.</p>
          <p>Designed & Developed with ❤️ using React & TypeScript</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer; 