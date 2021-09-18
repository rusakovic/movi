import cloneDeep from 'lodash/cloneDeep';
import {
  MoviesCollection,
  MovieDetailsType,
} from '@screens/SearchScreen/redux/types';

import {FavoriteMovieToggleRequestedAction} from './types';

export const addRemovedFavoriteMovie = (
  favoritesMovies: MoviesCollection,
  movieId: FavoriteMovieToggleRequestedAction['id'],
  movieData: MovieDetailsType,
) => {
  const favoritesMoviesStateClone = cloneDeep(favoritesMovies);

  if (favoritesMoviesStateClone.hasOwnProperty(movieId)) {
    delete favoritesMoviesStateClone[movieId];
    return favoritesMoviesStateClone;
  } else {
    return {
      ...favoritesMoviesStateClone,
      [movieId]: movieData,
    };
  }
};
