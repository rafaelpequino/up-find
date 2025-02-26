import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import UpFinder from './pages/UpFinder';
import UpFound from './pages/UpFound';

//Login e Cadastro
import LoginUpFinder from './pages/UpFinder/login';
import LoginUpFound from './pages/UpFound/login';
import CadastroUpFinder from './pages/UpFinder/cadastro';
import CadastroUpFound from './pages/UpFound/cadastro';

//System UpFinder
import SystemUpFinder from './pages/UpFinder/system';
import MeusProjetosUpFinder from './pages/UpFinder/system/meusprojetos';
import PagamentosUpFinder from './pages/UpFinder/system/pagamentos';
import ProjetoUpFinder from './pages/UpFinder/system/projeto';

//System UpFound
import SystemUpFound from './pages/UpFound/system';

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
  {
    path: '/upfinder/system',
    element: <SystemUpFinder />,
  },
  {
    path: '/upfinder/system/meusprojetos',
    element: <MeusProjetosUpFinder />,
  },
  {
    path: '/upfinder/system/pagamentos',
    element: <PagamentosUpFinder />
  },
  {
    path: '/upfinder/system/projeto',
    element: <ProjetoUpFinder />
  },
  {
    path: '/upfound/system',
    element: <SystemUpFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
