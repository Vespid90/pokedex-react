import { useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import Favorites from '../pages/Favorites';
import {usePokemon} from '../hooks/usePokemon';
import '../styles/pages/Home.css';


const Home = () => {
    const { pokemons } = usePokemon();

    useEffect(() => {
    }, [pokemons]);

    return (
        <div className="home-container">
            <aside className="favorites-column">
                <Favorites/>
            </aside>
            <main className="pokemon-list-column">
                <PokemonList/>
            </main>
        </div>
    );
};

export default Home;