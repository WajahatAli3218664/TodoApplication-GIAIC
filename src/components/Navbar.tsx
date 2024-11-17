import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

export default function Navbar() {
  return (
    <div className=" p-6">
        
      {/* GitHub Button */}
      <div className="flex items-center justify-start mb-4">
        <a
          href="https://github.com/WajahatAli3218664"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-red-500"
        >
          <FaGithub size={24} />
          <span className="font-semibold">GitHub</span>
        </a>
      </div>

      {/* Main Heading */}
      <div className="flex items-center justify-center  ">
  <h1 className="text-slate-400 text-3xl font-bold text-center">
    Organize Your Day{' '}
    <span className="text-blue-500 uppercase">Add Tasks</span> & Descriptions to{' '}
    <span className="text-blue-500 uppercase">Stay on Track!</span>
  </h1>
</div>



    </div>
  );
}