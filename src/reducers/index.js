import { combineReducers } from 'redux';
import images from './images'
import favourites from './favourites'
import votes from './votes'
import upload from './upload'
import error from './error'

const reducers = combineReducers({
  images,
  favourites,
  votes,
  upload,
  error
})

export default reducers;

