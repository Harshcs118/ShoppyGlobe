// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">
        If you have any questions or feedback, feel free to reach out to us!
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Email:</h2>
        <p className="text-gray-700">support@shoppyglobe.com</p>
      </div>
      <div className="mt-2">
        <h2 className="text-xl font-semibold">Phone:</h2>
        <p className="text-gray-700">+1 (234) 567-8901</p>
      </div>
      <div className="mt-2">
        <h2 className="text-xl font-semibold">Address:</h2>
        <p className="text-gray-700">123 Shoppy St, Shopping City, SC 12345</p>
      </div>
    </div>
  );
};

export default Contact;