import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MoviesCard from '../component/MoviesCard'
import Pagination from "react-js-pagination";
import MoviesSort from '../component/MoviesSort';
import MoviesFilter from '../component/MoviesFilter';

const Movies = () => {

  let { popularMovies } = useSelector((state) => state.movie);
  let [activePage, setActivePage] = useState(15);
  
  function handlePageChange(event) {
    setActivePage(event);
  }


  return (
    <Container>
      <Row>
        <Col xs={4}>
          <MoviesSort/>
          <MoviesFilter/>
        </Col>
        <Col xs={8} className="movies_Card_List">
          <MoviesCard cardInfo={popularMovies} />
          <MoviesCard cardInfo={popularMovies} />

          <div className='movies_Pagination_wrap'>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Movies