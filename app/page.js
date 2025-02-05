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
    <div className="grid grid-cols-3 auto-rows-[min-content] gap-4 w-full mb-4 pl-16 pr-8 mx-auto">
      <div className="col-span-2 row-span-1 p-2">
        <About />
      </div>

      <div className="col-span-1 row-span-1 flex flex-col items-center p-2 pt-10">
        <ContactInfo />
        <ResumeButton onClick={handleModalToggle} />
        <Image
          src="/IMG_1563.JPG"
          alt="Alex Wright"
          width={175}
          height={200}
          className="object-cover rounded-full mt-4"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }}
        />
      </div>

      <div className="col-span-3 flex justify-center">
        <hr className="w-[75%] border-t-2 border-gray-300 my-4" />
      </div>

      <div className="col-span-3 p-2">
        <div className="grid grid-cols-4 gap-2">
          <div className="p-2 rounded-md">
            <h3 className="text-md font-semibold mb-1">FRONTEND TECHNOLOGIES</h3>
            <ul className="list-disc ml-4">
              <li>React</li>
              <li>Next.js</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-2 rounded-md">
            <h3 className="text-md font-semibold mb-1">BACKEND TECHNOLOGIES</h3>
            <ul className="list-disc ml-4">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python/Flask</li>
            </ul>
          </div>

          <div className="p-2 rounded-md">
            <h3 className="text-md font-semibold mb-1">DATABASES & ORMS</h3>
            <ul className="list-disc ml-4">
              <li>Sequelize</li>
              <li>SQLAlchemy</li>
              <li>SQLite3</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="p-2 rounded-md">
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
