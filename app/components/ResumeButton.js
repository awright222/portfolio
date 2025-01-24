import { useState } from "react";
import Modal from "./Modal";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="group mt-8 px-8 py-6 text-white font-semibold rounded-full flex items-center relative overflow-hidden transition-all duration-500 ease-in-out bg-[#354F52] hover:bg-[#84A98C]"
      >
        <span className="mr-8 relative z-10">RESUME</span>
        <svg
          className="relative z-10 transform transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:-translate-x-2"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66669 11.3334L11.3334 4.66669"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66669 4.66669H11.3334V11.3334"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-[#84A98C] rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:right-0"></div>
      </button>
      {isOpen && <Modal isOpen={isOpen} onClose={toggleModal} />}
    </>
  );
}
