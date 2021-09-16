import {RootState} from '../../../redux/reducer';
import {SearchMovieResultInitialStateType} from './types';

export const searchMovieResultSelector = ({
  searchMovieResult,
}: RootState): SearchMovieResultInitialStateType => searchMovieResult;
