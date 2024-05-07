import React from 'react';

function NavBar() {
  return (
    <nav className="bg-indigo-800 text-white px-6 py-3 shadow-lg">
      <ul className="flex justify-between items-center">
        <li className="flex-1 text-center">
          <a href="#home" className="hover:bg-purple-700 p-3 rounded-lg transition duration-300 ease-in-out text-lg font-semibold shadow">Home</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#about" className="hover:bg-purple-700 p-3 rounded-lg transition duration-300 ease-in-out text-lg font-semibold shadow">About</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#services" className="hover:bg-purple-700 p-3 rounded-lg transition duration-300 ease-in-out text-lg font-semibold shadow">Services</a>
        </li>
        <li className="flex-1 text-center">
          <a href="#contact" className="hover:bg-purple-700 p-3 rounded-lg transition duration-300 ease-in-out text-lg font-semibold shadow">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
