import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '15px',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  progress: {
    display: 'flex',
    marginTop: '20px',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));
