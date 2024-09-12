import React from 'react'
import Card from '../Components/Card'
import { useEffect, useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
      setDentists(data);
    };
    fetchDentists();
  }, []);


  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists.map(dentist => (
          <Card 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id} 
          />
        ))}
      </div>
    </main>
  )
}

export default Home