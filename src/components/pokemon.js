import React, { Component } from "react";

export default class Pokemon extends Component {
  state = null;

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/gengar/")
      .then(res => res.json())
      .then(res => {
        this.setState(res);
      });
  }
  render() {
    const pokemon = this.state;
    const style = { textTransform: "capitalize" };
    return (
      <div>
        <h2>pokemon.js</h2>
        {pokemon ? (
          <>
            <img
              src={pokemon.sprites.front_default}
              alt={"Image of " + pokemon.name}
            />
            <p style={style}>Name: {pokemon.name}</p>
            <p style={style}>
              Type: {pokemon.types.map(x => x.type.name).join(", ")}
            </p>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}
