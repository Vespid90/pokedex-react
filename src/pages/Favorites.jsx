import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from '../components/PokemonCard';
import '../styles/pages/Favorites.css';

const Favorites = () => {
    const { favorites } = usePokemon();

    return (
        <div className="favorites-container">
            <h1>Mes Pokémon Favoris</h1>
            {favorites.length === 0 ? (
                <p>Vous n'avez pas encore de Pokémon favoris.</p>
            ) : (
                <div className="pokemon-grid">
                    {favorites.map(pokemon => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            isFavorite={true}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default Favorites;