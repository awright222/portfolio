"use client";

import { useState } from "react";
import Image from "next/image";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import ResumeButton from "./components/ResumeButton";
import DropdownGrid from "./components/DropdownGrid";
import Modal from "./components/Modal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="grid grid-cols-3 auto-rows-[min-content] gap-4 w-full mb-4">
     
      <div className="col-span-2 row-span-1 p-2">
        <About />
      </div>

      
      <div className="col-span-1 row-span-1 flex flex-col items-center p-2">
        <Image
          src="/aw_nobg.png"
          alt="Logo"
          width={150} 
          height={150}
          className="rounded-full mb-2"
        />
        <ContactInfo />
        <ResumeButton onClick={handleModalToggle} />
      </div>

      
      <div className="col-span-3 flex justify-center">
        <hr className="w-[75%] border-t-2 border-gray-300 my-4" />
      </div>

      
      <div className="col-span-3 p-2">
        <div className="grid grid-cols-4 gap-2">
          
          <div className="p-2 border rounded-md">
            <h3 className="text-md font-semibold mb-1">FRONTEND TECHNOLOGIES</h3>
            <ul className="list-disc ml-4">
              <li>React</li>
              <li>Next.js</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          
          <div className="p-2 border rounded-md">
            <h3 className="text-md font-semibold mb-1">BACKEND TECHNOLOGIES</h3>
            <ul className="list-disc ml-4">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python/Flask</li>
            </ul>
          </div>

          
          <div className="p-2 border rounded-md">
            <h3 className="text-md font-semibold mb-1">DATABASES & ORMS</h3>
            <ul className="list-disc ml-4">
              <li>Sequelize</li>
              <li>SQLAlchemy</li>
              <li>SQLite3</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          
          <div className="p-2 border rounded-md">
            <h3 className="text-md font-semibold mb-1">CORE LANGUAGES</h3>
            <ul className="list-disc ml-4">
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="col-span-3 flex flex-col items-center p-2">
        <DropdownGrid />
      </div>

      
      {isModalOpen && <Modal onClose={handleModalToggle} />}
    </div>
  );
};

export default Page;
