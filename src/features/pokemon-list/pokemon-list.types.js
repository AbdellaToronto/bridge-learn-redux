export const UPDATE_FAVOURITE_POKEMON = 'FAVOURITE_POKEMON';

// FETCH_POKEMONS is an example of a pattern you might see with async redux types.
// It's not a rule, but when used with pokemonRequest, it can be easy to make hook
// up redux to our backend api's.

export const FETCH_POKEMONS = {
  START: 'FETCH_POKEMONS_START',
  SUCCESS: 'FETCH_POKEMONS_SUCCESS',
  FAILURE: 'FETCH_POKEMONS_FAILURE',
};
