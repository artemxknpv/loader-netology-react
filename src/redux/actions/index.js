export const actionTypes = {
  FETCH_LIST_START: 'FETCH_LIST_START',
  FETCH_LIST_SUCCESS: 'FETCH_LIST_SUCCESS',
  FETCH_LIST_FAIL: 'FETCH_LIST_FAIL',
  LOADING_START: 'LOADING_START',
  LOADING_END: 'LOADING_END'
}

export const actions = {
  fetchList: {
    start: payload => ({
      type: actionTypes.FETCH_LIST_START,
      payload
    }),
    success: payload => ({
      type: actionTypes.FETCH_LIST_SUCCESS,
      payload
    }),
    fail: payload => ({
      type: actionTypes.FETCH_LIST_FAIL,
      payload,
      error: true,
    }),
  },
  loading: {
    start: () => ({
      type: actionTypes.LOADING_START
    }),
    end: () => ({
      type: actionTypes.LOADING_END
    })
  },
}