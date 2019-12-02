import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/listPokemon.css";

const HookListPokemon = ({ pokemonHandler }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=964")
      .then(res => {
        setTimeout(() => {
          setPokemons(res.data.results);
          setLoading(false);
        },1000);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div className="pokemon-list">
      {pokemons.map(p => (
        <div
          className="pokemon-name"
          onClick={() => pokemonHandler(p.url)}
          key={p.name}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
};

export default HookListPokemon;