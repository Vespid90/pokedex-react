import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/PokemonCard.css';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, isFavorite, onFavoriteToggle }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showShiny, setShowShiny] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const mainType = pokemon.types[0].type.name;

    return (
        <div className={`pokemon-card ${mainType}`}>
            {/* Loader */}
            {isLoading && <div className="pokemon-card-loader">Loading...</div>}

            {/* Image du Pokémon */}
            <div className="pokemon-card-image-container">
                <img
                    className={`pokemon-card-image ${isLoading ? 'hidden' : ''}`}
                    src={showShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                    alt={pokemon.name}
                    onLoad={handleImageLoad}
                />
                <button
                    className="shiny-toggle"
                    onClick={() => setShowShiny(!showShiny)}
                    title={showShiny ? "Normal" : "Shiny"}
                >
                    ✨
                </button>
            </div>

            {/* Informations du Pokémon */}
            <div className="pokemon-card-content">
                <div className="pokemon-card-header">
                    <h2 className="pokemon-card-name">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </h2>
                    <span className="pokemon-card-number">#{pokemon.id.toString().padStart(3, '0')}</span>
                </div>

                {/* Types */}
                <div className="pokemon-card-types">
                    {pokemon.types.map(({ type }) => (
                        <span
                            key={type.name}
                            className={`type-badge type-${type.name}`}
                        >
              {type.name}
            </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="pokemon-card-actions">
                    <button
                        className={`favorite-button-mini ${isFavorite ? 'active' : ''}`}
                        onClick={() => onFavoriteToggle(pokemon)}
                    >
                        {isFavorite ? '❤️' : '💛'}
                    </button>
                    <Link
                        to={`/pokemon/${pokemon.id}`}
                        className="details-button"
                    >
                        Voir les détails
                    </Link>
                </div>
            </div>
        </div>
    );
};


PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.shape({
                    name: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        ).isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string.isRequired,
            front_shiny: PropTypes.string.isRequired
        }).isRequired,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                base_stat: PropTypes.number.isRequired,
                stat: PropTypes.shape({
                    name: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        ).isRequired
    }).isRequired,
    isFavorite: PropTypes.bool,
    onFavoriteToggle: PropTypes.func
};

PokemonCard.defaultProps = {
    isFavorite: false,
    onFavoriteToggle: () => {}
};

export default PokemonCard;