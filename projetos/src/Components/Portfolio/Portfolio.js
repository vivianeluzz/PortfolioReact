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
        description="Este projeto foi desenvolvido para o site Movida Seminovos, com o objetivo de proporcionar uma experiência eficiente para os usuários na busca e seleção das lojas Movida. Minha atuação incluiu a criação e manutenção do site. 
        Contribuí na implementação das soluções técnicas, utilizando HTML, CSS, JavaScript e Angular para o desenvolvimento front-end, e Node.js e APIs RESTful para integração back-end. Também participei da otimização
        do desempenho e da responsividade do site, assegurando compatibilidade com diferentes dispositivos e navegadores."
      />
      <PortfolioItem
        link="https://www.seminovosmovida.com.br/"
        imgClassName="AmazonLP"
        title="Landing Page Amazon"
        description="Este projeto consiste em uma landing page responsiva, desenvolvida para a campanha realizada em parceria com a Amazon e a Movida Seminovos.  
                     Desenvolvido com  metodologias em HTML, CSS, TypeScript e o framework Angular. O formulário integrado possibilita a coleta de dados dos usuários, com validações seguras.
                     Este projeto destaca a minha habilidade em interpretar protótipos criados no Figma e transformar ideias em páginas dinâmicas e funcionais, atendendo às necessidades do cliente."
      />
      <PortfolioItem
        link="https://github.com/vivianeluzz/sneaker"
        imgClassName="LP"
        title="Landing Page E-commerce"
        description="Projeto pessoal inspirado no e-commerce Dafiti, foi desenvolvido para exibir as principais logomarcas de forma destacada, em um carrossel com rolagem horizontal em loop que permite que o usuário veja todas as marcas disponíveis com a funcionalidade de scroll infinito com técnicas de CSS. 
        A estrutura foi construída com HTML, CSS, JavaScript, empregando metodologias modernas como Flexbox, para garantir um layout responsivo e com acessibilidade."
      />
      {/* Adicionar mais componentes PortfolioItem  */}
    </section>
  );
};

export default Portfolio;
