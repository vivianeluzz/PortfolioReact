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
<section id="training-section" className='training-section'>
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
            Estou cursando a graduação de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie, com formação prevista para 2025.
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
         description='Curso intensivo com imersão em JavaScript, com carga horária de 264,5 horas, distribuídas entre: Test Driven Development, Pirâmide de Testes, Introdução à Orientação
         a Objeto, Prototype no Javascript, Código Limpo, Refatoração, Competências
         Socioemocionais e projetos práticos.'
         className='text-title'
         />
      <Courses 
         id="caelum"
         logo={CaelumLogo}
         name='Caelum'
         link='https://www.mackenzie.br/'
         duration='Curso - 3 meses'
         title='JavaScript para Front-end'
         description='Foram abordados tópicos com a criação de código sem frameworks (JavaScript puro), consumo de APIs com Ajax e JSON em requisições HTTP, envio de textos em formatos JSON,
                  manipulação do DOM, selecionando elementos HTML com querySelector, e a utilização de eventos (Event Handlers vs Event Listeners). O curso teve foco o desenvolvimento de uma  aplicação completa, mobile e responsiva.'
         className='caelum-background'
         />
      <Courses
         logo={MackenzieLogo}
         name='Labenu'
         link='https://www.mackenzie.br/'
         duration='Curso - 3 meses'
         title='Web Full-Stack'
         description=' Bootcamp com duração de 6 meses e aulas ao vivo online. A dinâmica do curso seguia o mesmo modelo de trabalho de um time de tecnologia em uma startup moderna, incluindo as principais cerimônias do Scrum, projetos semanais e pŕaticas de code review. Foram utilizadas as aprincipais stacks, como Git, GitHub, JavaScript e React, com carga horária de 1040 horas.'
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