// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load the components
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Checkout = React.lazy(() => import('./components/Checkout'));
const Cart = React.lazy(() => import('./components/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Contact = React.lazy(() => import('./components/Contact'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4 pt-20 flex-grow"> {/* Added pt-20 to create space for the fixed header */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
};

export default App;