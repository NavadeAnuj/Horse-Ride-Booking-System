import React from 'react';
import BookButton from './Button';

const HorseSelection = ({ onSelectHorse }) => {
  const horses = [
    { name: "Thunder", image: "https://example.com/thunder.jpg" },
    { name: "Lightning", image: "https://example.com/lightning.jpg" },
    { name: "Storm", image: "https://example.com/storm.jpg" },
    { name: "Breeze", image: "https://example.com/breeze.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-bold text-white mb-8">Select Your Horse</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {horses.map((horse, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-lg text-center">
            <img src={horse.image} alt={horse.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{horse.name}</h3>
            <BookButton onClick={() => onSelectHorse(horse.name)}>Book Now</BookButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorseSelection;
