import React from 'react';
import './Portfolio.css';
const Portfolio = () => {
   return (
      <section id="portfolio-section" className='training-section'>
         <h4 className='training-title'>Portfolio</h4>
         <div className='mack'>
            <a href="https://www.seminovosmovida.com.br/lojas">

               <div className='courses-full portfolio-img Movida1'></div>
            </a>
            <div className='instituicao'>
            </div>
            <p className='graduacao'>Site Movida Seminovos</p>
            <p className='cursando'>
            Este projeto foi desenvolvido para o site Movida Seminovos, focado em oferecer uma experiência para os usuários encontrarem a loja mais próxima. 
            Além de gerenciar as páginas aos fluxos do site, contribui diretamente para a implementação das soluções projetadas pelo time de design. O projeto reforça minha habilidade em traduzir layouts e funcionalidades.
            </p>

         </div>
      </section>
   );
};
export default Portfolio;