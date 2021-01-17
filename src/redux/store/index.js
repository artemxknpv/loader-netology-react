import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducer'
import { rootSaga } from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const initialState = {
  isLoading: true,
  list: {
    items: [],
    error: null,
  },
}

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
