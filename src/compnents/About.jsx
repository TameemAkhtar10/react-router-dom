import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We create clean and user-friendly web applications using modern
          technologies like React, Tailwind CSS and JavaScript.
        </p>

        <div className="mt-6 flex gap-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
            React
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full">
            Tailwind
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full">
            UI/UX
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

