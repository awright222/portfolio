import Image from "next/image";
import About from "../components/About";
import ContactInfo from "../components/ContactInfo";
import ResumeButton from "../components/ResumeButton";
import DropdownGrid from "../components/DropdownGrid";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Alex Wright</h1>
      <Image
        src="/images/headshot.jpg"
        alt="Headshot of Alex Wright"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <About />
      <ContactInfo />
      <ResumeButton onClick={handleModalToggle} />
      <DropdownGrid />
      {isModalOpen && <Modal onClose={handleModalToggle} />}
    </div>
  );
}