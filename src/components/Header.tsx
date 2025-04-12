import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
    { name: 'Social', path: '/social' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Nithesh Kumar</h1>

        
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
