import React from 'react'
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { showError, uploadImage } from '../../../actions/actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import actionTypes from '../../../actions/actionTypes'
import { isValidType } from '../../../helpers/files';
import { uploadingStatus } from '../../../reducers/upload';
import { Redirect } from 'react-router';

const Upload = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uploading = useSelector(state => state.upload.uploading);

  const uploadFile = (data) => {
    const formData = new FormData();
    formData.append('file', data);
    dispatch(uploadImage(formData));
  }

  const onSelectedFile = (event) => {
    const file = event.target.files[0];

    if (!isValidType(file.name)) {
      return dispatch(showError('Wrong type of file selected!'));
    }

    dispatch({ type: actionTypes.UPLOADING_PENDING })

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
      uploadFile(file);
    })
  }

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        component="label"
      >
        Upload a cat image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={onSelectedFile}
        />
      </Button>
      {
        {
          [uploadingStatus.LOADING]: (<div className={classes.progress}>
            <CircularProgress />
          </div>),
          [uploadingStatus.FINISHED_LOADING]: <Redirect to="/" />,
          [uploadingStatus.NO_ACTION]: null,
        }[uploading]
      }
    </div>
  )
}

export default Upload

