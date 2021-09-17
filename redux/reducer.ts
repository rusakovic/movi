import {combineReducers} from 'redux';
import favoriteMoviesReducer from '../screens/FavoritiesScreen/redux/reducer';
import hiddenMovies from '../screens/HiddenMoviesScreen/redux/reducer';
import searchMovieResult from '../screens/SearchScreen/redux/reducer';

// REDUX store
export const rootReducer = combineReducers({
  searchMovieResult,
  favoriteMoviesReducer,
  hiddenMovies,
});

export type RootState = ReturnType<typeof rootReducer>;
