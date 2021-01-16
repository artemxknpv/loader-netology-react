import { actionTypes } from '../actions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START: {
      return { ...state, isLoading: true }
    }
    case actionTypes.LOADING_END: {
      return { ...state, isLoading: false}
    }
    default:
      return state
  }
}
