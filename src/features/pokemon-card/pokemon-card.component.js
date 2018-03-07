import React from 'react';

export const PokemonCard = ({ pokemonName = 'Abdella', height = '183 cm' }) => (
  <div style={{ width: '80vw', marginLeft: 'auto' }}>
    <h2>{pokemonName}</h2>
    <img
      alt="pokemon"
      src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}
    />
    <h4>Height: {height}</h4>
  </div>
);
