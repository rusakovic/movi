import {SearchMovieDataType} from './types';
import keyBy from 'lodash/keyBy';

export const searchMoviesDataConverter = (
  data: SearchMovieDataType,
): SearchMovieDataType => {
  const moviesWithIDs = keyBy(data.results, 'id');

  const returnedData = {
    ...data,
    results: moviesWithIDs,
  };

  return returnedData;
};
