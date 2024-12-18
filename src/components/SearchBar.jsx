import { useState } from 'react';
import '../styles/components/SearchBar.css';
import PropTypes from 'prop-types';



const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">
                🔍
            </button>
        </form>
    );
};


SearchBar.propTypes = {
    onSearch: PropTypes.func
};

SearchBar.defaultProps = {
    onSearch: () => {}
};

export default SearchBar;