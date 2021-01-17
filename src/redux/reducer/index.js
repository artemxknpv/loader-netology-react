import { combineReducers } from 'redux'
import { loadingReducer } from './loading'
import { fetchListReducer } from './fetchList'

export const rootReducer = combineReducers({
  isLoading: loadingReducer,
  list: fetchListReducer,
})
