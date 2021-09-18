import {FavoriteMovieToggleRequestedAction} from '@screens/FavoritiesScreen/redux/types';
import {ActionType, Action} from './types';

// HIDDEN MOVIE TOGGLE
export const hiddenMovieToggleRequested = (
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.HiddenMovieToggleRequested,
  id,
});

export const hiddenMovieToggleSucceeded = (
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.HiddenMovieToggleSucceeded,
  id,
});

export const hiddenMovieToggleGlobal = () => ({
  type: ActionType.HiddenMovieToggleGlobal,
});
