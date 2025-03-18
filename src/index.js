import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/UpFinder" element={<UpFinder />} />
        <Route path="/UpFinder/login" element={<LoginUpFinder />} />
        <Route path="/UpFinder/cadastro" element={<CadastroUpFinder />} />

        <Route path="/UpFound" element={<UpFound />} />
        <Route path="/UpFound/login" element={<LoginUpFound />} />
        <Route path="/UpFound/cadastro" element={<CadastroUpFound />} />

        <Route path="/UpFinder/system" element={<SystemUpFinder />} />
        <Route path="/UpFinder/system/meusprojetos" element={<MeusProjetosUpFinder />} />
        <Route path="/UpFinder/system/pagamentos" element={<PagamentosUpFinder />} />
        <Route path="/UpFinder/system/projeto" element={<ProjetoUpFinder />} />

        <Route path="/UpFound/system" element={<SystemUpFound />} />
        <Route path="/UpFound/system/dadosprofissionais" element={<DadosProfissionaisUpFound />} />
        <Route path="/UpFound/system/meusprojetos" element={<MeusProjetosUpFound />} />
        <Route path="/UpFound/system/buscarprojetos" element={<BuscarProjetosUpFound />} />
        <Route path="/UpFound/system/financeiro" element={<FinanceiroUpFound />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
