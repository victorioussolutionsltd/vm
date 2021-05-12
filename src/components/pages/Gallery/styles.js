import { makeStyles } from '@material-ui/core/styles';

const maxItemsInRow = 4;
const maxWidthOfPicture = 340;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    display: 'flex',
    marginTop: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    textJustify: 'center',
    fontSize: '17pt',
    fontWeight: 'bold',
  },
  gridList: {
    display: 'flex',
    maxWidth: maxItemsInRow * maxWidthOfPicture,
    justifyContent: 'center',
    textJustify: 'center',
    width: 'auto',
    height: 'auto',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    background: 'black'
  },
  titleBar: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));
