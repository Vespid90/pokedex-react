import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import PokemonDetail from './components/PokemonDetail'
import './styles/App.css'

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/pokemon/:id" element={<PokemonDetail />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App