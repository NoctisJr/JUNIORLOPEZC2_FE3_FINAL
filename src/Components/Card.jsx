import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favs = JSON.parse(localStorage.getItem('favDentists')) || [];
    return favs.some(dentist => dentist.id === id);
  });

  const handleFavToggle = () => {
    const favs = JSON.parse(localStorage.getItem('favDentists')) || [];
    const isFav = favs.some(dentist => dentist.id === id);

    if (isFav) {
      // Remove from favorites
      const updatedFavs = favs.filter(dentist => dentist.id !== id);
      localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const newFav = { id, name, username };
      favs.push(newFav);
      localStorage.setItem('favDentists', JSON.stringify(favs));
      setIsFavorite(true);
    }
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt={name} />
        <h3>{name}</h3>
        <p>{id} - {username}</p>
       
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${id}`}>Ver detalles</Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button
          onClick={handleFavToggle}
          className="favButton"
          aria-label={isFavorite ? `Quitar a ${name} de favoritos` : `Añadir a ${name} de favoritos`}
          aria-pressed={isFavorite}
        >
          {isFavorite ? "⭐" : "☆"}
        </button>
    </div>
  );
};

export default Card;
