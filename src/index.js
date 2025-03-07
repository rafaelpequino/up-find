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
import DadosProfissionaisUpFound from './pages/UpFound/system/dadosprofissionais';
import MeusProjetosUpFound from './pages/UpFound/system/meusprojetos';
import BuscarProjetosUpFound from './pages/UpFound/system/buscarprojetos';
import FinanceiroUpFound from './pages/UpFound/system/financeiro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/UpFinder',
    element: <UpFinder />
  },
  {
    path: '/UpFinder/login',
    element: <LoginUpFinder />,
  },
  {
    path: '/UpFound',
    element: <UpFound />,
  },
  {
    path: '/UpFound/login',
    element: <LoginUpFound />,
  },
  {
    path: '/UpFinder/cadastro',
    element: <CadastroUpFinder />,
  },
  {
    path: '/UpFound/cadastro',
    element: <CadastroUpFound />,
  },
  {
    path: '/UpFinder/system',
    element: <SystemUpFinder />,
  },
  {
    path: '/UpFinder/system/meusprojetos',
    element: <MeusProjetosUpFinder />,
  },
  {
    path: '/UpFinder/system/pagamentos',
    element: <PagamentosUpFinder />
  },
  {
    path: '/UpFinder/system/projeto',
    element: <ProjetoUpFinder />
  },
  {
    path: '/UpFound/system',
    element: <SystemUpFound />
  },
  {
    path: '/UpFound/system/dadosprofissionais',
    element: <DadosProfissionaisUpFound />
  },
  {
    path: '/UpFound/system/meusprojetos',
    element: <MeusProjetosUpFound />
  },
  {
    path: '/UpFound/system/buscarprojetos',
    element: <BuscarProjetosUpFound />
  },
  {
    path: '/UpFound/system/financeiro',
    element: <FinanceiroUpFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
