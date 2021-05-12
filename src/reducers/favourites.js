import actionTypes from "../actions/actionTypes"

const initialState = {
  favourites: [],
}

export const favourites = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_FAVOURITES_FINISHED:
      {
        const favourites = action.favourites;
        return { ...state, favourites }
      }
    default:
      return state
  }
}

export default favourites;