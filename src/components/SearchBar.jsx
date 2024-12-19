import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm.trim());
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="search-container">
            <form className="search-input-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Rechercher un Pokémon..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                {searchTerm && (
                    <button
                        type="button"
                        className="clear-button"
                        onClick={() => {
                            setSearchTerm('');
                            onSearch('');
                        }}
                    >
                    </button>
                )}
                <button type="submit" className="search-button">
                    🔍
                </button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;