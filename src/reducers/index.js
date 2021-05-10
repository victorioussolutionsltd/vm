import initialState from "./initialState"
import actionTypes from "../actions/actionTypes"
import { combineReducers } from 'redux';

export const images = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES:
      {
        const loading = true;
        return { ...state, loading };
      }
    case actionTypes.FETCHING_IMAGES_FINISHED:
      {
        const loading = false;
        const images = action.images;
        return { ...state, loading, images }
      };
    default:
      return state
  }
}

const reducers = combineReducers({
  images,
})

export default reducers;

