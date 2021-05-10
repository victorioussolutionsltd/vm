import initialState from "./initialState"
import actions from "../actions/actionTypes"
import { combineReducers } from 'redux';

export const images = (state = initialState.images, action) => {
  switch (action.type) {
    case actions.FETCHING_IMAGES_FINISHED:
      return action.images;
    default:
      return state
  }
}

const reducers = combineReducers({
  images,
})

export default reducers;

