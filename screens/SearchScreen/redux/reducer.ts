import {Action, ActionType, SearchMovieResultInitialStateType} from './types';

const SearchMovieResultInitialState: SearchMovieResultInitialStateType = {
  isLoading: false,
  isFailed: false,
  data: null,
  errorMessage: null,
};

const SearchMovieResultReducer = (
  state = SearchMovieResultInitialState,
  action: Action,
): SearchMovieResultInitialStateType => {
  switch (action.type) {
    case ActionType.SearchMovieRequested:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.SearchMovieSucceeded:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default SearchMovieResultReducer;
