import React, { createContext, useReducer, useEffect, useMemo } from 'react';


const TOGGLE_THEME = 'TOGGLE_THEME';
const SET_DATA = 'SET_DATA';

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Cambia esto por la URL de tu API
      const data = await response.json();
      dispatch({ type: SET_DATA, payload: data });
    };
    fetchData();
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  // Memoriza el valor del contexto
  const value = useMemo(() => ({
    state,
    toggleTheme,
  }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
