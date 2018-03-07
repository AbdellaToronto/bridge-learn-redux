import { UPDATE_FAVOURITE_POKEMON } from './pokemon-list.types';

export function createUpdateFavouritePokemonAction(pokemonName) {
  return {
    type: UPDATE_FAVOURITE_POKEMON,
    payload: {
      pokemonName,
    },
  };
}
