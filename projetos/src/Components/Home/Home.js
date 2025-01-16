import React from 'react';
import './Home.css';
import Avatar from '../../assets/avatar.jpg';
import Download from '../../assets/download.svg';
import Git from '../../assets/git.png';
import Linkedin from '../../assets/linkedin.png';
import Vetor from '../../assets/vetor.png';
import Curr from '../../assets/curremoji.svg';
import Emoji from '../../assets/emojiavatar.png';
import Curriculo from '../../assets/VivianeLuz.pdf';

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
                    <img className='vetor' src={Vetor} alt="" title='' />
                    <a className="git" href={Curriculo} download="Currículo - Viviane Luz.pdf"> <img className='download' src={Download} alt="" title='' />
                        Baixe meu currículo</a>
                    <a href="https://github.com/vivianeluzz"> <img className='social' src={Git} alt="" title='' /></a>
                    <a href="https://www.linkedin.com/in/viviane-luz/"> <img className='social' src={Linkedin} alt="" title='' /></a>
                    <a href={Curriculo} download="Currículo - Viviane Luz.pdf"> <img src={Curriculo} alt="" title='' />
                        <div className='botao-rotativo'>
                            <img className='circulo-rotativo' src={Curr} alt="Botao rotativo para baixar curriculo" title='' />
                            <img className='emoji-curriculo' src={Emoji} alt="" title='' />
                        </div>
                    </a>
                </main>
            </div>
        </section>
    );
}


export default Home;





































