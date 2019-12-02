import React from "react";
import CardPokemon from "./CardPokemon";
import { usePokemon } from "../hooks/usePokemon";

const HookPokemon = ({ selectedPokemon }) => {
  const [data, isLoading] = usePokemon(selectedPokemon);
  const pokemon = data;

  if (isLoading) return <div>Loading...</div>;
  if (!pokemon) return null;
  return (
    <div>
      <CardPokemon pokemon={pokemon} />
    </div>
  );
};

export default HookPokemon;
