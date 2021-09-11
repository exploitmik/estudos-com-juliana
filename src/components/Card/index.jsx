import React from 'react';
import './styles.css';

const Card = ({data}) => {
  const statusStrategy = {
    "Alive": 'card__status--alive',
    "Dead": 'card__status--dead',
    "unknown": 'card__status--unk',
  };

  return (
    <div className="card">
      <figure className="card__figure">
        <img src={data.image} alt={data.name} aria-label={data.name} className="card__image" />
      </figure>
      <div className="card__content">
        <p className="card__title">{ data.name }</p>
        <div className="card__info">
          <p className={`card__status ${statusStrategy[data.status]}`}>{ data.status }</p>
          <p className="card__species">{ data.species }</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
