import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Filters.css';

const Filter = ({ onFilterChange }) => {

    const pokemonTypes = [
        'all', 'normal', 'fire', 'water', 'electric', 'grass', 'ice',
        'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
        'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
    ];


    const generations = [
        { id: 'all', label: 'All Generations' },
        { id: '1', label: 'Gen 1 (1-151)' },
        { id: '2', label: 'Gen 2 (152-251)' },
        { id: '3', label: 'Gen 3 (252-386)' },
        { id: '4', label: 'Gen 4 (387-493)' },
        { id: '5', label: 'Gen 5 (494-649)' },
        { id: '6', label: 'Gen 6 (650-721)' },
        { id: '7', label: 'Gen 7 (722-809)' },
        { id: '8', label: 'Gen 8 (810-898)' },
        { id: '9', label: 'Gen 9 (899-1010)' }
    ];

    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);
    };

    return (
        <div className="filters-container">
            {/* Filtre par Type */}
            <div className="filter-section">
                <h3>Type</h3>
                <select
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="filter-select"
                >
                    {pokemonTypes.map(type => (
                        <option
                            key={type}
                            value={type}
                            className={`type-option ${type}`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filtre par Génération */}
            <div className="filter-section">
                <h3>Generation</h3>
                <select
                    onChange={(e) => handleFilterChange('generation', e.target.value)}
                    className="filter-select"
                >
                    {generations.map(gen => (
                        <option
                            key={gen.id}
                            value={gen.id}
                        >
                            {gen.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired
};

export default Filter;