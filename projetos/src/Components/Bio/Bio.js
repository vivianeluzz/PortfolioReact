import React from 'react';
import './Bio.css';
import Emoji from '../../assets/emoji.png';


function Bio() {
  return(
      <section className='infos'>
        <img className='emoji' src={Emoji} alt="" title=''/>

        <p className='trajetoria'>Minha trajetória profissional iniciou na enfermagem, fiz a transição de carreira para a área de tecnologia, especializando-me como Front-end developer e já possuo experiência nessa área há um ano. Além disso, gosto muito de aprender, sair com amigos e explorar museus.</p>
        {/* <p>Trabalhei durante seis anos na área da saúde, como técnica de Enfermagem e a pouco mais de um ano decidi migrar totalmente de carreira para o desenvolvimento web.</p> */}
  
      </section>
  );
}

export default Bio;




























































