import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { actions, actionTypes } from '../actions';
import { fetchList } from '../tools/helpers';

function* fetchListWorker(action) {
  yield put(actions.loading.start())
  try {
    const response = yield call(fetchList, action.payload.url);
    yield delay(1000) // Для демонстрации лоадера
    yield put(actions.fetchList.success(response.data))
  } catch (e) {
    yield put(actions.fetchList.fail(e))
  }
  yield put(actions.loading.end())
}

export function* fetchListWatcher() {
  yield takeEvery(actionTypes.FETCH_LIST_START, fetchListWorker)
}