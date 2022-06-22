import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { movieDetailAction } from '../redux/action/movieDetailAction';
import MovieDetailInfo from '../component/MovieDetailInfo';
import MovieDetailRecommend from '../component/MovieDetailRecommend';
import MovieDetailReview from '../component/MovieDetailReview';
import { ClipLoader } from 'react-spinners';

const MovieDetail = () => {

  const dispatch = useDispatch();
  let { movie_id } = useParams();
  const { movieDetail, movieReview, movieRecommend } = useSelector((state) => state.movieDetail);
  const { genreList } = useSelector((state) => state.movie);
  let loading = useSelector((state) => state.load.loading);

  console.log("dd movieDetail", movieDetail);



  useEffect(() => {
    dispatch(movieDetailAction.getDetail(movie_id));
  }, [])

  if (loading) {
    return (
      <div className='loader-wrap'>
        <ClipLoader color="red" loading={loading} size={200} />
      </div>
    )
  } else {
    return (
      <div>
        <MovieDetailInfo detailInfo={movieDetail} genreList={genreList} />
        <MovieDetailReview reviewInfo={movieReview} />
        <MovieDetailRecommend recommendInfo={movieRecommend} />
      </div>
    )
  }
}

export default MovieDetail;