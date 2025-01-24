import { useState } from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl relative">
        <button
          className="absolute top-2 right-2 text-[#2F3E46] text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">RESUME</h2>
        <iframe
          src="/awrightresume.pdf"
          className="w-full h-96 mb-4"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
}