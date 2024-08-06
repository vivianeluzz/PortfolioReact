import React from 'react';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';


// import { Container } from './styles';


function Header() {
  return(
    <header>
      <nav>
          <li><Link smooth to="/#bio-section" className="nav-link">Sobre Mim</Link></li>
          <li>Habilidades</li>
          <li>Formação</li>
          <li>Projetos</li>
      </nav>
    </header>

  ) 
}

export default Header;
