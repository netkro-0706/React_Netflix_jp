import React, { useEffect } from 'react'
import { movieAction } from '../redux/action/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  let loading = useSelector((state) => state.load.loading);


  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className='loader-wrap'>
        <ClipLoader color="red" loading={loading} size={200} />
      </div>
    )
  } else {
    return (
      <div>
        <Banner movie={popularMovies.results[0]} />

        <div className='home_movie_list'>
          <h1>popular Movie</h1>
          <MovieSlide movies={popularMovies} />
        </div>
        <div className='home_movie_list'>
          <h1>Top rated Movie</h1>
          <MovieSlide movies={topRatedMovies} />
        </div>
        <div className='home_movie_list'>
          <h1>Upcoming Movie</h1>
          <MovieSlide movies={upcomingMovies} />
        </div>
        <div className='last_list'></div>

      </div>
    )
  }
}

export default Home