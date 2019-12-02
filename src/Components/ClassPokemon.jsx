import React, { Component } from "react";
import CardPokemon from "../Components/CardPokemon";
import axios from "axios";
class ClassPokemon extends Component {
  state = {
    pokemon: null,
    isLoading: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPokemon !== this.props.selectedPokemon) {
      this.setState({ isLoading: true });
      axios
        .get(this.props.selectedPokemon)
        .then(res => {
          //Emulating crappy internet in order to show Loading...
          setTimeout(() => {
            this.setState({ pokemon: res.data, isLoading: false });
          }, 1000);
        })
        .catch(err => {
          console.log(err);
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    if (this.state.isLoading) return <div>Loading...</div>;
    if (!this.state.pokemon) return null;
    return (
      <div>
          <CardPokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default ClassPokemon;