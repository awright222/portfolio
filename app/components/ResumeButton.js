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
        className="mt-4 px-4 py-2 text-white rounded hover:bg-[var(--dark-eucalyptus)]"
        style={{ backgroundColor: 'var(--eucalyptus)' }}
      >
        Resume
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
}