import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-400">MyWebsite</h1>
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
