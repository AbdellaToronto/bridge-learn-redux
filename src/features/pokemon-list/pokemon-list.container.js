import { ClickableList } from '../../components/clickable-list';
import { connect } from 'react-redux';
import { createUpdateFavouritePokemonAction } from './pokemon-list.actions';

const mapStateToProps = state => ({
  data: state.pokemon.list.map(item => ({
    title: item.name,
  })),
});

const mapDispatchToProps = dispatch => ({
  onClickItem: item => dispatch(createUpdateFavouritePokemonAction(item.title)),
});

// Notice how my "connected" or "container" components don't have any markup, this is a best practice.

export const PokemonListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClickableList);
