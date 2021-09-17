import cloneDeep from 'lodash/cloneDeep';
import {
  MoviesCollection,
  MovieDetailsType,
} from '../../SearchScreen/redux/types';
import {FavoriteMovieToggleRequestedAction} from './types';

export const addRemovedFavoriteMovie = (
  favoritesMovies: MoviesCollection,
  movieId: FavoriteMovieToggleRequestedAction['id'],
  movieData: MovieDetailsType,
) => {
  let favoritesMoviesStateClone = cloneDeep(favoritesMovies);

  if (favoritesMoviesStateClone.hasOwnProperty(movieId)) {
    delete favoritesMoviesStateClone[movieId];
  } else {
    favoritesMoviesStateClone = {
      ...favoritesMoviesStateClone,
      [movieId]: movieData,
    };
  }

  return favoritesMoviesStateClone;
};
