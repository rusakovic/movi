import {MovieDetailsType} from '@screens/SearchScreen/redux/types';

export enum ActionType {
  // HIDDEN MOVIE TOGGLE
  HiddenMovieToggleRequested = 'HiddenMovieToggleRequested',
  HiddenMovieToggleSucceeded = 'HiddenMovieToggleSucceeded',

  HiddenMovieToggleGlobal = 'HiddenMovieToggleGlobal',
}

export type HiddenMoviesInitialStateType = {
  isMoviesHiddenGlobal: boolean;
  hiddenMovies: MovieDetailsType['id'][];
};

// HIDDEN MOVIE TOGGLE
export type HiddenMovieToggleRequestedAction = {
  type: ActionType.HiddenMovieToggleRequested;
  id: MovieDetailsType['id'];
};

export type HiddenMovieToggleSucceededAction = {
  type: ActionType.HiddenMovieToggleSucceeded;
  id: HiddenMovieToggleRequestedAction['id'];
};

export type HiddenMovieToggleGlobalAction = {
  type: ActionType.HiddenMovieToggleGlobal;
};

export type Action =
  // HIDDEN MOVIE TOGGLE
  | HiddenMovieToggleRequestedAction
  | HiddenMovieToggleSucceededAction
  | HiddenMovieToggleGlobalAction;
