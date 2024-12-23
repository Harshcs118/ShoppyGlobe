import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleIncreaseQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1); // Increment quantity by 1
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1); // Decrement quantity by 1
    }
  };

  const price = parseFloat(item.price) || 0;
  const quantity = parseInt(item.quantity, 10) || 1;
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center mb-4 md:mb-0">
        {/* Product Image */}
        <img
          src={item.images[0] || '/path/to/default-image.jpg'} // Accessing first image in array
          alt={item.title}
          className="w-16 h-16 object-cover mr-4 border border-gray-300 rounded"
        />
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <span className="text-sm text-gray-500">{item.description}</span>
        </div>
      </div>

      <div className="flex items-center mb-4 md:mb-0">
        {/* Total price */}
        <span className="text-lg font-semibold mr-4">${totalPrice}</span>

        {/* Quantity control */}
        <div className="flex items-center mr-4">
          <button
            onClick={handleDecreaseQuantity}
            className="bg-gray-300 text-black py-1 px-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            -
          </button>
          <span className="mx-2 text-lg">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-gray-300 text-black py-1 px-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            +
          </button>
        </div>

        {/* Remove button */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;