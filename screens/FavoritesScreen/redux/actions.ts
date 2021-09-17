import {MovieDetailsType} from '../../SearchScreen/redux/types';
import {FavoriteMovieToggleRequestedAction, ActionType, Action} from './types';

// FAVORITE MOVIE TOGGLE
export const favoriteMovieToggleRequested = (
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.FavoriteMovieToggleRequested,
  id,
});

export const favoriteMovieToggleSucceeded = (
  movieData: MovieDetailsType,
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.FavoriteMovieToggleSucceeded,
  movieData,
  id,
});
