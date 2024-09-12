import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 6 || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    setError('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Contacto</h1>
    <div>
      <label>Nombre completo:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <button type="submit">Enviar</button>
    {error && <p>{error}</p>}
    {success && <p>{success}</p>}
  </form>
  )
}

export default Contact