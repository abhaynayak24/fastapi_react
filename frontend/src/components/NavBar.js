import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 shadow-xl">
      <h1 className="flex items-center text-gray-300 px-4 py-2"> SpaceX </h1>
    <div className='flex justify-between items-center space-x-8 hover:rounded-full'>
      <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-4 py-2">Home</Link>
      <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-4 py-2">About</Link>
      <Link to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-4 py-2">Projects</Link>
      <FaBars color='gray'/>
    </div>
  </nav>
  )
}

export default NavBar;