import React, { useState } from "react";
import Pokemon from "./Pokemon";

const PokemonsList = () => {
    const [pokemons, setpokemons] = useState([
        {
        id: 1,
        name: "Charmander ",
        type: "Fire",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
        },
        {
        id: 2,
        name: "Bulbasaur",
        type: "Grass",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
        },
        {
        id: 3,
        name: "Squirtle ",
        type: "Water",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20160309230820/Squirtle.png",
        },
    ]);

    return (
        <div className="row">
        {pokemons.map((pokemon, index) => {
            return (
            <Pokemon
                key={pokemon.index}
                name={pokemon.name}
                image={pokemon.img}
                type={pokemon.type}
                />
            );
        })}
        </div>
    );
};

export default PokemonsList;
