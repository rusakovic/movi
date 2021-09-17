import {all} from 'redux-saga/effects';
import FavoritesSaga from '../screens/FavoritesScreen/redux/sagas';
import SearchMovieResultSaga from '../screens/SearchScreen/redux/sagas';

export default function* rootSaga(): Generator {
  yield all([SearchMovieResultSaga(), FavoritesSaga()]);
}
