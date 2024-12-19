import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { usePokemon } from '../hooks/usePokemon';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setSearchQuery } = usePokemon();

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (location.pathname !== '/') {
            navigate('/');
        }
    };

    const handleRefresh = () => {
        setSearchQuery('');
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div
                    className="navbar-brand"
                    onClick={handleRefresh}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src="/pokeball.png"
                        alt="Pokédex"
                        className="navbar-logo"
                    />
                    <span>Pokédex</span>
                </div>

                {/* Menu Hamburger pour mobile */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/*/!* Navigation Links *!/*/}
                {/*<div className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>*/}
                {/*    <Link*/}
                {/*        to="/"*/}
                {/*        className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}*/}
                {/*    >*/}
                {/*        Home*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        to="/favorites"*/}
                {/*        className={`navbar-link ${location.pathname === '/favorites' ? 'active' : ''}`}*/}
                {/*    >*/}
                {/*        Favorites*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/* Search Bar */}
                <div className="navbar-search">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;