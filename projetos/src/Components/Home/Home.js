import React from 'react';
import './Home.css';
import Avatar from '../../assets/avatar.jpg';
import Download from '../../assets/download.svg';
import Git from '../../assets/git.png';
import Linkedin from '../../assets/linkedin.png';
import Vetor from '../../assets/vetor.png';

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Vector from '../../assets/vector.svg';

export const Home = () => {
    return (
        <section className='personalPage'>
            <img className='avatar' src={Avatar} alt="Avatar de imagem" title='Avatar' />

            <div className='header-content'>
                <h1>Me chamo Viviane Luz, sou uma desenvolvedora Front-end.</h1>
                <div className='form'><p className='tag'>Estou cursando</p>
                    <div className='header'><p className='tag-header'>Análise e desenvolvimento de sistemas</p></div>
                    <p className='tag'>na</p>
                    <div className='header'><p className='tag-header'>Mackenzie</p></div>
                </div>

                <main>
                    <img className='vetor' src={Vetor} alt="" title=''/> 
                    <a className='git' href="https://vivianeluzz@gmail.com"> <img  className='download' src={Download} alt="" title='' />
                    Baixe meu currículo</a>
                    <a href="https://github.com/vivianeluzz"> <img className='social' src={Git} alt="" title=''/></a>
                    <a href="https://www.linkedin.com/in/viviane-luz/"> <img className='social' src={Linkedin} alt="" title=''/></a>
                    {/* <img className='vector' src={Vector} alt='Imagem de vetor' title='Vetor' /> */}
                </main>
            </div>
        </section>
    );
}

export default Home;





































