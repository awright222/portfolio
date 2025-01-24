import React, { useState, useEffect } from "react";
import { animate } from "framer-motion";
import Modal from "./Modal";

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Select the button and apply the animation
    const element = document.querySelector(".resume-button");
    animate(element, { scale: [0.4, 1] }, { ease: "circInOut", duration: 1.2 });
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="resume-button group mt-8 px-8 py-6 text-white font-semibold rounded-full flex items-center justify-between relative overflow-hidden transition-all duration-500 ease-in-out bg-[#354F52] hover:bg-[#84A98C]"
      >
        {/* Text with Right Margin */}
        <span className="relative z-10 mr-4">RESUME</span>
        {/* Circle and Arrow */}
        <div className="relative flex items-center justify-center w-8 h-8 ml-auto">
          <svg
            className="relative z-10 transform transition-transform duration-500 ease-in-out group-hover:rotate-45"
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
          <div className="absolute inset-0 bg-[#84A98C] rounded-full transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></div>
        </div>
      </button>
      {isOpen && <Modal isOpen={isOpen} onClose={toggleModal} />}
    </>
  );
}
