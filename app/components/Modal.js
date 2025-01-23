import { useState } from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">RESUME</h2>
        <p className="mb-4">Click the button below to download my resume.</p>
        <a href="/path/to/resume.pdf" download>
          <button className="bg-[#52796F] text-white px-4 py-2 rounded">
            Download Resume
          </button>
        </a>
        <button
          className="mt-4 text-[#2F3E46]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}