import React from "react";
import { roket } from "../images";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-md mx-auto shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <div className="flex justify-center mb-6">
          <img src={roket} alt="Rocket" className="w-24 h-24" />{" "}
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">
          Boost your profit
        </h2>

        <p className="text-center text-yellow-600 mb-6">
          When you go offline , your boost resets to default.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Each level up increases your profit per hour by 2x.</li>
          <li>The points you gain per click also double with each level.</li>
        </ul>
        <div className="flex justify-center">
          <button
            onClick={onClose} // Replace with your mining route
            className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 flex items-center"
          >
            <span>Start mining</span>
            <span className="ml-2">💰</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
