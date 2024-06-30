// frontend/src/components
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/negocios">Negocios</Link>
      <Link to="/publicar">Publicar Negocio</Link>
    </nav>
  );
};

export default Navbar;
