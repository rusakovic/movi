import {Action, ActionType, FavoriteMoviesInitialStateType} from './types';
import {addRemovedFavoriteMovie} from './utils';

const FavoriteMoviesInitialState: FavoriteMoviesInitialStateType = {
  favoritesMovies: {},
};

const FavoriteMoviesReducer = (
  state = FavoriteMoviesInitialState,
  action: Action,
): FavoriteMoviesInitialStateType => {
  switch (action.type) {
    case ActionType.FavoriteMovieToggleSucceeded:
      const movieId = action.id;
      const movieData = action.movieData;
      console.log('state.favoritesMovies', state.favoritesMovies);
      const updatedFavorites = addRemovedFavoriteMovie(
        state.favoritesMovies,
        movieId,
        movieData,
      );
      console.log(
        '🚀 ~ file: reducer.ts ~ line 22 ~ updatedFavorites',
        updatedFavorites,
      );
      return {
        favoritesMovies: updatedFavorites,
      };

    default:
      return state;
  }
};

export default FavoriteMoviesReducer;
