import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStyles } from './styles';

const Image = ({ tile }) => {
  const classes = useStyles();

  return (
    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={tile.title}
        titlePosition="top"
        actionIcon={<IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
          <StarBorderIcon />
        </IconButton>}
        actionPosition="left"
        className={classes.titleBar} />
    </GridListTile>
  );
}

export default Image;