import React from 'react';
import './styles/App.css';
import NavBar from './components/Navbar.jsx';
import Favorites from './pages/Favorites.jsx';
import Home from './pages/Home.jsx';

function App() {
    return (
        <div>
            <NavBar />
            <div className="content-container">
                <Favorites />
                <Home />
            </div>
        </div>
    );
}

export default App;
