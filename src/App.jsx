
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ContextGlobal }  from './Components/utils/global.context';

function App() {

  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    document.body.className = state.theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [state.theme]);

/*const [theme, setTheme] = useState('light'); // Estado inicial del tema

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Guardo tema en localStorage
      return newTheme;
    });
  };
  */

  return (
    <Router>
    <div id='root' className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}  >
      
      <Navbar  />
          <div className='medio'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dentist/:id" element={<Detail />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/favs" element={<Favs />} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
