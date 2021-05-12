import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'flex'
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  image: {
    color: 'white',
    height: 'auto',
    maxWidth: "340px",
    margin: '0 auto',
  },
  icon: {
    color: 'white',
  },
  scores: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));
