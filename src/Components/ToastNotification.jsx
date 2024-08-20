// ToastNotification.js
import React, { useEffect } from 'react';

const ToastNotification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto-hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
        show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
    >
      <p className="text-sm">{message}</p>
      <button className="absolute top-2 right-2 text-white" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default ToastNotification;
