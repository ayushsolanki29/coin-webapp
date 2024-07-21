import React from "react";
import { useNavigate } from "react-router-dom";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const Popup: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-gray-900 text-white rounded-lg p-6 w-11/12 max-w-md mx-auto shadow-lg">
        <h2 className="text-xl font-bold mb-4">Please Login</h2>
        <p className="mb-6">
          Otherwise your data is not stored and is reset every time.
        </p>
        <div className="flex justify-end items-center">
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 mr-4"
          >
            Login Now
          </button>
          <button
            onClick={onClose}
            className="text-blue-400 hover:text-blue-300"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
