import React from 'react';
import './Bio.css';
import Emoji from '../../assets/womanemoji.png';

function Bio() {
  return(
      <section  id="bio-section" className='infos'>
        <img className='emoji' src={Emoji} alt="Emoji de mulher estudante com tom marrom" title='Emoji estudante'/>
        <p className='description-about'>Sou estudante de Análise e Desenvolvimento de Sistemas na Mackenzie e desenvolvedora Front-end com experiência prática. Gosto de fazer interfaces bonitas, funcionais e trabalho muito bem em equipe.
        Além disso, gosto de aprender e ensinar, pois acredito na troca de experiências.
          No meu tempo livre, adoro explorar museus, fazer cerâmica e aproveitar momentos com a família e amigos.
        </p>
        <div>
        </div>
      </section>
  );
}

export default Bio;




























































