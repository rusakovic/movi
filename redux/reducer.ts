import {combineReducers} from 'redux';
import favoriteMoviesReducer from '../screens/FavoritiesScreen/redux/reducer';
import searchMovieResult from '../screens/SearchScreen/redux/reducer';

// REDUX store
export const rootReducer = combineReducers({
  searchMovieResult,
  favoriteMoviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
