import React from 'react';
import './Bio.css';
import Emoji from '../../assets/emoji.png';

function Bio() {
  return(
      <section  id="bio-section" className='infos'>
        <img className='emoji' src={Emoji} alt="Emoji" title='Emoji'/>
        <p className='description-about'>Sou desenvolvedora Front-end com experiência prática, estou cursando Análise e Desenvolvimento de sistemas na Mackenzie. Gosto de fazer interfaces bonitas e trabalhar em equipe.
          No meu tempo livre, adoro explorar museus, fazer cerâmica e aproveitar momentos com a família e amigos.
        </p>
        <div>
        </div>
      </section>
  );
}

export default Bio;




























































