import {call, put, select, takeLatest} from 'redux-saga/effects';
import {searchMovieResultDataResultsSelector} from '../../SearchScreen/redux/selectors';
import {SearchMovieDataType} from '../../SearchScreen/redux/types';
import {favoriteMovieToggleSucceeded} from './actions';
import {Action, ActionType, FavoriteMovieToggleRequestedAction} from './types';

export function* FavoriteMovieToggleSaga({
  id,
}: FavoriteMovieToggleRequestedAction): Generator {
  console.log('🚀 ~ file: sagas.ts ~ line 10 ~ id', id);
  const moviesData = (yield select(
    searchMovieResultDataResultsSelector,
  )) as SearchMovieDataType['results'];
  const favoriteMovieData = moviesData[id];
  yield put(favoriteMovieToggleSucceeded(favoriteMovieData, id));
}

export function* FavoritesFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.FavoriteMovieToggleRequested:
      yield call(FavoriteMovieToggleSaga, action);
      break;
    default:
      break;
  }
}

function* FavoritesSaga(): Generator {
  yield takeLatest(
    [ActionType.FavoriteMovieToggleRequested],
    FavoritesFlowSaga,
  );
}

export default FavoritesSaga;
