import React from "react";
import { Link } from 'react-router-dom';

const FavCard = ({ name, username, id, onRemove }) => {
  return (
    <div className='card-grid-fav' >
        <div className="fav-card">
            <img src="/images/doctor.jpg" alt={name} />
            <h3>{name}</h3>
            <p>{id} - {username}</p>
        
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
            <Link to={`/dentist/${id}`}>Ver detalles</Link>

            {/* Botón para eliminar de favoritos */}
            <button
              onClick={() => onRemove(id)}
              className="favButton"
              aria-label={`Quitar a ${name} de favoritos`}
              style={{ marginTop: '10px' }}
            >
              Quitar de favoritos 🗑️
            </button>
        </div>
    </div>
  );
};

export default FavCard;