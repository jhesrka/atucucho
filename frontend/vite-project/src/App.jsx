// frontend/src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NegociosList from './components/NegociosList';
import PublicarNegocio from './components/PublicarNegocio';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Bienvenido a Mi Barrio</h1>} />
        <Route path="/negocios" element={<NegociosList />} />
        <Route path="/publicar" element={<PublicarNegocio />} />
      </Routes>
    </Router>
  );
};

export default App;
