import React from 'react';
import './Footer.css';
import Git from '../../assets/Githubblack.png';
import Linkedin from '../../assets/Linkedinfooter.svg';
import  Whatsapp  from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='contact'>
      <p className='search-job'>Procuro oportunidade onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional.</p>
      <div className='social-media'>
       
          <div className="social-contact">
                    <a href="https://github.com/vivianeluzz" target="_blank" rel="noopener noreferrer"> 
                    <img className='social' src={Git} alt="Icone do github" title='Github' /></a>
                    <a href="https://www.linkedin.com/in/viviane-luz/"target="_blank" rel="noopener noreferrer"> 
                    <img className='social' src={Linkedin} alt="" title='Linkedin' /></a>
                    
                    
                    <a href="https://wa.me/5511986966179" target="blank" className='social'>
                      <img className='social' src={ Whatsapp } alt="Icone do whatsapp" title='Whatsapp' />
                    </a>
                    <a className='text-contact' href='mailto:vivianesluzz@gmail.com'>vivianesluzz@gmail.com</a>
          </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;


