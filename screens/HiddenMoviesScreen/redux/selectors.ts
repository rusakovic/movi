import {RootState} from '@redux/reducer';
import {HiddenMoviesInitialStateType} from './types';

export const hiddenMoviesSelector = ({
  hiddenMovies: {hiddenMovies},
}: RootState): HiddenMoviesInitialStateType['hiddenMovies'] => hiddenMovies;

export const isHiddenMoviesGlobalSelector = ({
  hiddenMovies: {isMoviesHiddenGlobal},
}: RootState): HiddenMoviesInitialStateType['isMoviesHiddenGlobal'] =>
  isMoviesHiddenGlobal;
