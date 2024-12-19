import { useEffect, useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from './PokemonCard';
import Filter from './Filter';
import { getPokemons } from '../services/api';
import '../styles/components/PokemonList.css';

const PokemonList = () => {
    const { pokemons, setPokemons, searchQuery } = usePokemon();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        type: 'all',
        generation: 'all'
    });

    const ITEMS_PER_PAGE = 40;
    const TOTAL_POKEMON = 1010;
    const TOTAL_PAGES = Math.ceil(TOTAL_POKEMON / ITEMS_PER_PAGE);

    useEffect(() => {
        fetchPokemons();
    }, [currentPage]);

    const fetchPokemons = async () => {
        try {
            setIsLoading(true);
            const offset = (currentPage - 1) * ITEMS_PER_PAGE;
            const newPokemons = await getPokemons(ITEMS_PER_PAGE, offset);
            setPokemons(newPokemons);
            window.scrollTo(0, 0);
        } catch (err) {
            setError('Error loading Pokémon');
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
        setCurrentPage(1);
    };

    //filtre pokemon
    const getFilteredPokemons = () => {
        return pokemons.filter(pokemon => {

            const searchMatch = searchQuery
                ? pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
                : true;

            const typeMatch = filters.type === 'all' ||
                pokemon.types.some(t => t.type.name === filters.type);

            let genMatch = true;
            if (filters.generation !== 'all') {
                const id = pokemon.id;
                const genRanges = {
                    '1': [1, 151],
                    '2': [152, 251],
                    '3': [252, 386],
                    '4': [387, 493],
                    '5': [494, 649],
                    '6': [650, 721],
                    '7': [722, 809],
                    '8': [810, 898],
                    '9': [899, 1010]
                };
                const range = genRanges[filters.generation];
                genMatch = id >= range[0] && id <= range[1];
            }

            return searchMatch && typeMatch && genMatch;
        });
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= TOTAL_PAGES) {
            setCurrentPage(newPage);
        }
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(TOTAL_PAGES, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        pages.push(
            <button
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                ←
            </button>
        );

        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className="pagination-button"
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(<span key="dots1">...</span>);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`pagination-button ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }

        if (endPage < TOTAL_PAGES) {
            if (endPage < TOTAL_PAGES - 1) {
                pages.push(<span key="dots2">...</span>);
            }
            pages.push(
                <button
                    key={TOTAL_PAGES}
                    onClick={() => handlePageChange(TOTAL_PAGES)}
                    className="pagination-button"
                >
                    {TOTAL_PAGES}
                </button>
            );
        }

        pages.push(
            <button
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === TOTAL_PAGES}
                className="pagination-button"
            >
                →
            </button>
        );

        return pages;
    };

    const filteredPokemons = getFilteredPokemons();

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="pokemon-list-container">
            <div className="search-and-filters">
                <Filter onFilterChange={handleFilterChange} />
            </div>

            {!isLoading && filteredPokemons.length > 0 && (
                <div className="pagination top-pagination">
                    {renderPagination()}
                </div>
            )}

            <div className="pokemon-grid">
                {filteredPokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))}
            </div>

            {isLoading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Chargement des Pokémon...</p>
                </div>
            )}

            {!isLoading && filteredPokemons.length === 0 && (
                <div className="no-results">
                    Aucun Pokémon trouvé avec ces filtres
                </div>
            )}

            {!isLoading && filteredPokemons.length > 0 && (
                <div className="pagination bottom-pagination">
                    {renderPagination()}
                </div>
            )}
        </div>
    );
};

export default PokemonList;