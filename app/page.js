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
    <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full mb-4">
      <div className="col-span-2 row-span-1">
        <About />
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-center">
        <Image
          src="/aw_nobg.png"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <ContactInfo />
        <ResumeButton onClick={handleModalToggle} />
        <ul className="list-disc mt-4">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Python/Flask</li>
          <li>Sequelize/3</li>
        </ul>
      </div>
      <div className="col-span-3 row-span-2 flex flex-col items-center p-4">
        <DropdownGrid />
      </div>
      {isModalOpen && <Modal onClose={handleModalToggle} />}
    </div>
  );
};

export default Page;