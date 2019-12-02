import React, { Component } from "react";
import ClassListPokemon from "../Components/ClassListPokemon";
import ClassPokemon from "../Components/ClassPokemon";

class UsingAsync extends Component {
  state = {
    selectedPokemon: null
  };

  handleSelectedPokemon = url => {
    this.setState({ selectedPokemon: url });
  };

  render() {
    return (
      <section className="container">
        <h1 className="title">Lets get some Pokemons !</h1>
        <div className="d-flex">
          <ClassListPokemon pokemonHandler={this.handleSelectedPokemon} />
          {this.state.selectedPokemon && (
            <ClassPokemon selectedPokemon={this.state.selectedPokemon} />
          )}
        </div>
      </section>
    );
  }
}

export default UsingAsync;
