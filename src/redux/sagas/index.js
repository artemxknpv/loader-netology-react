import { all } from 'redux-saga/effects'
import { fetchListWatcher } from './fetchList';

export function* rootSaga () {
  yield all([fetchListWatcher()])
}