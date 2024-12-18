import React from 'react';
import '../styles/components/PokemonCard.css';

const PokemonCard = ({ name, type, image }) => {
    return (
        <div className={`pokemon-card ${type.toLowerCase()}`}>
            <img src={image} alt={name} className="pokemon-image" />
            <h4>{name}</h4>
            <p>Type: {type}</p>
        </div>
    );
};

export default PokemonCard;