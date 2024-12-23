import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Oops! It seems the page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        aria-label="Go to Home" // Added aria-label for accessibility
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105" // Added scale effect
      >
        Go to Home
      </Link>
    </div>
  </div>
);

export default NotFound;