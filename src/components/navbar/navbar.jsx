import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isProfileHovered, setProfileHovered] = useState(false);

  //si esta scrolenado
  const handleScroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
  };
  //console.log(isScrolled)
  window.addEventListener('scroll', handleScroll);

  //muestra las opciones al hacer hover
  let profileHoverTimeout;

  const handleProfileMouseEnter = () => {
    setProfileHovered(true);
    // reinicia el contador antes de que cierre
    clearTimeout(profileHoverTimeout);
  };

  //empiesa un contador antes de que cierre las opciones
  const handleProfileMouseLeave = () => {
    // Configurar un nuevo temporizador
    profileHoverTimeout = setTimeout(() => {
      setProfileHovered(false);
    }, 250);
  };

  return (
    <header className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          </Link>
          <ul className="menu-navigation">
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Novedades populares</li>
            <li>Mi lista</li>
            <li>Explorar por idioma</li>
          </ul>
        </div>
        <div className="right">
          <img className="imgicons" src="./icons/busqueda.png" alt="" />
          <img className="imgicons" src="./icons/campana.png" alt="" />

          <div className="profile" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
            <img
              className="imgprofile"
              src="https://occ-0-4273-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTlmTp_xaESTablxypusqQNeBGrI8bW465f2AFqPosmc90jIZti02D4NLM8EycDcobU0MtUyTts8pjWushFoWKrxN1btCDA.png?r=8d8"
              alt=""
            />
            <img className={`arrowicon ${isProfileHovered ? 'active' : ''}`} src="./icons/flecha-abajo.png" alt="" />
              
            {isProfileHovered && <ProfileOptions items={['Administrar perfiles', 'Transferir perfil', 'Cuenta', 'Centro de ayuda']} icon={['./icons/lapiz.png', './icons/usuarios.png', './icons/user.png', './icons/interrogatorio.png']} />}
          </div>
        </div>
      </div>
    </header>
  );
}

//menu de opciones
const ProfileOptions = ({ items, icon }) => (
  <>
  <div className='arrows'></div>
  <div className="options">
    <ul className="drop-menu">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={'/'}>
            <img src={icon[index]} alt="" />
            {item}
          </Link>
        </li>
      ))}
    </ul>
    <span>
      <Link to={'/'}>Cerrar sesión en Netflix</Link>
    </span>
  </div>
  </>
);
