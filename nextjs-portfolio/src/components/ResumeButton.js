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
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download Resume
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
}