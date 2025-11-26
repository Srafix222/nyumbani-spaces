import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
       <svg 
          className="h-9 w-9 text-brand-green-light group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-10deg]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg" 
      >
          {/* Magnifying glass handle, giving it depth */}
          <path d="M16.5 16.5L19 19"></path>
          
          {/* House with isometric perspective for a 3D look */}
          <path d="M10 18v-5l-4-2.5v5l4 2.5z"></path>
          <path d="M6 10.5l6-4 6 4"></path>
          <path d="m18 10.5-6 4-6-4"></path>
          <path d="M10 18l6-4v-5l-6 4v5z"></path>
          
          {/* The lens of the magnifying glass, encircling the house */}
          <circle cx="12" cy="12.5" r="8"></circle>
      </svg>
      <span className="hidden sm:inline text-white text-2xl font-bold">Nyumbani Spaces</span>
    </Link>
  );
};

export default Logo;