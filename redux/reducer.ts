import {combineReducers} from 'redux';
import searchMovieResult from '../screens/SearchScreen/redux/reducer';

// REDUX store
export const rootReducer = combineReducers({
  searchMovieResult,
});

export type RootState = ReturnType<typeof rootReducer>;
