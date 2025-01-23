import React from 'react';

const DropdownGrid = () => {
  const sites = [
    { name: 'Project 1', url: 'https://example.com/project1' },
    { name: 'Project 2', url: 'https://example.com/project2' },
    { name: 'Project 3', url: 'https://example.com/project3' },
    { name: 'Project 4', url: 'https://example.com/project4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {sites.map((site, index) => (
        <div key={index} className="border p-4 rounded-lg hover:bg-gray-100">
          <button className="w-full text-left">
            {site.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropdownGrid;