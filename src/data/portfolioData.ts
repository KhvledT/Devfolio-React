import type { PersonalInfo, Service, Project, BlogPost, Testimonial, ContactInfo } from '../types/index';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Morgan Freeman",
  profile: "Full Stack Developer",
  email: "contact@example.com",
  phone: "(617) 557-0089",
  image: "/imgs/testimonial-2.jpg",
  about: [
    "I am a full stack developer specializing in modern web development. I have extensive experience working with the latest technologies and contemporary development methodologies.",
    "I work on providing innovative and advanced solutions that meet client needs and exceed their expectations. I believe in the importance of quality and efficiency in every project I work on.",
    "I continue to develop my skills and learn new technologies to ensure providing the best services to my clients and keeping up with the rapid developments in web development."
  ],
  skills: [
    { name: "HTML", percentage: 85 },
    { name: "CSS3", percentage: 75 },
    { name: "PHP", percentage: 50 },
    { name: "JavaScript", percentage: 90 }
  ]
};

// Services
export const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Design modern and attractive websites that meet client needs and provide an excellent user experience across all devices.",
    icon: "fa-solid fa-briefcase"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Develop advanced web applications using the latest technologies and best practices in programming.",
    icon: "fa-solid fa-list-check"
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Analyze website data and optimize performance to ensure the best results and improve user experience.",
    icon: "fa-solid fa-chart-column"
  },
  {
    id: 4,
    title: "Technical Consulting",
    description: "Provide specialized technical consulting to help companies choose the best technical solutions for their projects.",
    icon: "fa-solid fa-binoculars"
  },
  {
    id: 5,
    title: "Performance Optimization",
    description: "Optimize website speed and performance to ensure a smooth and fast user experience.",
    icon: "fa-regular fa-sun"
  },
  {
    id: 6,
    title: "Website Maintenance",
    description: "Regular maintenance services and continuous updates to ensure the website operates at high efficiency.",
    icon: "fa-regular fa-calendar"
  }
];

// Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Tech Company Website Design",
    category: "Web Design",
    image: "/imgs/work-1.jpg",
    date: "18 Sep. 2023"
  },
  {
    id: 2,
    title: "Interactive Web Application",
    category: "Web Development",
    image: "/imgs/work-2.jpg",
    date: "15 Sep. 2023"
  },
  {
    id: 3,
    title: "Complete E-commerce Store",
    category: "Web Development",
    image: "/imgs/work-3.jpg",
    date: "12 Sep. 2023"
  },
  {
    id: 4,
    title: "Mobile Application",
    category: "App Development",
    image: "/imgs/work-4.jpg",
    date: "10 Sep. 2023"
  },
  {
    id: 5,
    title: "Content Management System",
    category: "Web Development",
    image: "/imgs/work-5.jpg",
    date: "8 Sep. 2023"
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "Web Development",
    image: "/imgs/work-6.jpg",
    date: "5 Sep. 2023"
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Best Travel Apps for Developers",
    category: "Travel",
    image: "/imgs/post-1.jpg",
    excerpt: "Discover the best applications and technologies that help developers travel and work remotely with high efficiency.",
    author: "Morgan Freeman",
    readTime: "10 min",
    date: "2023-09-18"
  },
  {
    id: 2,
    title: "Latest Web Design Trends 2024",
    category: "Web Design",
    image: "/imgs/post-2.jpg",
    excerpt: "Learn about the latest trends and technologies in web design for 2024.",
    author: "Morgan Freeman",
    readTime: "15 min",
    date: "2023-09-15"
  },
  {
    id: 3,
    title: "Best Framework for Web Development",
    category: "Web Development",
    image: "/imgs/post-3.jpg",
    excerpt: "Comprehensive comparison between the best frameworks used in modern web development.",
    author: "Morgan Freeman",
    readTime: "20 min",
    date: "2023-09-12"
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Xavi Alonso",
    image: "/imgs/testimonial-2.jpg",
    content: "Excellent work and high quality in development. Morgan is a professional developer and specialist in his field. I highly recommend working with him."
  },
  {
    id: 2,
    name: "Marta Socrate",
    image: "/imgs/testimonial-4.jpeg",
    content: "Amazing experience working with Morgan. He delivered a fantastic website that exceeded our expectations. I will definitely work with him again."
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  name: "Morgan Freeman",
  email: "contact@example.com",
  phone: "(617) 557-0089",
  address: "329 WASHINGTON ST BOSTON, MA 02108",
  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#"
  }
};

// Statistics
export const statistics = [
  { number: 450, label: "COMPLETED PROJECTS", icon: "fa-solid fa-check" },
  { number: 25, label: "YEARS OF EXPERIENCE", icon: "fa-solid fa-receipt" },
  { number: 550, label: "TOTAL CLIENTS", icon: "fa-solid fa-users" },
  { number: 48, label: "AWARDS WON", icon: "fa-solid fa-medal" }
]; 