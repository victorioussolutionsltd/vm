import { DELETE, POST, GET } from '../helpers/network'
import actionTypes from '../actions/actionTypes'

const sub_id = "user-1-2-3"

export const showError = (message) => (dispatch) => {
  dispatch({ type: actionTypes.SHOW_ERROR, message })
}

export const hideError = () => (dispatch) => dispatch({ type: actionTypes.CLEAN_ERROR });

export const getTotalImages = (data) => (dispatch) => {

  GET({ url: '/v1/images', data }, (error, response, responseHeaders) => {

    if (error) {
      dispatch(showError(error.message))
    } else {
      dispatch({
        type: actionTypes.UPDATE_PAGINATION_COUNT,
        total: responseHeaders.get('Pagination-Count')
      })
    }
  })
}


export const fetchGallery = (data) => (dispatch) => {

  dispatch({ type: actionTypes.FETCHING_IMAGES })

  GET({ url: '/v1/images', data }, (error, response) => {
    if (error) {
      dispatch(showError(error.message))
    } else {
      dispatch({
        type: actionTypes.FETCHING_IMAGES_FINISHED,
        images: response ? response : [],
      })
    }
  })
}

export const uploadImage = (data) => (dispatch) => {
  POST({
    url: '/v1/images/upload', data
  }, (error, response) => {
    if (error) {
      dispatch(showError(error.message));
      dispatch({
        type: actionTypes.UPLOAD_RESET
      })
    }
    else {
      dispatch({
        type: actionTypes.UPLOAD_IMAGE_FINISHED
      })
    }
  })
}

export const getFavourites = (data) => (dispatch) => {

  GET({ url: '/v1/favourites', data }, (error, response) => {

    if (error) {
      dispatch(showError(error.message))
    } else {
      dispatch({
        type: actionTypes.FETCH_ALL_FAVOURITES_FINISHED,
        favourites: response
      })
    }
  })
}


export const saveFavourite = (image_id, callback) => (dispatch) => {
  const data = JSON.stringify({
    image_id,
    sub_id
  });

  POST({
    url: '/v1/favourites', data, headers: {
      "content-type": "application/json"
    }
  }, (error, response) => {
    if (error) {
      dispatch(showError(error.message));
    }
    else {
      callback(response.id)
      dispatch({
        type: actionTypes.ADD_FAVOURITE,
      })
    }
  })
}

export const removeFavourite = (favourite_id) => (dispatch) => {
  DELETE({
    url: `/v1/favourites/${favourite_id}`
  }, (error, response) => {
    if (error) {
      dispatch(showError(error.message));
    }
    else {
      dispatch({
        type: actionTypes.REMOVE_FAVOURITE,
        favourite_id: favourite_id
      })
    }
  })
}

export const updateVote = ({ image_id, value }) => (dispatch) => {
  var data = JSON.stringify({
    image_id,
    sub_id,
    value
  });

  POST({
    url: '/v1/votes', data, headers: {
      "content-type": "application/json"
    }
  }, (error, response) => {
    if (error) {
      dispatch(showError(error.message));
    }
    else {
      dispatch({
        type: actionTypes.UPDATE_SCORE,
      })
    }
  })
}

export const getVotes = (data) => (dispatch) => {

  GET({ url: '/v1/votes', data }, (error, response) => {
    if (error) {
      dispatch(showError(error.message))
    } else {
      dispatch({
        type: actionTypes.GET_SCORES,
        votes: response ? response : [],
      })
    }
  })
}


export const resetUpload = () => (dispatch) => dispatch({ type: actionTypes.UPLOAD_RESET })