import React from 'react';
import './Experiences.css';

export const Experiences = () => {
  return (
    <div className='experiences'>
    <div className='exp-content'>
    <h2 className='professionals'>Experiências profissionais</h2>
    <ul className='list-experiences'>
        <li className='itens-experiencies'> 
        <h3>Desenvolvedora Front-end</h3>
            <ol className='language-tags'>
                <li className='tag-experiencies'>ANGULAR</li>
                <li className='tag-experiencies'>JAVASCRIPT</li>
                <li className='tag-experiencies'>CSS</li>
                <li className='tag-experiencies'>GIT</li>
            </ol>
        <p className='experiencies-description'>Formação com duração de 6 meses com aulas ao vivo online. 
            A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, 
            com as principais cerimônias do Scrum.</p>
            <div className='line'></div>

            <div className='companies'>
                <h4 className='companies-name'>SEMINOVOS MOVIDA</h4>
                <p className='years'>2021-2023</p>
            </div>

        </li>

        <li className='itens-experiencies'> 

        <h3>Desenvolvedora Front-end</h3>
            <ol className='language-tags'>
            <li className='tag-experiencies'>HTML</li>
                <li className='tag-experiencies'>CSS</li>
                <li className='tag-experiencies'>WORDPRESS</li>
                <li className='tag-experiencies'>AWS</li>
            </ol>
        <p className='experiencies-description'>Formação com duração de 6 meses com aulas ao vivo online. 
            A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, 
            com as principais cerimônias do Scrum.</p>
            <div className='line'></div>

            <div className='companies'>
                <h4 className='companies-name'>Gaia educação</h4>
                <p className='years'>2021-2023</p>
            </div>
        </li>

        <li className='itens-experiencies'> 
            <h3>Instrutora voluntária</h3>
                <ol className='language-tags'>
                <li className='tag-experiencies'>JAVASCRIPT</li>
                <li className='tag-experiencies'>GIT</li>
                <li className='tag-experiencies'>HTML</li>
                <li className='tag-experiencies'>CSS</li>
                </ol>
            <p className='experiencies-description'>Formação com duração de 6 meses com aulas ao vivo online. 
                A dinâmica do curso seguia a mesma dinâmica de um time de tecnologia em uma startup moderna, 
                com as principais cerimônias do Scrum.</p>
                <div className='line'></div>

            <div className='companies'>
                <h4 className='companies-name'>SEMINOVOS MOVIDA</h4>
                <p className='years'>2021-2023</p>
            </div>

        </li>
    </ul>
    </div> 
    </div>

  )
}

export default Experiences;
