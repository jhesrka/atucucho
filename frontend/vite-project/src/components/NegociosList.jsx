// frontend/src/components/NegociosList.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';

const NegociosList = () => {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    axios.get('/api/negocios').then(response => {
      setNegocios(response.data);
    });
  }, []);

  return (
    <div>
      {negocios.map(negocio => (
        <div key={negocio.id}>
          <img src={negocio.image} alt={negocio.title} />
          <h2>{negocio.title}</h2>
          <p>{negocio.description}</p>
          <a href={`https://wa.me/${negocio.whatsapp}`} target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</a>
        </div>
      ))}
    </div>
  );
};

export default NegociosList;
