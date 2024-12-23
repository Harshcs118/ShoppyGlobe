import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

// Debounce function to limit the frequency of the search query updates
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold error message

  const debouncedSearchQuery = useDebounce(searchQuery, 500); // Wait 500ms before searching

  // Fetch products from the API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  // Fetch products initially or on error retry
  useEffect(() => {
    fetchProducts();
  }, []);

  // Retry fetching products if there was an error
  const handleRetry = () => {
    setError(null);
    fetchProducts();
  };

  // Filter products based on debounced search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">Loading...</div>
    </div>
  );

  if (error) {
    return (
      <div className="text-red-500 font-bold text-center">
        Error: {error}
        <button
          onClick={handleRetry}
          className="ml-4 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange}
        aria-label="Search products" // Added aria-label for accessibility
        className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;