import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { NavItem } from '../../types/index';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  width: 100%;
  overflow: visible;
`;

const Nav = styled.nav`
  padding: 1rem 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavBrand = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  flex-shrink: 0;
  z-index: 2;
  
  &:hover {
    color: var(--main-color);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  right: 0;
  left: auto;
  transform: none;
  justify-content: flex-end;
  
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: var(--transition);
  position: relative;
  font-weight: 500;
  white-space: nowrap;
  
  &:hover {
    color: var(--main-color);
    background: rgba(255, 255, 255, 0.1);
  }
  
  ${props => props.$isActive && `
    color: var(--main-color) !important;
    background: rgba(0, 120, 255, 0.1) !important;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background-color: var(--main-color);
      border-radius: 1px;
    }
  `}
`;

const NavbarToggler = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  padding: 0.5rem;
  border-radius: 4px;
  transition: var(--transition);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 991.98px) {
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
  position: relative;
  
  @media (max-width: 991.98px) {
    position: static;
  }
`;

const NavbarCollapse = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 991.98px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    min-width: 200px;
    transform-origin: top;
    animation: ${props => props.$isOpen ? 'slideDown' : 'slideUp'} 0.3s ease-out;
    
    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-20px) scaleY(0.8);
      }
      50% {
        opacity: 0.8;
        transform: translateY(-5px) scaleY(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scaleY(1);
      }
    }
    
    @keyframes slideUp {
      0% {
        opacity: 1;
        transform: translateY(0) scaleY(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px) scaleY(0.8);
      }
    }
    
    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      a {
        color: white;
        text-decoration: none;
        padding: 0.75rem 1rem;
        border-radius: 4px;
        transition: var(--transition);
        font-weight: 500;
        position: relative;
        display: block;
        opacity: 0;
        animation: ${props => props.$isOpen ? 'fadeInUp' : 'none'} 0.4s ease-out forwards;
        
        &:nth-child(1) { animation-delay: 0.1s; }
        &:nth-child(2) { animation-delay: 0.15s; }
        &:nth-child(3) { animation-delay: 0.2s; }
        &:nth-child(4) { animation-delay: 0.25s; }
        &:nth-child(5) { animation-delay: 0.3s; }
        &:nth-child(6) { animation-delay: 0.35s; }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        &:hover {
          color: var(--main-color);
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
        }
        
        &.active {
          color: var(--main-color);
          background: rgba(0, 120, 255, 0.1);
          font-weight: 600;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--main-color);
            border-radius: 1px;
            animation: slideIn 0.3s ease-out;
          }
          
          @keyframes slideIn {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--main-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1001;
  
  &:focus {
    top: 6px;
  }
`;

const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#work' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      // Check sections in reverse order to get the most recent one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section === 'portfolio' ? 'work' : section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // If we're at the bottom of the page, set the last section as active
      if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        setActiveSection(sections[sections.length - 1]);
      }
      
      // If we're at the top, set home as active
      if (scrollPosition < 200) {
        setActiveSection('home');
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update active section immediately for better UX
      const sectionId = href.replace('#', '');
      const navItem = navigationItems.find(item => 
        item.href === href || (sectionId === 'work' && item.id === 'portfolio')
      );
      if (navItem) {
        setActiveSection(navItem.id);
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <div className="container navbar-container">
        <Nav>
          <NavBrand href="#home" onClick={() => handleNavClick('#home')}>
            DevFolio
          </NavBrand>
          
          <NavLinks>
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                href={item.href}
                $isActive={activeSection === item.id}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <MobileMenuContainer>
            <NavbarToggler onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </NavbarToggler>
            
            <NavbarCollapse $isOpen={isMenuOpen}>
              <div className="mobile-nav-links">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </NavbarCollapse>
          </MobileMenuContainer>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header; 