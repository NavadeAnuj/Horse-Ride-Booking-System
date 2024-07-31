import React from 'react';

const BookButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default BookButton;
