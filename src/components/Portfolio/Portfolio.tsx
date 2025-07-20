import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/portfolioData';

const PortfolioSection = styled.section`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;
    padding: 0 1rem;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      border-radius: 2px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.4rem;
    padding: 0 0.5rem;
  }
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? 'var(--main-color)' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : 'var(--main-color)'};
  border: 2px solid var(--main-color);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  white-space: nowrap;
  min-width: fit-content;
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    flex-shrink: 0;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-width: 1.5px;
  }
  
  &:hover {
    background: var(--main-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
  }
  
  @media (max-width: 768px) {
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 120, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  color: var(--main-color);
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectCategory = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ProjectDate = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin: 0;
  margin-top: auto;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioSection id="work" ref={ref}>
      <div className="container">
        <SectionTitle>Portfolio</SectionTitle>
        
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              $isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/imgs/hero-bg.jpg';
                  }}
                />
                <ProjectOverlay>
                  <i className="fas fa-external-link-alt" style={{ color: 'white', fontSize: '2rem' }}></i>
                </ProjectOverlay>
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectDate>{project.date}</ProjectDate>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </PortfolioSection>
  );
};

export default Portfolio; 