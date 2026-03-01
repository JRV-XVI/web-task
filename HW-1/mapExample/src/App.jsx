import "./App.css";
import React from "react";
import PokemonList from "./components/pokemons/PokemonList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
