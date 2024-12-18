import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img
                    src="./public/logo.png"
                    alt="Logo"
                    className="logo"
                />
            </div>
            <div className="navbar-search">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Rechercher par noms ou par numéros"
                />
                <button className="search-button">Go go gooo</button>
            </div>
        </nav>
    );
};

export default Navbar;


