import React, { useEffect, useState } from "react";
import FavCard from "./FavCard";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favDentists')) || [];
    setFavDentists(storedFavs);
  }, []);

  const handleRemoveFav = (id) => {
    const storedFavs = JSON.parse(localStorage.getItem('favDentists')) || [];
    const updatedFavs = storedFavs.filter(dentist => dentist.id !== id);
    localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
    setFavDentists(updatedFavs);
  };

  const handleClearAll = () => {
    localStorage.removeItem('favDentists');
    setFavDentists([]);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      {favDentists.length > 0 ? (
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={handleClearAll}
            aria-label="Eliminar todos los dentistas de favoritos"
            style={{ padding: '0.5rem 1rem', borderRadius: '20px', cursor: 'pointer' }}
          >
            Vaciar Favoritos 🗑️
          </button>
        </div>
      ) : null}

      <div className="card-grid">
        {favDentists.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%', fontSize: '1.2rem', opacity: 0.7 }}>
            No tienes dentistas en favoritos. ¡Añade algunos desde el Home!
          </p>
        ) : (
          favDentists.map(dentist => (
            <FavCard
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              onRemove={handleRemoveFav}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;