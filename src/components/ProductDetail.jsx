import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartActions';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product, 1));
    }
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  // Loading, Error or No product found states
  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500 font-bold text-center">{error}</div>;
  if (!product) return <div className="text-red-500 font-bold text-center">Product not found</div>;

  // Function to handle broken images (fallback)
  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/150';
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="border p-4 rounded-lg shadow-lg bg-white">
        <img
          src={product.images[0] || 'https://via.placeholder.com/150'}
          alt={product.title}
          className="w-full h-auto object-cover mb-4 rounded"
          onError={handleImageError}
        />
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>

        {/* Add to Cart and Go to Cart buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleAddToCart}
            aria-label="Add to Cart"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleGoToCart}
            aria-label="Go to Cart"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;