import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getAllPokemons } from '../services/api'

const PokemonContext = createContext()

export function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    )
    const [searchQuery, setSearchQuery] = useState('')
    const [isGlobalLoading, setIsGlobalLoading] = useState(true)

    useEffect(() => {
        const loadAllPokemons = async () => {
            try {
                const data = await getAllPokemons()
                setAllPokemons(data)
            } catch (error) {
                console.error('Erreur lors du chargement des pokemons:', error)
            } finally {
                setIsGlobalLoading(false)
            }
        }
        loadAllPokemons()
    }, [])

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
            allPokemons,
            favorites,
            addFavorite,
            removeFavorite,
            searchQuery,
            setSearchQuery,
            isGlobalLoading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default PokemonContext