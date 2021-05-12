import actionTypes from "../actions/actionTypes"

const initialState = {
  images: [],
  loading: false,
  total: 0
}

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
    case actionTypes.UPDATE_PAGINATION_COUNT:
      {
        const total = action.total;
        return { ...state, total }
      }
    default:
      return state
  }
}

export default images;