import React from 'react'
import { Container } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieDetailRecommend = ({recommendInfo}) => {

  // console.log("recommendInfo", recommendInfo);
  
  return (
    <Container className='recommend_wrap'>
      {recommendInfo.results?.map((item)=>(
        <MovieCard item={item}/>
      ))}
    </Container>
  )
}

export default MovieDetailRecommend