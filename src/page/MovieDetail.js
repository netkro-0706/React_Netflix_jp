import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { movieDetailAction } from '../redux/action/movieDetailAction';
import MovieDetailInfo from '../component/MovieDetailInfo';
import MovieDetailRecommend from '../component/MovieDetailRecommend';
import MovieDetailReview from '../component/MovieDetailReview';
import { ClipLoader } from 'react-spinners';

const MovieDetail = () => {

  const dispatch = useDispatch();
  let [changeButton, setChangeButton] = useState(true);
  let { movie_id } = useParams();
  const { movieDetail, movieReview, movieRecommend } = useSelector((state) => state.movieDetail);
  const { genreList } = useSelector((state) => state.movie);
  let loading = useSelector((state) => state.load.loading);

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
        <div className='detail_changebutton'>
          <button className='change_button' onClick={() => setChangeButton(true)}
            style={{
              backgroundColor: changeButton ? "#cc0000" : "white",
              color: changeButton ? "white" : "black"
            }}>
            REVIEWS ({movieReview.results?.length})
          </button>
          <button className='change_button' onClick={() => setChangeButton(false)}
            style={{
              backgroundColor: changeButton ? "white" : "#cc0000",
              color: changeButton ? "black" : "white"
            }}>
            RELATED MOVIES ({movieRecommend.results?.length})
          </button>
        </div>
        {changeButton
          ? (
            <div>
              <MovieDetailReview reviewInfo={movieReview} />
            </div>
          ) : (
            <div>
              <MovieDetailRecommend recommendInfo={movieRecommend} />
            </div>
          )}
      </div>
    )
  }
}

export default MovieDetail;