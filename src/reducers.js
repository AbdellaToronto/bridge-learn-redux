import { combineReducers } from 'redux';
import { pokemonReducer } from './features/pokemon-list/pokemon-list.reducer';

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});
