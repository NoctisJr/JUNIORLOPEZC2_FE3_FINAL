import React, { useEffect, useState } from "react";
import FavCard from "./FavCard";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favDentists')) || [];
    setFavDentists(storedFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.map(dentist => (
          <FavCard 
            key={dentist.id} 
            name={dentist.name} 
            username={dentist.username} 
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;