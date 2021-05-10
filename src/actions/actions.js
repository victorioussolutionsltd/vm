import { POST, GET } from '../helpers/network'

export const fetchGallery = (data) => (dispatch) => {
  GET({ url: '/v1/images', data }, (err, res) => {
    if (!err) {

    } else {

    }
  })
}

export const uploadImage = (data) => (dispatch) => {
  POST({
    url: 'v1/images/upload', data, headers: {
      "content-type": "multipart/form-data;",
    }
  }, (err, res) => {
    if (!err) {

    } else {

    }
  })
}