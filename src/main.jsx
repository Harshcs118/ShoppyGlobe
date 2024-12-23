// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'; // Import your Redux store and persistor
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS styles

// Get the root DOM element
const container = document.getElementById('root'); // Ensure this matches your HTML

// Create a root
const root = createRoot(container); // Create a root using createRoot

// Render your App component wrapped with Provider and PersistGate
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);