// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartActions'; // Import actions
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Cart = () => {
  // Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  // Handle item removal
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // Handle quantity update
  const handleUpdateQuantity = (id, quantity) => {
    // Check if quantity is valid before updating (quantity can't go below 1)
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 1;
    return acc + price * quantity;
  }, 0);

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>Your cart is empty!</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity} // Pass down the onUpdateQuantity function
            />
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>

            {/* Proceed to Checkout button only if there are items in the cart */}
            {cartItems.length > 0 && (
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600"
                onClick={handleProceedToCheckout} // Add the click handler
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
