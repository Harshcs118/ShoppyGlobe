import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/products', {
          signal: controller.signal, // Pass the signal to the fetch request
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted'); // Log if the fetch was aborted
        } else {
          setError('Unable to fetch products at the moment. Please try again later.');
          console.error(error); // Log the actual error for debugging
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // Cleanup function to abort the fetch request
    };
  }, []);

  return { products, loading, error };
};