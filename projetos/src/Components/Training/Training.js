import React from 'react';
import './Training.css';
import MackenzieLogo from '../../assets/mackenzie-logo.png';
import ReprogramaLogo from '../../assets/reprograma.png';
import CaelumLogo from '../../assets/caelum.png';
import EccLogo from '../../assets/ecc.png';
import AluraLogo from '../../assets/alura.png';

const Courses = ({ logo, name, link, duration, title, description, className }) => (
  <div className={`courses ${className}`}>
    <div className='instituicao'>
      <img className='logo' src={logo} alt={name} title={name} />
      <div className='name'>
        <a className='link' href={link}>{name}</a>
        <span className='duration'>{duration}</span>
      </div>
    </div>
    <p className='title'>{title}</p>
    <p className='description'>{description}</p>
  </div>
);

const Training = () => {
  return (
    <section className='training-section'>
      <h4 className='training-title'>Formação</h4>

      <div className='mack'>

      <div className='courses-full'>
        <div className='instituicao'>
          <img className='logo' src={MackenzieLogo} alt="Mackenzie" title="Mackenzie" />
          <div className='name'>
            <a className='faculdade' href='https://www.mackenzie.br/'>Faculdade Presbiteriana Mackenzie</a>
            <span className='duration'>Graduação</span>
          </div>
        </div>
        <p className='graduacao'>Graduação em Análise e desenvolvimento de Sistemas</p>
        <p className='cursando'>
          Estou cursando a graduação de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie,
          com previsão de formatura em 2024.
        </p>
      </div>
      </div>

      <div className='courses-container'>
        <Courses
          logo={ReprogramaLogo}
          name='Reprograma'
          link='https://www.mackenzie.br/'
          duration='Curso - 3 meses'
          title='Bootcamp JavaScript'
          description='Formação com duração de 6 meses com aulas ao vivo online. A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, com as principais cerimônias do Scrum.'
          className='text-title'
        />

        <Courses 
          id="caelum"
          logo={CaelumLogo}
          name='Caelum'
          link='https://www.mackenzie.br/'
          duration='Curso - 3 meses'
          title='JavaScript para Front-end'
          description='Formação com duração de 6 meses com aulas ao vivo online. A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, com as principais cerimônias do Scrum.'
          className='caelum-background'

        />
        <Courses
          logo={MackenzieLogo}
          name='Labenu'
          link='https://www.mackenzie.br/'
          duration='Curso - 3 meses'
          title='Bootcamp JavaScript'
          description='Formação com duração de 6 meses com aulas ao vivo online. A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, com as principais cerimônias do Scrum.'
          className='ecc-background'
        />
        <div className='course-extra'>
        <div className='courses-1'>
            <div className='instituicao'>
                <img className='logo' src={EccLogo} alt="Mackenzie" title="Mackenzie" />
                <div className=''>
                <a className='faculdade' href='https://www.mackenzie.br/'>English Conversation Course</a>
                <span className='duration'>Curso livre</span>
                </div>
            </div>
            <p className='ecc-graduacao'> ECC curso de inglês</p>
            </div>

        <div className='courses-1'>
            <div className='instituicao'>
                <img className='logo' src={AluraLogo} alt="Mackenzie" title="Mackenzie" />
                <div className=''>
                <a className='alura' href='https://www.mackenzie.br/'>Alura</a>
                <span className='duration'>Curso livre</span>
                </div>
            </div>
            <p className='graduacao'>Formação Front-end</p>
            </div>
    </div>
      </div>
    </section>
  );
};



export default Training;
