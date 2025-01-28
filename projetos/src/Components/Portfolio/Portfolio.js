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
        description="Este projeto foi desenvolvido para o site Movida Seminovos, com o objetivo de proporcionar uma experiência eficiente para os usuários na busca e seleção das lojas Movida. Minha atuação inclui a gestão das páginas e fluxos do site. 
        Contribui na implementação das soluções técnicas, utilizando habilidades em HTML, CSS, JavaScript e Angular para o desenvolvimento front-end, e Node.js e APIs RESTful para integração back-end. Também participei da otimização
        de desempenho e da responsividade do site, assegurando compatibilidade com diferentes dispositivos e navegadores."
      />
      <PortfolioItem
        link="https://www.seminovosmovida.com.br/"
        imgClassName="AmazonLP"
        title="Landing Page Amazon"
        description="Este projeto consiste em uma landing page responsiva, desenvolvida para o cliente/parceiro (Amazon) em colaboração com a Movida Seminovos. O protótipo foi criado no Figma para garantir uma experiência visual, coesa e funcional. 
                     Desenvolvido com  metodologias em HTML, CSS, TypeScript e o framework Angular. O formulário integrado permite a coleta de dados dos usuários, com validações seguras.
                     Este projeto destaca a habilidade de interpretar protótipos criados no Figma e transformar ideias em páginas dinâmicas e funcionais, atendendo ás necessidades do cliente."
      />
      <PortfolioItem
        link="https://www.dafiti.com.br/"
        imgClassName="LP"
        title="Landing Page E-commerce"
        description="Este projeto foi inspirado no e-commerce Dafiti e desenvolvido para exibir as principais logomarcas de forma destacada, proporcionando uma navegação fluida e contínua com a funcionalidade de scroll ifinito com técnicas de CSS. 
        A estrutura foi construída com HTML, CSS, JavaScript, empregando metodologias modernas como Flexbox, para garantir um layout responsivo e com acessibilidade."
      />
      {/* Adicionar mais componentes PortfolioItem  */}
    </section>
  );
};

export default Portfolio;
