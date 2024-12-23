// src/components/Checkout.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../redux/cartActions'; // Correctly import clearCart action

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity ? parseInt(item.quantity, 10) : 1;

      if (isNaN(price) || isNaN(quantity)) {
        return total; // skip invalid items
      }

      return total + price * quantity;
    }, 0);
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    dispatch(clearCart()); // Clear the cart after successful checkout
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-4">
        <h2 className="text-xl font-bold">Your cart is empty!</h2>
        <Link to="/" className="text-blue-600 hover:underline">Go back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="space-y-4">
        {cartItems.map((item) => {
          const price = parseFloat(item.price);
          const quantity = item.quantity ? parseInt(item.quantity, 10) : 1;

          if (isNaN(price) || isNaN(quantity)) {
            return (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <p className="text-red-500">Invalid item data</p>
              </div>
            );
          }

          return (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center">
                <img
                  src={item.images[0] || 'https://via.placeholder.com/150'}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                </div>
              </div>
              <span className="text-xl font-semibold">${(price * quantity).toFixed(2)}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-between items-center border-t pt-4">
        <h3 className="text-lg font-semibold">Total:</h3>
        <span className="text-xl font-bold">${calculateTotal().toFixed(2)}</span>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
        >
          Clear Cart
        </button>
        <button
          onClick={handleCheckout}
          className="mt-4 md:mt-0 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Complete Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;