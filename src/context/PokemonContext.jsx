import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const PokemonContext = createContext()

export function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([])
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    )
    const [searchQuery, setSearchQuery] = useState('') // Ajout de l'état de recherche

    const addFavorite = (pokemon) => {
        const newFavorites = [...favorites, pokemon]
        setFavorites(newFavorites)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }

    const removeFavorite = (pokemonId) => {
        const newFavorites = favorites.filter(p => p.id !== pokemonId)
        setFavorites(newFavorites)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }

    return (
        <PokemonContext.Provider value={{
            pokemons,
            setPokemons,
            favorites,
            addFavorite,
            removeFavorite,
            searchQuery,    // Ajout de la valeur de recherche
            setSearchQuery  // Ajout de la fonction pour mettre à jour la recherche
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default PokemonContext