// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">MyApp</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white font-medium hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/todolist"
              className="text-white font-medium hover:text-gray-300 transition duration-300"
            >
              Todo List
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white font-medium hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
