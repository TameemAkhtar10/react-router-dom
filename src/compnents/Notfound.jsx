import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 text-center mt-3 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold"
      >
        Go Back Home 🏠
      </Link>
    </div>
  );
};

export default NotFound;
