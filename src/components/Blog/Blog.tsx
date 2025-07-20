import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '../../data/portfolioData';

const BlogSection = styled.section`
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

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  height: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-heavy);
  }
`;

const BlogImage = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.1);
  }
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--main-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogTitle = styled.h3`
  color: var(--main-color);
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.85rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const BlogAuthor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--main-color);
  }
`;

const BlogStats = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  i {
    color: var(--main-color);
  }
`;

const Blog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "-100px 0px -100px 0px"
  });

  return (
    <BlogSection id="blog" ref={ref}>
      <div className="container">
        <SectionTitle>Blog</SectionTitle>
        
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <BlogCard
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <BlogImage>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/imgs/hero-bg.jpg';
                    }}
                  />
                  <BlogCategory>{post.category}</BlogCategory>
                </BlogImage>
                <BlogContent>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogMeta>
                    <BlogAuthor>
                      <i className="fas fa-user"></i>
                      {post.author}
                    </BlogAuthor>
                    <BlogStats>
                      <i className="fas fa-clock"></i>
                      {post.readTime}
                    </BlogStats>
                  </BlogMeta>
                </BlogContent>
              </BlogCard>
            </div>
          ))}
        </div>
      </div>
    </BlogSection>
  );
};

export default Blog; 