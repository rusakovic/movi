import xor from 'lodash/xor';
import {Action, ActionType, HiddenMoviesInitialStateType} from './types';

const HiddenMoviesInitialState: HiddenMoviesInitialStateType = {
  isMoviesHiddenGlobal: false,
  hiddenMovies: [],
};

const HiddenMoviesReducer = (
  state = HiddenMoviesInitialState,
  action: Action,
): HiddenMoviesInitialStateType => {
  switch (action.type) {
    case ActionType.HiddenMovieToggleSucceeded:
      const movieId = action.id;

      // Remove 'id' from array if exists, add - if not.
      const toggledHiddenMovies = xor([movieId], state.hiddenMovies);
      return {
        ...state,
        hiddenMovies: toggledHiddenMovies,
      };
    case ActionType.HiddenMovieToggleGlobal:
      const previousGlobalHiddenMoviesState = state.isMoviesHiddenGlobal;
      return {
        ...state,
        isMoviesHiddenGlobal: !previousGlobalHiddenMoviesState,
      };
    default:
      return state;
  }
};

export default HiddenMoviesReducer;
