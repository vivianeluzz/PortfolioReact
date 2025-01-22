import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <section id="portfolio-section" className="training-section">
      <h4 className="training-title">Portfólio</h4>
      <PortfolioItem
        link="https://www.seminovosmovida.com.br/lojas"
        imgClassName="Movida1"
        title="Site Movida Seminovos"
        description="Este projeto foi desenvolvido para o site Movida Seminovos, focado em oferecer uma experiência para os usuários encontrarem veículos seminovos de forma intuitiva. Além de gerenciar as páginas aos fluxos do site, contribui diretamente para a implementação das soluções projetadas pela equipe."
      />
      <PortfolioItem
        link="https://www.seminovosmovida.com.br/"
        imgClassName="AmazonLP"
        title="Landing Page Amazon"
        description="Este projeto consiste em uma landing page responsiva. O protótipo foi criado no Figma para garantir uma experiência visual, coesa e funcional. 
                     Desenvolvido com  metodologias em HTML, CSS, TypeScript e  Framework Angular. O formulário integrado permite a coleta de dados dos usuários, com validações seguras.
                     Este projeto destaca a habilidade de interpretar protótipos criados no Figma e criar páginas dinâmicas e funcionais."
      />
      <PortfolioItem
        link="https://www.dafiti.com.br/"
        imgClassName="LP"
        title="Landing Page Ecommerce"
        description="Projeto foi desenvolvido utilizando a funcionalidade de scroll ifinito, implementada com técnicas de CSS para proprorcionar uma navegação fluida e contínua. A estrutura foi construída com HTML, CSS, JavaScript, empregando metodologias modernas como Flexbox, para garantir um layout resposnsivo e com acessibilidade."
      />
      {/* Adicionar mais componentes PortfolioItem  */}
    </section>
  );
};

export default Portfolio;
