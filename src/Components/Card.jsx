import React from "react";

import { Link } from 'react-router-dom';
const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    

    const favs = JSON.parse(localStorage.getItem('favDentists')) || [];

     // Verificar si el dentista ya está en favoritos
     const isFav = favs.some(dentist => dentist.id === id);
    if (!isFav) {
      // Agregar el dentista a la lista de favoritos
      const newFav = { id, name, username };
      favs.push(newFav);

      // Guardar la lista actualizada en localStorage
      localStorage.setItem('favDentists', JSON.stringify(favs));
      alert(`${name} ha sido añadido a favoritos.`);
    } else {
      alert(`${name} ya está en favoritos.`);
    }

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt={name} />
        <h3>{name}</h3>
        <p>{id} - {username}</p>
       
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${id}`}>Ver detalles</Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">🌟</button>   

        

    </div>
  );
};

export default Card;
