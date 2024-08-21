import React from 'react';
import './Skills.css';
import Card from '../Card/Card';
import Github from '../../assets/github.png';
import Html from '../../assets/html.png';
import Javas from '../../assets/javas.png';
import ReactJs from '../../assets/react.png';
import Nova from '../../assets/nova.png';

function Skills() {
  return(

      <section className='vivi'>
        <div className='content-div'>
          <h2>Minhas habilidades</h2>
          <li className='container'>
              <Card bgcolor="green" icon={Github} title="Github" />
              <Card bgcolor="html" icon={Html} title="Html" />
              <Card bgcolor="css" icon={Javas} title="Css 3" />
              <Card bgcolor="css" icon={ReactJs} title="React Js" />
              <Card bgcolor="javas" icon={Javas} title="Javascript" />
              <Card bgcolor="react" icon={Nova} title="ReactJs" />
              <Card bgcolor="aws" icon={Github} title="Aws" />
              <Card bgcolor="node" icon={Github} title="NodeJs" />
              <Card bgcolor="angular" icon={Html} title="Angular" />
              <Card bgcolor="type" icon={Github} title="TypeScript" />
              <Card bgcolor="figma" icon={Javas} title="Figma" />
              <Card bgcolor="figma" icon={Nova} title="Figma" />
          </li>
          </div>
      </section>
  );
}

export default Skills;

  