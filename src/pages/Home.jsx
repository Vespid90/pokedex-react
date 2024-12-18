import { useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import { usePokemon } from '../hooks/usePokemon';

const Home = () => {
    const { pokemons } = usePokemon();

    useEffect(() => {
    }, [pokemons]);

    return (
        <div className="home-container">
            <PokemonList />
        </div>
    );
};

export default Home;