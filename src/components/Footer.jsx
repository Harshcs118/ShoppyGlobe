// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="hover:underline mx-2">Home</Link>
          <Link to="/about" className="hover:underline mx-2">About Us</Link>
          <Link to="/contact" className="hover:underline mx-2">Contact</Link>
          <Link to="/privacy" className="hover:underline mx-2">Privacy Policy</Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-pink-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;