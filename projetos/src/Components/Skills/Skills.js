import React from 'react';
import './Skills.css';
import Card from '../Card/Card';
import Github from '../../assets/github.png';
import Html from '../../assets/html.png';
import Javas from '../../assets/javas.png';
import ReactJs from '../../assets/react.png';
import Nova from '../../assets/nova.png';
import Css from '../../assets/css.png';
import Angular from '../../assets/angular.png';
import Figma from '../../assets/figma.png';
import Aws from '../../assets/aws.png';
import TypeScript from '../../assets/typescript.png';
import MySQL from '../../assets/mysql.png';
import PerfilGit from '../../assets/perfilgit.png';
import VetorGit from '../../assets/vetorgit.png';

function Skills() {
  return(
      <section id="skills-section" className='vivi'>
        <div className='content-div'>
          <h2>Minhas habilidades</h2>
          <li className='container'>
            <div className='github'>
              <Card bgcolor="green" icon={Github} title="Github" />
              <div className='github-content'>
              <img className='perfil-git' src={PerfilGit} alt="" title="perfilgit" />
              <div>
                <h3 className='name-git'>Viviane Luz</h3>
                <p className='name-perfil'>vivaneluzz</p>
                <a className='link-git' href="https://github.com/vivianeluzz">Ver perfil</a>
                <img className='vetor-git' src={VetorGit} alt="" title="vetorgit" />
              </div>
              </div>
            </div>
              <Card bgcolor="html" icon={Html} title="Html" />
              <Card bgcolor="css" icon={Javas} title="JavaScript" />
              <Card bgcolor="css" icon={ReactJs} title="React Js" />
              <Card bgcolor="css" icon={Css} title="CSS" />
              <Card bgcolor="react" icon={Nova} title="Node" />
              <Card bgcolor="angular" icon={Angular} title="Angular" />
              <Card bgcolor="figma" icon={Figma} title="Figma" />
              <Card bgcolor="aws" icon={Aws} title="AWS" />
              <Card bgcolor="type" icon={TypeScript} title="TypeScript" />
              <Card bgcolor="mysql" icon={MySQL} title="MySQL" />
          </li>
          </div>
      </section>
  );
}

export default Skills;

  