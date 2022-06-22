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

  //loading이 true면 loading스피너를 보여주고
  //loading이 false면 데이터를 보여준다

  //true: 데이터 도착 전
  //false: 데이터 도착 후, 또는 에러시
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

        <h1>popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upcomingMovies} />

      </div>
    )
  }
}

export default Home