import { all } from 'redux-saga/effects';
import movieSaga from 'features/movie/movieSaga';

export function* rootSaga() {
  yield all([...movieSaga]);
}
