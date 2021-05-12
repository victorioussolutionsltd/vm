import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { hideError } from '../../actions/actions'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Snackbar = () => {
  const classes = useStyles();
  const message = useSelector(state => state.error.message)
  const show = useSelector(state => state.error.show)

  const dispatch = useDispatch();


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideError())
  };

  return (
    <div className={classes.root}>
      <MuiSnackbar open={show} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
}

export default Snackbar;
