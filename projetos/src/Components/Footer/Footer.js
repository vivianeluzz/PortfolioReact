import React from 'react';
import './Footer.css';
import Git from '../../assets/Github_footer.png';
import Linkedin from '../../assets/Linkedin_footer.png';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='contact'>
      <p className='search-job'>Estou buscando uma oportunidade como desenvolvedora Front-end.</p>
      <div className='social-media'>
        <a className='text-contact' href='mailto:vivianesluzz@gmail.com'>vivianesluzz@gmail.com</a>
        <a className='text-contact' href='tel:+5511986966179'>11 948746424</a>
        {/* <a href="https://github.com/vivianeluzz"> <img className='social' src={Git} alt="Foto link do Github" title='Github'/></a> */}
        {/* <a href="https://www.linkedin.com/in/viviane-luz/"> <img className='social' src={Linkedin} alt="Foto link do Linkedin" title='Linkedin'/></a> */}
      </div>
    </div>
    </footer>
  );
};

export default Footer;


