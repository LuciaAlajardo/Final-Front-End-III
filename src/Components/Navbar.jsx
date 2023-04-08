import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";
import { useContext } from 'react';
import style from "./Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ContextGlobal);


  return (
    <nav className={style.nav}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <button className={style.buttonNav}><Link to="/home">HOME</Link></button>
      <button className={style.buttonNav}><Link to="/contact">CONTACT</Link></button>
      <button className={style.buttonNav}><Link to="/favs">FAVORITES</Link></button>
      
      
      
      
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button
    onClick={handleChangeTheme}
    style={{ background: theme.background, color: theme.font }}
    >
    {theme.background === "black" ? "DAYMODE ☀️" : "NIGHTMODE 🌙"}
    </button>
      
  </nav>
  )
}

export default Navbar