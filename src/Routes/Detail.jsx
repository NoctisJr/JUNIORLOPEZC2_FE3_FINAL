import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

 

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true); // Añade un estado para manejar la carga
  const [error, setError] = useState(null); // Añade un estado para manejar errores

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };
    
    fetchDentist();
  }, [id]); 

  console.log(id);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dentist) return <p>No se encontró el dentista.</p>;

  return (
    <div className='detail'>
      <h1>Detalle del Dentista</h1>
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  )
}

export default Detail