import React from 'react';
import BookButton from './Button';

const LandingPage = ({ onBookNow }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Horse Ride Booking</h1>
        <p className="text-lg text-gray-300 mb-8">
          Experience the thrill of horse riding. Book your ride now!
        </p>
        <BookButton onClick={onBookNow}>Book Now</BookButton>
      </div>
    </div>
  );
};

export default LandingPage;
