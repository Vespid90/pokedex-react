import React from "react";
import PokemonList from "../components/PokemonList.jsx";
import "../styles/pages/Home.css";

const Home = () => {
    return (
        <div className="home">
            <h3>Page Home</h3>
            <p>Bienvenue blabla bla bla</p>
            <PokemonList />
        </div>
    );
};

export default Home;