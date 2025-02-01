import { useState, useEffect } from 'react';
import Image from 'next/image';
import { animate } from 'framer-motion';
import ProjectModal from './ProjectModal';

const DropdownGrid = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const sites = [
    { 
      name: 'GUIDE FINDER', 
      url: 'https://guide-finder.onrender.com/',
      description: 'Helping people achieve access to outdoor adventures.',
      image: '/guide_finder.png',
      tools: ['Python', 'Flask', 'SQLAlchemy', 'Docker', 'Redux Toolkit'],
      details: [
        'Created an advanced search and filtering system using React, Flask, and PostgreSQL, allowing users to refine outdoor guides by activity type, location, and skill level.',
        'Optimized backend API performance with SQLAlchemy and Flask-SQLAlchemy, reducing query times and ensuring smooth data retrieval for a responsive UI.',
        'Integrated secure authentication with Flask and bcrypt, ensuring protected user access.'
      ]
    },
    {
      name: 'Mortgage Calculator',
      url: 'https://mortgage-calculator-beige-nine.vercel.app/',
      description: 'Multi-functional mortgage calculator.',
      image: '/mortgage_calculator.png',
      tools: ['Next.js', 'Tailwind CSS'],
      details: [
        'Built a real-time mortgage calculator with Next.js, dynamically updating calculations based on user input.',
        'Designed a detailed amortization table using JavaScript array mapping, providing users with precise breakdowns of payments.',
        'Styled the interface with Tailwind CSS, achieving a modern, minimalist design with a clean user experience.'
      ]
    },
    {
      name: 'LOVELY PAWS',
      url: 'https://lovely-paws-hotel-grvv.onrender.com',
      description: 'Pet boarding and services',
      image: '/lovely_paws.png',
      tools: ['Python', 'Flask', 'SQLAlchemy', 'Docker', 'Redux Toolkit'],
      details: [
        'Developed a mobile-responsive UI with CSS media queries, ensuring smooth navigation across all screen sizes.',
        'Built a RESTful Flask API with SQLAlchemy, enabling seamless pet boarding reservation management with efficient relational data queries.',
        'Containerized the application with Docker, standardizing development and deployment environments for reliability across multiple servers.'
      ]
    },
    { 
      name: 'MIGRATION STATION', 
      url: 'https://migrationstation-yv8v.onrender.com',
      description: 'Vacation rental clone.',
      image: '/migration_station.png',
      tools: ['Express', 'SQL', 'React', 'Redux'],
      details: [
        'Engineered a dynamic property listing and booking system with React and Express.js, enabling real-time updates and intuitive user interactions.',
        'Implemented session-based authentication using cookies, maintaining secure and persistent user sessions without exposing credentials.',
        'Optimized database queries using Sequelize with PostgreSQL, reducing response times for search and booking functionality, ensuring scalability as listings grow.'
      ]
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
      animate(element, { scale: [0.4, 1] }, { ease: "circInOut", duration: 1.2 });
    });
  }, []);

  const handleCardClick = (site) => {
    setSelectedSite(site);
  };

  const handleCloseModal = () => {
    setSelectedSite(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {sites.map((site, index) => (
        <div 
          key={index} 
          className="card p-6 rounded-lg bg-white transition-transform duration-300 transform hover:scale-105 flex flex-col items-center group" 
          style={{ 
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white'; 
          }}
          onClick={() => handleCardClick(site)}
        >
          <Image src={site.image} alt={site.name} width={200} height={200} />
          <h3 className="mt-2 text-xl font-medium text-[var(--dark-green)]">{site.name}</h3>
          <ul className="mt-2 list-disc list-inside text-[var(--dark-eucalyptus)]">
            {site.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
      {selectedSite && <ProjectModal site={selectedSite} onClose={handleCloseModal} />}
    </div>
  );
};

export default DropdownGrid;