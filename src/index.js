import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import UpFinder from './pages/UpFinder';
import UpFound from './pages/UpFound';
import LoginUpFinder from './pages/UpFinder/login';
import LoginUpFound from './pages/UpFound/login';
import CadastroUpFinder from './pages/UpFinder/cadastro';
import CadastroUpFound from './pages/UpFound/cadastro';

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
    path: '/upfinder/login',
    element: <LoginUpFinder />,
  },
  {
    path: '/upfound',
    element: <UpFound />,
  },
  {
    path: '/upfound/login',
    element: <LoginUpFound />,
  },
  {
    path: '/upfinder/cadastro',
    element: <CadastroUpFinder />,
  },
  {
    path: '/upfound/cadastro',
    element: <CadastroUpFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
