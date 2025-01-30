const PortfolioItem = ({ link, imgClassName, title, description }) => {
    return (
      <div className="mack">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={`full portfolio-img ${imgClassName}`}></div>
        </a>
        <div className="instituicao-item">
          <p className="graduacao">{title}</p>
          <p className=" description">{description}</p>
        </div>
      </div>
    );
  };
  
  export default PortfolioItem;
  