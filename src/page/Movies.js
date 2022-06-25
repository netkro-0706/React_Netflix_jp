import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MoviesCard from '../component/MoviesCard'

const Movies = () => {

  let { popularMovies } = useSelector((state) => state.movie);

  console.log("pop", popularMovies);
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <div>
            sort
          </div>
          <div>
            Filter
          </div>
        </Col>
        <Col xs={8}>
          <MoviesCard cardInfo={popularMovies}/>
          <MoviesCard cardInfo={popularMovies}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Movies