import actionTypes from "../actions/actionTypes"

export const uploadingStatus = {
  NO_ACTION: "NO_ACTION",
  LOADING: "LOADING",
  FINISHED_LOADING: "FINISHED_LOADING",
}
const initialState = {
  uploading: uploadingStatus.NO_ACTION,
}

export const upload = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_RESET:
      {
        const uploading = uploadingStatus.NO_ACTION;
        return { ...state, uploading };
      }
    case actionTypes.UPLOADING_PENDING:
      {
        const uploading = uploadingStatus.LOADING;
        return { ...state, uploading };
      }
    case actionTypes.UPLOAD_IMAGE_FINISHED:
      {
        const uploading = uploadingStatus.FINISHED_LOADING;
        return { ...state, uploading }
      };
    default:
      return state
  }
}

export default upload;