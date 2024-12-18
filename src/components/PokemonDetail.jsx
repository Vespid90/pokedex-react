import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonById } from '../services/api';
import '../styles/components/PokemonDetail.css';
import { usePokemon } from '../hooks/usePokemon'

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { favorites, addFavorite, removeFavorite } = usePokemon();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showShiny, setShowShiny] = useState(false);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                setIsLoading(true);
                const data = await getPokemonById(id);
                setPokemon(data);
            } catch (err) {
                setError('Failed to load Pokémon details');
                console.error('Error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="pokemon-detail-loading">
                <div className="loading-spinner"></div>
                <p>Loading Pokémon details...</p>
            </div>
        );
    }

    if (error || !pokemon) {
        return (
            <div className="pokemon-detail-error">
                <h2>{error || 'Pokémon not found'}</h2>
                <button onClick={() => navigate('/')} className="back-button">
                    Return to Home
                </button>
            </div>
        );
    }

    const isFavorite = favorites.some(fav => fav.id === pokemon.id);
    const mainType = pokemon.types[0].type.name;

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(pokemon.id);
        } else {
            addFavorite(pokemon);
        }
    };

    return (
        <div className={`pokemon-detail-container ${mainType}`}>
            <button onClick={() => navigate(-1)} className="back-button">
                ← Back
            </button>

            <div className="pokemon-detail-header">
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                <span className="pokemon-number">#{pokemon.id.toString().padStart(3, '0')}</span>
            </div>

            <div className="pokemon-detail-content">
                <div className="pokemon-images">
                    <img
                        src={showShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="pokemon-sprite main"
                    />
                    <button
                        className="shiny-toggle-button"
                        onClick={() => setShowShiny(!showShiny)}
                    >
                        {showShiny ? 'Show Normal' : 'Show Shiny'} ✨
                    </button>
                </div>

                <div className="pokemon-info">
                    <div className="pokemon-types">
                        {pokemon.types.map(({ type }) => (
                            <span key={type.name} className={`type-badge ${type.name}`}>
                                {type.name}
                            </span>
                        ))}
                    </div>

                    <div className="pokemon-stats">
                        <h3>Base Stats</h3>
                        {pokemon.stats.map(stat => (
                            <div key={stat.stat.name} className="stat-row">
                                <span className="stat-name">
                                    {stat.stat.name.replace('-', ' ').toUpperCase()}
                                </span>
                                <div className="stat-bar-container">
                                    <div
                                        className="stat-bar"
                                        style={{width: `${(stat.base_stat / 255) * 100}%`}}
                                    >
                                        {stat.base_stat}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pokemon-details">
                        <div className="detail-row">
                            <span>Height:</span>
                            <span>{pokemon.height / 10}m</span>
                        </div>
                        <div className="detail-row">
                            <span>Weight:</span>
                            <span>{pokemon.weight / 10}kg</span>
                        </div>
                        <div className="detail-row">
                            <span>Abilities:</span>
                            <span>
                                {pokemon.abilities
                                    .map(ability =>
                                        ability.ability.name.replace('-', ' ')
                                    )
                                    .join(', ')}
                            </span>
                        </div>
                    </div>

                    <button
                        className={`favorite-button ${isFavorite ? 'active' : ''}`}
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;