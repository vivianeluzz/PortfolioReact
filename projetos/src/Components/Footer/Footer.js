import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='contact'>
      <p className='search-job'>Estou buscando uma oportunidade como desenvolvedora Front-end.</p>
      <div className='social-media'>
        <a className='text-contact' href='mailto:vivianesluzz@gmail.com'>vivianesluzz@gmail.com</a>
        <a className='text-contact' href='tel:+5511986966179'>11 948746424</a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;


