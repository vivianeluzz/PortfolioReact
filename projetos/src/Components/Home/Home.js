import React from 'react';
import './Home.css';
import Avatar from '../../assets/avatar.jpg';
import Git from '../../assets/git.png';
import Linkedin from '../../assets/linkedin.png';
import Vetor from '../../assets/vetor.png';


export const Home = () => {

    return (
        <section className='personalPage'>
            <img className='avatar' src={Avatar} alt="Avatar de imagem" title='Avatar' />
            <div className='header-content'>
                <h1>Olá! Sou Viviane Luz, desenvolvedora Front-end.</h1>
                <div className='form'><p className='tag'>Cursando</p>
                    <div className='header'><p className='tag-header'>Análise e desenvolvimento de sistemas</p></div>
                    <p className='tag'>na</p>
                    <div className='header'><p className='tag-header'>Mackenzie</p></div>
                </div>
                <main className='item-vetor'>
                    <img className='vetor' src={Vetor} alt="Vetor" title='' />
                    
                    <a href="https://github.com/vivianeluzz"> <img className='social' src={Git} alt="" title='' /></a>
                    <a href="https://www.linkedin.com/in/viviane-luz/"> <img className='social' src={Linkedin} alt="" title='' /></a>
                </main>
            </div>
        </section>
    );
}


export default Home;





































