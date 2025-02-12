import './App.css';
import Choose from './components/Choose';
import Header from './components/Header';
import { SimpleFooter } from './components/SimpleFooter';

function App() {
  return (
    <div className="App">
      <Header 
        logoPath="/img/iv/logo3.png" 
        logoAlt="Logo da UpFind" 
        linkLogin="#"
        linkCadastro="#"
      />
      <Choose />
      <SimpleFooter>Copyright © Plataforma UpFind - deu match</SimpleFooter>
    </div>
  );
}

export default App;
