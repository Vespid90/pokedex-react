import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import '../styles/pages/Favorites.css';

const Favorites = () => {
    const { favorites, setFavorites } = usePokemon();

    //fonction pour retirer un favori
    const removeFavorite = (pokemon) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((fav) => fav.id !== pokemon.id) // Retirer l'élément de la liste
        );
    };
    const { favorites, removeFavorite } = useContext(PokemonContext); // Accès au contexte

    return (
        <div>
            <h2 className="favorites-title">Mes Pokémon favoris</h2>
            {favorites.length > 0 ? (
                <ul className="favorites-list">
                    {favorites.map((pokemon) => (
                        <li key={pokemon.id} className="favorite-item">
                            <button
                                className="remove-favorite-button"
                                onClick={() => removeFavorite(pokemon.id)}
                            >
                                ❌
                            </button>
                            <span className="favorites-list-id">
                                #{pokemon.id.toString().padStart(3, '0')}
                            </span>
                            <span className="favorites-list-name">
                                {pokemon.name}
                            </span>
                            <img
                                src={pokemon.sprites?.front_default || 'placeholder-image-url'}
                                alt={pokemon.name || 'Unknown Pokémon'}
                                className="favorites-sprites"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;