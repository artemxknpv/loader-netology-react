import { actionTypes } from '../actions'

const initialListState = {
  list: [],
  error: null,
}

export const fetchListReducer = (state = initialListState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS: {
      return { ...state, items: action.payload }
    }

    case actionTypes.FETCH_LIST_FAIL: {
      return { ...state, error: action.payload }
    }

    default:
      return state
  }
}
