import React, { useState } from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';


// import { Container } from './styles';


function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <header>
      <div className='hamburguer' onClick={toggleMenu}>
      &#9776;

      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><Link smooth to="/#bio-section" className="nav-link">Sobre Mim</Link></li>
          <li><Link smooth to="/#skills-section" className="nav-link">Habilidades</Link></li>
          <li><Link smooth to="/#training-section" className="nav-link">Formação</Link></li>
          <li><Link smooth to="/#bio-section" className="nav-link">Projetos</Link></li>
      </nav>
    </header>

  ) 
}

export default Header;
