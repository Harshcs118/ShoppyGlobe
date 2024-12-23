import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartActions';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Function to handle broken images (fallback)
  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/300'; // Fallback image
  };

  // Ensure the image field exists and is an array; use the first image if present
  const imageURL = product?.images?.[0] || 'https://via.placeholder.com/300'; // Fallback to a placeholder image

  return (
    <div className="border rounded-lg p-4 flex flex-col h-full"> {/* Use flex-col and h-full for consistent height */}
      <Link to={`/product/${product.id}`} className="flex-grow"> {/* Allow the link to grow */}
        {/* Image with error handling */}
        <img
          src={imageURL}
          alt={product.title}
          className="w-full h-64 object-cover mb-4 rounded"
          onError={handleImageError}
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
      </Link>
      <div className="mt-4 flex justify-between items-center"> {/* Ensure buttons are aligned */}
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.title} to cart`}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;