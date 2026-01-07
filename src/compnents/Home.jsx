import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-400 cursor-pointer" >My Website</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Build modern React applications using React Router & Tailwind CSS.
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold">
          Get Started 🚀
        </button>
      </div>
    </div>
  );
};

export default Home;
