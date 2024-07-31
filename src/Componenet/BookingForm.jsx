import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateCalendarInvite } from '../utils/calendar';

const BookingForm = ({ onSubmit, selectedHorse }) => {
  const [formData, setFormData] = useState({
    horse: selectedHorse,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateCalendarInvite(formData);
    onSubmit(formData);
  };

  const timeslots = [
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
    "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 w-full max-w-lg mx-auto overflow-y-auto max-h-screen bg-opacity-90 backdrop-blur">
        <h2 className="text-3xl font-bold text-center text-blue-600">Book Your Ride</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-lg text-green-700">Selected Horse</label>
            <input
              type="text"
              name="horse"
              value={formData.horse}
              className="w-full border border-green-300 rounded-lg p-2 bg-green-50 text-green-800"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-blue-700">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded-lg p-2 bg-blue-50 text-blue-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-yellow-700">Select Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-yellow-300 rounded-lg p-2 bg-yellow-50 text-yellow-800"
              required
            >
              <option value="">Select a time</option>
              {timeslots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg text-red-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-red-300 rounded-lg p-2 bg-red-50 text-red-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-purple-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-lg p-2 bg-purple-50 text-purple-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-teal-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded-lg p-2 bg-teal-50 text-teal-800"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;
