import React from 'react';
import PokemonCard from './PokemonCard.jsx';
import '../styles/components/PokemonList.css';

const PokemonList = () => {
    const pokemons = [
        { id: 1, name: 'Pikachu', type: 'Electric', image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg' },
        { id: 2, name: 'Charmander', type: 'Fire', image: 'https://img.pokemondb.net/artwork/large/charmander.jpg' },
        { id: 3, name: 'Bulbasaur', type: 'Grass', image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg' },
        { id: 4, name: 'Squirtle', type: 'Water', image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg' },
        { id: 5, name: 'Jigglypuff', type: 'Fairy', image: 'https://img.pokemondb.net/artwork/large/jigglypuff.jpg' },
        { id: 6, name: 'Meowth', type: 'Normal', image: 'https://img.pokemondb.net/artwork/large/meowth.jpg' },
        { id: 7, name: 'Psyduck', type: 'Water', image: 'https://img.pokemondb.net/artwork/large/psyduck.jpg' },
        { id: 8, name: 'Snorlax', type: 'Normal', image: 'https://img.pokemondb.net/artwork/large/snorlax.jpg' },
        { id: 9, name: 'Gengar', type: 'Ghost', image: 'https://img.pokemondb.net/artwork/large/gengar.jpg' },
        { id: 10, name: 'Eevee', type: 'Normal', image: 'https://img.pokemondb.net/artwork/large/eevee.jpg' },
        { id: 11, name: 'Machop', type: 'Fighting', image: 'https://img.pokemondb.net/artwork/large/machop.jpg' },
        { id: 12, name: 'Machamp', type: 'Fighting', image: 'https://img.pokemondb.net/artwork/large/machamp.jpg' },
        { id: 13, name: 'Abra', type: 'Psychic', image: 'https://img.pokemondb.net/artwork/large/abra.jpg' },
        { id: 14, name: 'Kadabra', type: 'Psychic', image: 'https://img.pokemondb.net/artwork/large/kadabra.jpg' },
        { id: 15, name: 'Alakazam', type: 'Psychic', image: 'https://img.pokemondb.net/artwork/large/alakazam.jpg' },
        { id: 16, name: 'Gastly', type: 'Ghost', image: 'https://img.pokemondb.net/artwork/large/gastly.jpg' },
        { id: 17, name: 'Haunter', type: 'Ghost', image: 'https://img.pokemondb.net/artwork/large/haunter.jpg' },
        { id: 18, name: 'Rattata', type: 'Normal', image: 'https://img.pokemondb.net/artwork/large/rattata.jpg' },
        { id: 19, name: 'Raticate', type: 'Normal', image: 'https://img.pokemondb.net/artwork/large/raticate.jpg' },
        { id: 20, name: 'Pidgey', type: 'Flying', image: 'https://img.pokemondb.net/artwork/large/pidgey.jpg' },
        { id: 21, name: 'Pidgeotto', type: 'Flying', image: 'https://img.pokemondb.net/artwork/large/pidgeotto.jpg' },
        { id: 22, name: 'Pidgeot', type: 'Flying', image: 'https://img.pokemondb.net/artwork/large/pidgeot.jpg' },
        { id: 23, name: 'Zubat', type: 'Flying', image: 'https://img.pokemondb.net/artwork/large/zubat.jpg' },
        { id: 24, name: 'Golbat', type: 'Flying', image: 'https://img.pokemondb.net/artwork/large/golbat.jpg' },
        { id: 25, name: 'Oddish', type: 'Grass', image: 'https://img.pokemondb.net/artwork/large/oddish.jpg' },
        { id: 26, name: 'Gloom', type: 'Grass', image: 'https://img.pokemondb.net/artwork/large/gloom.jpg' },
        { id: 27, name: 'Vileplume', type: 'Grass', image: 'https://img.pokemondb.net/artwork/large/vileplume.jpg' },
        { id: 28, name: 'Paras', type: 'Bug', image: 'https://img.pokemondb.net/artwork/large/paras.jpg' },
        { id: 29, name: 'Parasect', type: 'Bug', image: 'https://img.pokemondb.net/artwork/large/parasect.jpg' },
        { id: 30, name: 'Venonat', type: 'Bug', image: 'https://img.pokemondb.net/artwork/large/venonat.jpg' }
    ];

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.image}
                />
            ))}
        </div>
    );
};

export default PokemonList;
