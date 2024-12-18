import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-brand">
                    <img
                        src="/pokemon-1635610_640.svg"
                        alt="Pokédex"
                        className="navbar-logo"
                    />
                    <span>Pokédex</span>
                </Link>

                {/* Menu Hamburger pour mobile */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
                    <Link
                        to="/"
                        className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/favorites"
                        className={`navbar-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                    >
                        Favorites
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="navbar-search">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;