import actionTypes from "../actions/actionTypes"

const initialState = {
  votes: [],
}

export const votes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SCORES:
      {
        const votes = action.votes;
        return { ...state, votes }
      }
    default:
      return state
  }
}

export default votes;