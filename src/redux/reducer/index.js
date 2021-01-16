import { actionTypes } from '../actions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START: {
      return { ...state, isLoading: true }
    }
    
    case actionTypes.LOADING_END: {
      return { ...state, isLoading: false}
    }
    
    case actionTypes.FETCH_LIST_SUCCESS: {
      return { ...state, list: action.payload }
    }
    
    case actionTypes.FETCH_LIST_FAIL: {
      return { ...state, error: action.payload }
    }
    
    default:
      return state
  }
}
