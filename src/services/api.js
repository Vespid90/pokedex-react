import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

export const getPokemons = async (limit = 60, offset = 0) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)

        const pokemonData = await Promise.all(
            response.data.results.map(async pokemon => {

                const pokemonDetails = await axios.get(pokemon.url)

                const speciesResponse = await axios.get(pokemonDetails.data.species.url)
                const frenchName = speciesResponse.data.names.find(
                    name => name.language.name === 'fr'
                )?.name || pokemonDetails.data.name

                return {
                    ...pokemonDetails.data,
                    name: frenchName
                }
            })
        )
        return pokemonData
    } catch (error) {
        console.error('Error fetching pokemons:', error)
        throw error
    }
}

export const getPokemonById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/${id}`)

        const speciesResponse = await axios.get(response.data.species.url)
        const frenchName = speciesResponse.data.names.find(
            name => name.language.name === 'fr'
        )?.name || response.data.name

        return {
            ...response.data,
            name: frenchName
        }
    } catch (error) {
        console.error('Error fetching pokemon:', error)
        throw error
    }
}