import React, { Component } from "react";
import axios from "axios";
import "../styles/listPokemon.css";

class ClassListPokemon extends Component {
  state = {
    pokemons: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=964")
      .then(res => {
        //Emulating crappy internet in order to show Loading...
        setTimeout(() => {
          this.setState({ pokemons: res.data.results, isLoading: false });
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    return (
      <div className="pokemon-list">
        {this.state.pokemons.map(p => (
          <div
            className="pokemon-name"
            onClick={() => this.props.pokemonHandler(p.url)}
            key={p.name}
          >
            {p.name}
          </div>
        ))}
      </div>
    );
  }
}

export default ClassListPokemon;
