import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import QuemSomos from './components/pages/QuemSomos';
import Planos from './components/pages/Planos'
import Galeria from './components/pages/Galeria'

function App() {
  return (
    <div className="App">
      < Navbar />
      < QuemSomos id="quemsomos" />
      < Planos id="planos" />
      < Galeria id="galeria" />
      < Footer id="contato" />
    </div>
  );
}

export default App;
