import actionTypes from "../actions/actionTypes"

const initialState = {
  show: false,
  message: "",
}

export const error = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ERROR:
      {
        const show = true;
        const message = action.message;
        return { ...state, show, message };
      }
    case actionTypes.CLEAN_ERROR:
      {
        const show = false;
        const message = "";
        return { ...state, show, message }
      };
    default:
      return state
  }
}

export default error;