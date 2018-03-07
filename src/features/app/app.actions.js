// Remember, thunks are just functions that return another function.
// It is not super obvious that fetchPokemons is a thunk, since it looks like it's just a function
// calling another function. However, pokemonRequest actually returns a function, see why in the expansions below.
// (2 & 3 are not part of the solution)

import { pokemonRequest } from '../../utils/pokemonRequest';
import { FETCH_POKEMONS } from '../pokemon-list/pokemon-list.types';

// Solution:
export const fetchPokemons = () =>
  pokemonRequest({ type: FETCH_POKEMONS, endpoint: 'pokemon' });

// Solution 2. Adds return statement to see that does have a return value.
export const fetchPokemons2 = () => {
  return pokemonRequest({ type: FETCH_POKEMONS, endpoint: 'pokemon' });
};

// Solution 3. Pastes values and pokemonRequest function to see how its a thunk.
export const fetchPokemons3 = () => {
  return dispatch => {
    dispatch({ type: FETCH_POKEMONS.START });
    return fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(
        data => {
          dispatch({ type: FETCH_POKEMONS.SUCCESS, payload: data });
        },
        error => {
          dispatch({ type: FETCH_POKEMONS.FAILURE });
        },
      )
      .catch(eror => {
        dispatch({ type: FETCH_POKEMONS.FAILURE });
      });
  };
};
