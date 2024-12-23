import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

//créer une instance axios avec un timeout et une retry logic
const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export const getAllPokemons = async () => {
    try {
        const response = await api.get('/pokemon?limit=1010');

        const pokemonData = await Promise.all(
            response.data.results.map(async pokemon => {
                try {
                    const pokemonDetails = await fetchPokemonWithRetry(pokemon.url);
                    const speciesResponse = await fetchPokemonWithRetry(pokemonDetails.species.url);

                    const frenchName = speciesResponse.names.find(
                        name => name.language.name === 'fr'
                    )?.name || pokemonDetails.name;

                    return {
                        id: pokemonDetails.id,
                        name: frenchName,
                        types: pokemonDetails.types,
                        sprites: pokemonDetails.sprites
                    };
                } catch (error) {
                    console.error(`Error fetching details for ${pokemon.name}:`, error);
                    return null;
                }
            })
        );

        return pokemonData.filter(pokemon => pokemon !== null);
    } catch (error) {
        console.error('Erreur de récupération des pokemons:', error);
        throw error;
    }
};

const fetchPokemonWithRetry = async (url, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Attente exponential
        }
    }
};

export const getPokemons = async (limit = 40, offset = 0) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

        const pokemonData = await Promise.all(
            response.data.results.map(async pokemon => {
                try {
                    const pokemonDetails = await fetchPokemonWithRetry(pokemon.url);
                    const speciesResponse = await fetchPokemonWithRetry(pokemonDetails.species.url);

                    const frenchName = speciesResponse.names.find(
                        name => name.language.name === 'fr'
                    )?.name || pokemonDetails.name;

                    return {
                        ...pokemonDetails,
                        name: frenchName
                    };
                } catch (error) {
                    console.error(`Error fetching details for ${pokemon.name}:`, error);
                    return null;
                }
            })
        );

        return pokemonData.filter(pokemon => pokemon !== null);
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        throw error;
    }
};

export const getPokemonById = async (id) => {
    try {
        const pokemonDetails = await fetchPokemonWithRetry(`/pokemon/${id}`);
        const speciesResponse = await fetchPokemonWithRetry(pokemonDetails.species.url);

        const frenchName = speciesResponse.names.find(
            name => name.language.name === 'fr'
        )?.name || pokemonDetails.name;

        return {
            ...pokemonDetails,
            name: frenchName
        };
    } catch (error) {
        console.error('Error fetching pokemon:', error);
        throw error;
    }
};