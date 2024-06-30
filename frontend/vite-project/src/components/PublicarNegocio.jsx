// frontend/src/components/PublicarNegocio.jsx
import  { useState } from 'react';
import axios from 'axios';

const PublicarNegocio = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/negocios', { title, description, image, whatsapp });
    setTitle('');
    setDescription('');
    setImage('');
    setWhatsapp('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} required></textarea>
      <input type="text" placeholder="URL de la imagen" value={image} onChange={e => setImage(e.target.value)} required />
      <input type="text" placeholder="Número de WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required />
      <button type="submit">Publicar</button>
    </form>
  );
};

export default PublicarNegocio;
