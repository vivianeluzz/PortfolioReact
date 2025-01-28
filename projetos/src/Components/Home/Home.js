import React from 'react';
import './Home.css';
import Avatar from '../../assets/avatar.jpg';
import Curr from '../../assets/vamosconversar.png';
import Emoji from '../../assets/emojiavatar.png';
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
                        <div className='botao-rotativo'>
                        <a href="https://wa.me/5511986966179" target="blank" className='social'>
                            <img className='circulo-rotativo' src={Curr} alt="Botão rotativo com texto vamos conversar" title='Botão' />
                            <img className='emoji-curriculo' src={Emoji} alt="Emoji rosto de mulher com tom marrom" title='Emoji' />
                        </a>
                        </div>
                <main className='item-vetor'>
                    <img className='vetor' src={Vetor} alt="Vetor" title='Vetor' />
                    <a href="https://github.com/vivianeluzz" target="_blank" rel="noopener noreferrer"> 
                    <img className='social' src={Git} alt="Icone do github" title='Github' /></a>
                    <a href="https://www.linkedin.com/in/viviane-luz/"target="_blank" rel="noopener noreferrer"> 
                    <img className='social' src={Linkedin} alt="Botão do Linkedin" title='Linkedin' /></a>
                </main>
            </div>
        </section>
    );
}


export default Home;






































