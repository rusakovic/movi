import {all} from 'redux-saga/effects';
import SearchMovieResultSaga from '../screens/SearchScreen/redux/sagas';

export default function* rootSaga(): Generator {
  yield all([SearchMovieResultSaga()]);
}
