import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import DetallePokemon from './paginas/DetallePokemon/DetallePokemon';
import ListaComponentes from './paginas/ListaComponentes/ListaComponentes';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListaComponentes />} />
      <Route path="/pokemon/:id" element={<DetallePokemon />} />
    </Routes>    
    </BrowserRouter>
  );
}

export default App;


