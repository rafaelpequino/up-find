import './App.css';
import Choose from './components/Choose';
import Header from './components/Header';
import { SimpleFooter } from './components/SimpleFooter';

function App() {
  return (
    <div className="App">
      <Choose />
      <SimpleFooter>Copyright © Plataforma UpFind - deu match</SimpleFooter>
    </div>
  );
}

export default App;
