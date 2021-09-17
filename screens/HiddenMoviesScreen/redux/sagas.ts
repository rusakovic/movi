import {call, put, takeLatest} from 'redux-saga/effects';
import {hiddenMovieToggleSucceeded} from './actions';
import {Action, ActionType, HiddenMovieToggleRequestedAction} from './types';

export function* HiddenMovieToggleSaga({
  id,
}: HiddenMovieToggleRequestedAction): Generator {
  yield put(hiddenMovieToggleSucceeded(id));
}

export function* HiddenMoviesFlowSaga(action: Action): Generator {
  switch (action.type) {
    case ActionType.HiddenMovieToggleRequested:
      yield call(HiddenMovieToggleSaga, action);
      break;

    default:
      break;
  }
}

function* HiddenMoviesSaga(): Generator {
  yield takeLatest(
    [ActionType.HiddenMovieToggleRequested],
    HiddenMoviesFlowSaga,
  );
}

export default HiddenMoviesSaga;
