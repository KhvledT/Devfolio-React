import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { contactInfo, statistics } from '../../data/portfolioData';

const ContactSection = styled.section`
  background-color: var(--bg-main);
  padding: 5rem 0;
  overflow: hidden;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 3rem;
  position: relative;
  
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

const StatsSection = styled.div`
  background: linear-gradient(120deg, rgba(0,120,255,0.5) 60%, #0056b3 100%), url('/imgs/Carousel-bg.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-color: #0078FF;
  padding: 3rem 0;
  margin-bottom: 4rem;
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 32px 0 rgba(0, 120, 255, 0.15);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(120deg, rgba(0,120,255,0.5) 60%, #0056b3 100%);
      opacity: 0.5;
      z-index: 1;
      border-radius: 15px;
  }
  > .row {
      position: relative;
      z-index: 2;
  }
  @media (max-width: 768px) {
      background-attachment: scroll;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 2rem 0;
      margin-bottom: 2rem;
  }
  @media (min-width: 769px) and (max-width: 1400px) {
      background-size: cover;
      background-repeat: no-repeat;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: var(--shadow-light);
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  
  h3 {
    color: var(--main-color);
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
  }
  
  form {
    width: 100%;
    
    .row {
      margin-left: -0.75rem;
      margin-right: -0.75rem;
      
      .col-md-6 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  i {
    width: 50px;
    height: 50px;
    background: var(--main-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  h4 {
    color: var(--main-color);
    font-weight: 700;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: var(--text-secondary);
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    width: 40px;
    height: 40px;
    background: var(--main-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    text-decoration: none;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 120, 255, 0.3);
    }
    
    i {
      font-size: 1.1rem;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--main-color);
  font-weight: 600;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: white;
  color: var(--text-primary);
  transition: var(--transition);
  box-sizing: border-box;
  
  &::placeholder {
    color: #999;
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    border-color: var(--main-color);
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    background-color: white;
  }
  
  &:hover {
    border-color: var(--main-color);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: var(--transition);
  background-color: white;
  color: var(--text-primary);
  box-sizing: border-box;
  
  &::placeholder {
    color: #999;
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    border-color: var(--main-color);
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1);
    background-color: white;
  }
  
  &:hover {
    border-color: var(--main-color);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--main-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  font-family: inherit;
  
  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 120, 255, 0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.3);
  }
`;

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "-100px 0px -100px 0px"
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        
        <StatsSection>
          <div className="row g-4">
            {statistics.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <StatItem
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <StatNumber>
                    <i className={stat.icon} style={{ marginRight: '0.5rem' }}></i>
                    {stat.number}+
                  </StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              </div>
            ))}
          </div>
        </StatsSection>
        
        <div className="row g-4">
          <div className="col-lg-8">
            <ContactCard
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </FormGroup>
                  </div>
                </div>
                <FormGroup>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit">
                  Send Message
                </SubmitButton>
              </form>
            </ContactCard>
          </div>
          
          <div className="col-lg-4">
            <ContactCard
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              <h3>Get In Touch</h3>
              <ContactInfoItem>
                <i className="fas fa-user"></i>
                <ContactText>
                  <h4>Name</h4>
                  <p>{contactInfo.name}</p>
                </ContactText>
              </ContactInfoItem>
              <ContactInfoItem>
                <i className="fas fa-envelope"></i>
                <ContactText>
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </ContactText>
              </ContactInfoItem>
              <ContactInfoItem>
                <i className="fas fa-phone"></i>
                <ContactText>
                  <h4>Phone</h4>
                  <p>{contactInfo.phone}</p>
                </ContactText>
              </ContactInfoItem>
              <ContactInfoItem>
                <i className="fas fa-map-marker-alt"></i>
                <ContactText>
                  <h4>Address</h4>
                  <p>{contactInfo.address}</p>
                </ContactText>
              </ContactInfoItem>
              
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
            </ContactCard>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact; 