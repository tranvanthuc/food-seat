import { call, put, takeLatest } from 'redux-saga/effects';
import MovieService from 'services/MovieService';
import { getListSuccess, getListFailure, getListRequest } from './movieSlice';

export function* getListMovies() {
  try {
    const { data } = yield call(MovieService.getList);
    yield put(getListSuccess(data.results));
  } catch (error) {
    yield put(getListFailure(error));
  }
}

function* watchGetList() {
  yield takeLatest(getListRequest.type, getListMovies);
}

const saga = [watchGetList()];

export default saga;
