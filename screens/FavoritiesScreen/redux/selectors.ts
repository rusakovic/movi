import {RootState} from '@redux/reducer';
import {FavoriteMoviesInitialStateType} from './types';

export const favoriteMoviesSelector = ({
  favoriteMoviesReducer: {favoritesMovies},
}: RootState): FavoriteMoviesInitialStateType['favoritesMovies'] =>
  favoritesMovies;
