import Config from 'react-native-config';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {searchMovieFailed, searchMovieSucceeded} from './actions';
import {Action, ActionType, SearchMovieRequestedAction} from './types';
import axios, {AxiosResponse} from 'axios';
import {THE_MOVIE_DB_API_URL} from '../../../constants/defaultUrls';

export function* SearchMovieResultRequestedSaga({
  searchInput,
}: SearchMovieRequestedAction): Generator {
  try {
    const searchUrl = `${THE_MOVIE_DB_API_URL}?api_key=${Config.MOVIE_DB_API_KEY}&language=en-US&page=1&query=${searchInput}`;
    console.log('🚀 ~ file: sagas.ts ~ line 13 ~ searchUrl', searchUrl);
    const response = (yield call(axios.get, searchUrl)) as AxiosResponse;

    yield put(searchMovieSucceeded(response.data));
  } catch (error) {
    yield call(console.error, error);
    const errorMessage = `Movies not fetched => ${error.message}`;
    yield put(searchMovieFailed(errorMessage));
  }
}

export function* SearchMovieResultFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.SearchMovieRequested:
      yield call(SearchMovieResultRequestedSaga, action);
      break;

    default:
      break;
  }
}

function* SearchMovieResultSaga(): Generator {
  yield takeLatest(
    [ActionType.SearchMovieRequested],
    SearchMovieResultFlowSaga,
  );
}

export default SearchMovieResultSaga;
