import { POST, GET } from '../helpers/network'
import actionTypes from '../actions/actionTypes'

export const fetchGallery = (data) => (dispatch) => {

  dispatch({ type: actionTypes.FETCHING_IMAGES })

  GET({ url: '/v1/images', data }, (error, response) => {

    if (error) {
      dispatch({
        type: actionTypes.ERROR_OCCURRED,
        err: error,
      })
    } else {
      dispatch({
        type: actionTypes.FETCHING_IMAGES_FINISHED,
        images: response ? response : [],
      })
    }
  })
}

export const uploadImage = (data) => (dispatch) => {

  dispatch({ type: actionTypes.UPLOADING_PENDING })

  POST({
    url: 'v1/images/upload', data, headers: {
      "content-type": "multipart/form-data;",
    }
  }, (error, response) => {
    error ? dispatch({
      type: actionTypes.ERROR_OCCURRED,
      err: error,
    }) : dispatch({
      type: actionTypes.FETCHING_IMAGES_FINISHED
    })
  })
}