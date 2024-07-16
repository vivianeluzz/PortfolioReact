import React from 'react';
import './Footer.css';

// import LinkedInLogo from '../../assets/linkedin-logo.png';
// import GitHubLogo from '../../assets/github-logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='search-job'>Estou buscando uma oportunidade como desenvolvedora Front-end.</p>
      <p>Email: <a href='mailto:vivianesluzz@gmail.com'>vivianesluzz@gmail.com</a></p>
      <p>Telefone: <a href='tel:+5511986966179'>11 986966179</a></p>
      <div className='social-links'>
        {/* <a href='https://www.linkedin.com/in/seu-perfil' target='_blank' rel='noopener noreferrer'> */}
          {/* <img src={LinkedInLogo} alt='LinkedIn' className='social-logo' /> */}
        {/* </a> */}
        {/* <a href='https://github.com/seu-perfil' target='_blank' rel='noopener noreferrer'> */}
          {/* <img src={GitHubLogo} alt='GitHub' className='social-logo' /> */}
        {/* </a> */}
      </div>
    </footer>
  );
};

export default Footer;