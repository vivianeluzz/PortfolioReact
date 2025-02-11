import React from 'react';
import './Card.css';

function Card({ bgcolor, icon, title }) {
    return(
        <div className={`card card-${bgcolor}`} >
            <img className="img-icone" src={icon}  alt="Icone" />
            <p className='title-language'>{title}</p>
        </div>
    );
  }
  
  export default Card;

