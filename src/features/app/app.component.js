import React from 'react';
import { PokemonCard } from '../pokemon-card/pokemon-card.component';
import { PokemonListContainer } from '../pokemon-list/pokemon-list.container';

export const App = ({ hasFavouritePokemon, favouritePokemon }) => (
  <div>
    <h1>Pokemon App!</h1>
    {hasFavouritePokemon && <PokemonCard pokemonName={favouritePokemon} />}
    <PokemonListContainer />
  </div>
);
