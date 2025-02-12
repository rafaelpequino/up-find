import './App.css';
import Choose from './components/Choose';
import Header from './components/Header';

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
    </div>
  );
}

export default App;
