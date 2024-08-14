import React from 'react';
import './Card.css';

function Card({ bgcolor, icon, title }) {
    return(
        <div className={`card card-${bgcolor}`} >
            <img className="img-icone" src={icon} />
            <p>{title}</p>
        </div>
    );
  }
  
  export default Card;

