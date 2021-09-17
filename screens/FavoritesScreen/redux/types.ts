import {
  MovieDetailsType,
  MoviesCollection,
} from '../../SearchScreen/redux/types';

export enum ActionType {
  // FAVORITE MOVIE TOGGLE
  FavoriteMovieToggleRequested = 'FavoriteMovieToggleRequested',
  FavoriteMovieToggleSucceeded = 'FavoriteMovieToggleSucceeded',
}

export type FavoriteMoviesInitialStateType = {
  favoritesMovies: MoviesCollection;
};

// FAVORITE MOVIE TOGGLE
export type FavoriteMovieToggleRequestedAction = {
  type: ActionType.FavoriteMovieToggleRequested;
  id: MovieDetailsType['id'];
};

export type FavoriteMovieToggleSucceededAction = {
  type: ActionType.FavoriteMovieToggleSucceeded;
  movieData: MovieDetailsType;
  id: FavoriteMovieToggleRequestedAction['id'];
};

export type Action =
  // FAVORITE MOVIE TOGGLE
  FavoriteMovieToggleRequestedAction | FavoriteMovieToggleSucceededAction;
