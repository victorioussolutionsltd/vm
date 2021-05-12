import React, { useState, useEffect } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { ThumbUp, ThumbDown } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { saveFavourite, removeFavourite, updateVote } from '../../actions/actions'
import { useStyles } from './styles';

const Image = ({ image }) => {
  const classes = useStyles();

  const favourites = useSelector(state => state.favourites.favourites)
  const [favouriteID, setFavouriteID] = useState(null);

  const votes = useSelector(state => state.votes.votes)
  const [scores, setScores] = useState(0);

  useEffect(() => {
    const favouriteFound = favourites.find(item => item.image_id === image.id)
    if (favouriteFound !== undefined) {
      setFavouriteID(favouriteFound.id)
    }
  }, [favourites, image])

  useEffect(() => {
    const voteFound = votes.find(vote => vote.image_id === image.id)
    if (voteFound !== undefined) {
      setScores(voteFound.value)
    }
  }, [votes, image])


  const dispatch = useDispatch();

  const onClickedStar = (event) => {
    if (favouriteID) {
      dispatch(removeFavourite(favouriteID))
      setFavouriteID(null)
    } else {
      dispatch(saveFavourite(image.id, (id) => { setFavouriteID(id) }))
    }
  }

  const updateScores = (value) => {
    setScores(value)
    dispatch(updateVote({ image_id: image.id, value }))
  }

  const onUpVote = () => updateScores(scores + 1)

  const onDownVote = () => updateScores(scores - 1)

  return (
    <GridListTile key={image.img} cols={4} >
      <img src={image.url} alt={image.url} className={classes.image} />
      <GridListTileBar
        title={image.title}
        titlePosition="top"
        actionIcon={
          <div className={classes.actions}>
            <IconButton onClick={onClickedStar} aria-label={`star ${image.title}`} className={classes.icon}>
              {favouriteID ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
            <IconButton onClick={onUpVote} aria-label={`upvote ${image.title}`} className={classes.icon}>
              <ThumbUp />
            </IconButton>
            <IconButton onClick={onDownVote} aria-label={`upvote ${image.title}`} className={classes.icon}>
              <ThumbDown />
            </IconButton>
            <div className={classes.scores}>{scores}</div>
          </div>

        }
        actionPosition="left"
        className={classes.titleBar} />
    </GridListTile>
  );
}

export default Image;