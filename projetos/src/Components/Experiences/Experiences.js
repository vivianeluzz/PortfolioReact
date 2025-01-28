import React from 'react';
import './Experiences.css';
export const Experiences = () => {
   return (
      <div className='experiences'>
         <div className='exp-content'>
            <h2 className='professionals'>Experiências profissionais</h2>
            <ul className='list-experiences'>
               <div className='itemexp'>
                  <li className='itens-experiencies'>
                     <h3>Desenvolvedora Front-end</h3>
                     <ol className='language-tags'>
                        <li className='tag-experiencies'>FIGMA</li>
                        <li className='tag-experiencies'>HTML</li>
                        <li className='tag-experiencies'>CSS</li>
                        <li className='tag-experiencies'>JAVASCRIPT</li>
                     </ol>
                     <p className='experiencies-description'>
                        Fui responsável pela criação, manutenção, melhoria de páginas e fluxos de venda. Incluindo a implementação de novas landing pages.
                        Colaborando com o time de UX, garantindo que os layouts fossem fiéis aos designs propostos e uma experiência de usuário fluida e intuitiva.
                     </p>
                     <div className='line'></div>
                     <div className='companies'>
                        <h4 className='companies-name'>Seminovos Movida</h4>
                        <p className='years'>Set-2021, Fev-2023</p>
                     </div>
                  </li>
               </div>
               <div className='itemexp'>
                  <li className='itens-experiencies'>
                     <h3>Desenvolvedora Front-end</h3>
                     <ol className='language-tags'>
                        <li className='tag-experiencies'>WORDPRESS</li>
                        <li className='tag-experiencies'>HTML</li>
                        <li className='tag-experiencies'>CSS</li>
                        <li className='tag-experiencies'>AWS</li>
                     </ol>
                     <p className='experiencies-description'>
                        Fui responsável pela criação e manutenção na plataforma. Para a infraestrutura utilizei AWS.
                        Html, Css para estruturar e estilizar páginas em temas personalizados no Wordpress. Desenvolvi páginas responsivas, adaptadas às necessidades institucionais e acessíveis para alunos, pais e professores.
                     </p>
                     <div className='line'></div>
                     <div className='companies'>
                        <h4 className='companies-name'>Gaia educação</h4>
                        <p className='years'>Nov-2020, Jul-2021</p>
                     </div>
                  </li>
               </div>
               <div className='itemexp'>
                  <li className='itens-experiencies'>
                     <h3>Instrutora e Desenvolvimento</h3>
                     <ol className='language-tags'>
                        <li className='tag-experiencies'>HTML</li>
                        <li className='tag-experiencies'>CSS</li>
                        <li className='tag-experiencies'>JAVASCRIPT</li>
                        <li className='tag-experiencies'>GIT</li>
                     </ol>
                     <p className='experiencies-description'>Atuei como educadora voluntária nas aulas inaugural e de encerramento, do curso online Mundo
                        Digital do Trabalho, ofertado pela Recode no formato (Ead) com o objetivo de engajar e apoiar as participantes durante essa jornada de
                        aprendizado digital.
                     </p>
                  </li>

                  <div>
                     <div className='line'></div>
                     <div className='companies'>
                        <h4 className='companies-name'>Cruzando Histórias</h4>
                        <p className='years'>Mai-Jun, 2021, Dez-2024</p>
                     </div>

                  </div>
               </div>

            </ul>
         </div>
      </div>
   )
}
export default Experiences;