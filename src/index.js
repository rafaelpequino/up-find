import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import UpFinder from './pages/UpFinder';
import UpFound from './pages/UpFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/upfinder',
    element: <UpFinder />
  },
  {
    path: '/upfound',
    element: <UpFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
