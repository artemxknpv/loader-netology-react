import { actionTypes } from '../actions'

export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START: {
      return true
    }

    case actionTypes.LOADING_END: {
      return false
    }

    default:
      return state
  }
}
