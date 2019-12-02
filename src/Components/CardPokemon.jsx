import React from "react";
import "../styles/pokemonCard.css";
const CardPokemon = ({ pokemon }) => {
  return (
    <div className="card pokemon">
      <p>Weight {pokemon.weight}</p>
      <div className="pokemon-types">
        <h4>Types:&nbsp;</h4>
        {pokemon.types.map((type, i) => (
          <p className="pokemon-description" key={i}>
            {type.type.name}
          </p>
        ))}
      </div>
      <h4>Sprites</h4>
      <div className="pokemon-images">
        {Object.keys(pokemon.sprites).map(
          (sprite, i) =>
            pokemon.sprites[sprite] && (
              <img
                className="pokemon-image"
                key={i}
                src={pokemon.sprites[sprite]}
                alt={pokemon.name + i}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CardPokemon;
