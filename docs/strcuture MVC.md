pokedex/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── main.jsx                    # POint d'entrée
│   ├── App.jsx                     # Composants racine
│   ├── styles/
│   │   ├── index.css               # Styles globaux
│   │   ├── App.css                 # Styles pour App.jsx
│   │   ├── components/             # Styles des composants
│   │   │   ├── Navbar.css          # Style navigation
│   │   │   ├── PokemonCard.css     # Style carte Pokémon
│   │   │   ├── PokemonList.css     # Style liste Pokémons
│   │   │   ├── PokemonDetail.css   # Style détails Pokémon
│   │   │   ├── SearchBar.css       # Style barre recherche
│   │   │   └── Filters.css         # Style filtres
│   │   └── pages/
│   │       ├── Home.css            # Style page d'accueil
│   │       └── Favorites.css       # Style page des favoris
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation principale
│   │   ├── PokemonCard.jsx         # Carte individuelle Pokémon
│   │   ├── PokemonList.jsx         # Liste des Pokémons
│   │   ├── PokemonDetail.jsx       # Vue détaillée Pokémon
│   │   ├── SearchBar.jsx           # Barre de recherche
│   │   └── Filters.jsx             # Filtres de recherche
│   ├── pages/
│   │   ├── Home.jsx                # Page d'accueil (liste Pokémons)
│   │   └── Favorites.jsx           # Page des favoris
│   ├── context/
│   │   └── PokemonContext.jsx      # Gestion de l'état global avec React Context; Stock des Pokémons ; Gestion des favoris ;État de recherche/filtres
│   └── services/
│       └── api.js                  # Communication avec l'API ; Requêtes vers PokeAPI ; Traitement des données ; Gestion des erreurs
└── vite.config.js
