import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Navbar = ({toggleTheme}) => {
  
const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <h1>🦷</h1>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
      <button onClick={toggleTheme}>
       Cambiar Tema a {state.theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </nav>
  )
}

export default Navbar