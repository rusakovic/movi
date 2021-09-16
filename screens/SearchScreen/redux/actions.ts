import {
  Action,
  ActionType,
  SearchMovieFailedAction,
  SearchMovieRequestedAction,
  SearchMovieSucceededAction,
} from './types';

// SEARCH MOVIE
export const searchMovieRequested = (
  searchInput: SearchMovieRequestedAction['searchInput'],
): Action => ({
  type: ActionType.SearchMovieRequested,
  searchInput,
});
export const searchMovieSucceeded = (
  data: SearchMovieSucceededAction['data'],
): Action => ({
  type: ActionType.SearchMovieSucceeded,
  data,
});

export const searchMovieFailed = (
  error: SearchMovieFailedAction['error'],
): Action => ({
  type: ActionType.SearchMovieFailed,
  error,
});
