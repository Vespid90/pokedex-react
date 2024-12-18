import { useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import { usePokemon } from '../hooks/usePokemon';

const Home = () => {
    const { pokemons } = usePokemon();

    useEffect(() => {
    }, [pokemons]);

    return (
        <div className="home-container">
            <h1>Pokédex</h1>

            <PokemonList />
        </div>
    );
};

export default Home;