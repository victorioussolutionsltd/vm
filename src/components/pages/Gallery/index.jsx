import React, { useState, useEffect } from 'react';
import GridList from '@material-ui/core/GridList';
import Image from '../../Image'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { fetchGallery, getTotalImages, resetUpload, getFavourites, getVotes } from '../../../actions/actions'

const limit = 8;

const Gallery = () => {
  const classes = useStyles();

  const [numberOfPages, setNumberOfPages] = useState(0);
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images)
  const loading = useSelector(state => state.images.loading)
  const total = useSelector(state => state.images.total)

  useEffect(() => {
    dispatch(getVotes(null))
    dispatch(getFavourites(null))
    dispatch(getTotalImages(null));
    dispatch(resetUpload());
  }, [dispatch])

  useEffect(() => {
    setNumberOfPages(Math.ceil(total / limit) | 0);
  }, [dispatch, total])

  useEffect(() => {
    dispatch(fetchGallery({ order: 'Asc', limit, page: (page - 1) }));
  }, [dispatch, page])


  const pageChanged = (event, value) => setPage(value)

  if (loading) {
    return <CircularProgress />
  }

  if (images?.length === 0) {
    return <div className={classes.text}>Gallery</div>
  }

  return (
    <div className={classes.root}>
      <GridList spacing={1} className={classes.gridList} cols={4}>
        {
          images?.map((image) => <Image key={`unique${image.id}`} image={image} />)
        }
      </GridList>
      <Pagination count={numberOfPages} onChange={pageChanged} />
    </div>
  );
}

export default Gallery;
