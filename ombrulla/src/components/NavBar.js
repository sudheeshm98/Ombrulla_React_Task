import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3">
      <ul className="flex justify-between items-center">
        <li className="flex-1 text-center">
          <a href="#home" className="hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out">Home</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#about" className="hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out">About</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#services" className="hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out">Services</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#contact" className="hover:bg-gray-700 p-2 rounded transition duration-300 ease-in-out">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
