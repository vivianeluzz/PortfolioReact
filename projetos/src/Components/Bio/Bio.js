import React from 'react';
import './Bio.css';
import Emoji from '../../assets/emoji.png';

function Bio() {
  return(
      <section  id="bio-section" className='infos'>
        <img className='emoji' src={Emoji} alt="Emoji" title='Emoji'/>
        <p className='trajetoria'>Minha jornada profissional teve início na área da enfermagem, onde desenvolvi habilidades como atenção aos detalhes e trabalho em equipe. 
          Movida pela paixão por tecnologia, realizei uma transição de carreira e me especializei como desenvolvedora Front-end. 
          Sou entusiasta do aprendizado contínuo, sempre buscando me atualizar com as melhores práticas e tendências do mercado de tecnologia. No meu tempo livre, adoro explorar museus, participar de eventos culturais e sociais, e aproveitar momentos com a família e amigos.
        </p>
        <div>
        </div>
      </section>
  );
}

export default Bio;




























































