const initialState = {
  fetchListing: false,
}
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LISTING':
      return Object.assign({}, state, {
        fetchListing: action.payload,
      })
    default:
      return state
  }
}
