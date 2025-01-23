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
        className="mt-4 px-4 py-2 bg-[#708070] text-white rounded hover:bg-[#666865]"
      >
        Resume
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
}