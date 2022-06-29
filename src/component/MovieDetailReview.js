import React from 'react'
import { Container } from 'react-bootstrap'

const MovieDetailReview = ({ reviewInfo }) => {

  return (
    <Container className='review_wrap'>
      {reviewInfo.results?.map((item)=>(
        <div className='review_list'>
          <h4>{item.author}</h4>
          <p>{item.content}</p>
        </div>
      ))}
      
    </Container>
  )
}

export default MovieDetailReview