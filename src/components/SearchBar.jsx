// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import '../styles/components/SearchBar.css';
//
// const SearchBar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//
//     // Gérer la saisie dans la barre de recherche
//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//
//         if (value.length >= 2) {
//             onSearch(value);
//             setIsOpen(true);
//         } else {
//             setSuggestions([]);
//             setIsOpen(false);
//         }
//     };
//
//     // Gérer la sélection d'une suggestion
//     const handleSuggestionClick = (pokemonName) => {
//         setSearchTerm(pokemonName);
//         setIsOpen(false);
//         onSearch(pokemonName);
//     };
//
//     // Fermer les suggestions si on clique en dehors
//     useEffect(() => {
//         const handleClickOutside = () => setIsOpen(false);
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);
//
//     return (
//         <div className="search-container" onClick={(e) => e.stopPropagation()}>
//             <div className="search-input-container">
//                 <input
//                     type="text"
//                     className="search-input"
//                     placeholder="Rechercher un Pokémon..."
//                     value={searchTerm}
//                     onChange={handleInputChange}
//                     onClick={() => searchTerm.length >= 2 && setIsOpen(true)}
//                 />
//                 {searchTerm && (
//                     <button
//                         className="clear-button"
//                         onClick={() => {
//                             setSearchTerm('');
//                             setSuggestions([]);
//                             onSearch('');
//                         }}
//                     >
//                         ×
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// SearchBar.propTypes = {
//     onSearch: PropTypes.func.isRequired
// };
//
// export default SearchBar;

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
                        ×
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