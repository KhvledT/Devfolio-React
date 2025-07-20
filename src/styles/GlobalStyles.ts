import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-main: #F5F5F5;
    --bg-second: #fff;
    --main-color: #0078FF;
    --text-primary: #333;
    --text-secondary: #6c757d;
    --border-color: #e9ecef;
    --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 5px 20px rgba(0, 0, 0, 0.15);
    --shadow-heavy: 0 10px 30px rgba(0, 0, 0, 0.2);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-main);
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .container {
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Accessibility */
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Focus styles for better accessibility */
  a:focus,
  button:focus,
  input:focus,
  textarea:focus {
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
  }

  /* Skip to main content link */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--main-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-main);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0056b3;
  }

  /* Utility classes */
  .text-primary {
    color: var(--main-color) !important;
  }

  .bg-primary {
    background-color: var(--main-color) !important;
  }

  .shadow-light {
    box-shadow: var(--shadow-light);
  }

  .shadow-medium {
    box-shadow: var(--shadow-medium);
  }

  .shadow-heavy {
    box-shadow: var(--shadow-heavy);
  }

  .transition {
    transition: var(--transition);
  }

  /* Bootstrap overrides */
  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12,
  .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12,
  .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12,
  .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12,
  .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {
    padding-left: 15px;
    padding-right: 15px;
  }

  /* Fix for any potential white space issues */
  section, div, main, header, footer {
    max-width: 100vw;
  }

  /* Ensure no horizontal scroll */
  body, html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* Navigation specific styles */
  .navbar-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    color: white !important;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: var(--transition);
    font-weight: 500;
    
    &:hover {
      color: var(--main-color) !important;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  /* Form styles override */
  input, textarea, select {
    font-family: inherit !important;
    box-sizing: border-box !important;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="number"],
  input[type="tel"],
  input[type="url"],
  textarea {
    background-color: white !important;
    color: var(--text-primary) !important;
    border: 2px solid var(--border-color) !important;
    border-radius: 8px !important;
    padding: 1rem !important;
    font-size: 1rem !important;
    transition: var(--transition) !important;
    
    &:focus {
      outline: none !important;
      border-color: var(--main-color) !important;
      box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.1) !important;
      background-color: white !important;
    }
    
    &::placeholder {
      color: #999 !important;
      opacity: 1 !important;
    }
  }

  /* Animation keyframes */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  /* Animation classes */
  .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .fade-in-left {
    animation: fadeInLeft 0.6s ease-out;
  }

  .fade-in-right {
    animation: fadeInRight 0.6s ease-out;
  }
`; 