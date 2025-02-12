import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header 
        logoPath="/img/logo3.png" 
        logoAlt="Logo da UpFind" 
        linkLogin="#"
        linkCadastro="#"
      />
    </div>
  );
}

export default App;
