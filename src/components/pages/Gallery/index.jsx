import React, { useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import Image from '../../Image'

import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './styles';

export default function Gallery() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const images = useSelector(state => state.images)

  useEffect(() => {
    dispatch(fetchGallery);
  }, [])

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {images.map((tile) => Image(tile)
        )}
      </GridList>
    </div>
  );
}
