import {RootState} from '../../../redux/reducer';
import {SearchMovieDataType, SearchMovieResultInitialStateType} from './types';

export const searchMovieResultSelector = ({
  searchMovieResult,
}: RootState): SearchMovieResultInitialStateType => searchMovieResult;

export const searchMovieResultDataResultsSelector = ({
  searchMovieResult: {
    data: {results},
  },
}: RootState): SearchMovieDataType['results'] => results;
