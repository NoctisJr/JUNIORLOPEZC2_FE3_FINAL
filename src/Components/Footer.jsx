
import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  const iconStyle = {
    filter: state.theme === 'light' ? 'invert(100%)' : 'invert(0%)', // Cambia el color del icono
  };

  const iconStyleDH = {
    filter: state.theme === 'dark' ? 'invert(100%)' : '', // Cambia el color del icono
  };

  return (
    <footer>
        <p>Powered by Junior Lopez</p>
        <img src="/images/DH.png" alt='DH-logo' className="icon" style={iconStyleDH} />
          <div>
            <a href="https://www.facebook.com" >
              <img src="/images/ico-facebook.png" className="icon" style={iconStyle} />
            </a>
            <a href="#" >
              <img src="/images/ico-instagram.png" className="icon" style={iconStyle} />
            </a>
            <a href="#" >
              <img src="/images/ico-tiktok.png" className="icon" style={iconStyle} />
            </a>
            <a href="#" >
              <img src="/images/ico-whatsapp.png" className="icon" style={iconStyle} />
            </a>
          </div>
        
        
    </footer>
  )
}

export default Footer
