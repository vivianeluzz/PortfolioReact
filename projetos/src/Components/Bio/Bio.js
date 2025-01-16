import React from 'react';
import './Bio.css';
import Emoji from '../../assets/emoji.png';

function Bio() {
  return(
      <section  id="bio-section" className='infos'>
        <img className='emoji' src={Emoji} alt="Emoji" title='Emoji'/>
        <p className='trajetoria'>Minha trajetória profissional começou na enfermagem. Inspirada pela paixão por tecnologia, fiz a transição de carreira e me especializei como desenvolvedora Front-end.
      Além disso, sou motivada pelo aprendizado contínuo, o que me ajuda a me manter atualizada com as melhores práticas do mercado. Nas horas vagas, gosto de explorar museus, sair com amigos e particiar de eventos culturais e sociais.
        </p>
        <div>
        </div>
      </section>
  );
}

export default Bio;




























































