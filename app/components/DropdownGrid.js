import React, { useEffect } from 'react';
import Image from 'next/image';
import { animate, stagger } from 'motion';

const DropdownGrid = () => {
  const sites = [
    { 
      name: 'Migration Station', 
      url: 'https://migrationstation-yv8v.onrender.com',
      description: 'Vacation rental clone using: Express, SQL, React, Redux',
      image: '/migration_station.png'
    },
    {
      name: 'Lovely Paws',
      url: 'https://lovely-paws-hotel-grvv.onrender.com',
      description: 'Pet boarding and services using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/lovely_paws.png'
    },
    {
      name: 'Guide Finder',
      url: 'https://guide-finder.onrender.com/',
      description: 'Helping people achieve access to outdoor adventures using: Python, Flask, SQLAlchemy, Docker, Redux Toolkit',
      image: '/guide_finder.png' 
    },
    {
      name: 'Project 4',
      url: 'https://example.com/project4',
      description: 'Description for Project 4',
      image: '/aw_nobg.png' 
    },
  ];

  useEffect(() => {
    animate(
      ".card",
      { y: 0, opacity: 1 },
      { delay: stagger(0.1) }
    );
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {sites.map((site, index) => (
        <div key={index} className="card border p-4 rounded-lg hover:bg-[#708070] flex flex-col items-center group">
          <div className="flex justify-center items-center mb-4">
            <Image
              src={site.image}
              alt={site.name}
              width={200}
              height={150}
              className="rounded-t-lg"
            />
          </div>
          <h3 className="font-bold mb-2 text-center">{site.name}</h3>
          <p className="mb-4 text-center">{site.description}</p>
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-[#708070] group-hover:text-black hover:underline">
            Visit Site
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropdownGrid;