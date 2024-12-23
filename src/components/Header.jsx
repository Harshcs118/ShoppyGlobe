import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <header className="bg-blue-600 text-white p-4 fixed w-full z-10 shadow-md"> {/* Fixed header */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShoppyGlobe
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto top-16 left-0`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <Link to="/" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                Cart ({Array.isArray(cartItems) ? cartItems.length : 0})
              </Link>
            </li>
            {cartItems.length > 0 && (
              <li>
                <Link to="/checkout" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                  Checkout
                </Link>
              </li>
            )}
            <li>
              <Link to="/about" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" onClick={handleMenuItemClick} className="hover:text-gray-300 transition duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;