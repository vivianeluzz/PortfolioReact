import React from 'react';
import './Home.css';
import Avatar from '../../assets/avatar.jpg';
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Vector from '../../assets/vector.svg';

function Home() {
  return(
      <section className='personalPage'>
          <img className='avatar' src={Avatar} alt="Avatar de imagem" title='Avatar'/>
        <h1>Olá me chamo Viviane Luz, sou uma<br />desenvolvedora<span style={{ color: "#F07C10"}}> Front-end :)</span></h1>
          <main>
              <div className='social-links'>
                  <a href="https://github.com/vivianeluzz"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/viviane-luz/"><FaLinkedin /></a>
                  <a href="https://vivianeluzz@gmail.com"><FaEnvelope /></a>
              </div>
              <img className='vector' src={Vector} alt='Imagem de vetor' title='Vetor' />
          </main>
      </section>
  );
}

export default Home;






























































