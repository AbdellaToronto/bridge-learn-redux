import { connect } from 'react-redux';
import { App } from './app.component';
import { isNil } from 'ramda';

// Check out ramda for some awesome utily functions!
// We could have also used "double bang" (!!) to get a boolean value
// (I try to avoid "truthy" and "falsy" values)

const mapStateToProps = ({ pokemon }) => ({
  hasFavouritePokemon: !isNil(pokemon.favouritePokemon),
  favouritePokemon: pokemon.favouritePokemon,
});

// Notice how my "connected" or "container" components don't have any markup, this is a best practice.

export const AppContainer = connect(mapStateToProps)(App);
