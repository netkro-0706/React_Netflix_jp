import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MoviesCard from '../component/MoviesCard'
import Pagination from "react-js-pagination";
import MoviesSort from '../component/MoviesSort';
import MoviesFilter from '../component/MoviesFilter';
import { ClipLoader } from 'react-spinners';
import api from '../redux/api';

const Movies = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  let dispatch = useDispatch();
  let { text } = useSelector((state) => state.search);
  let [activePage, setActivePage] = useState(1);
  let [popMovie, setPopMovie] = useState();
  let loading = useSelector((state) => state.load.loading);

  function handlePageChange(event) {
    setActivePage(event);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  let getMovieData = async (pageNum) => {
    try {
      dispatch({ type: "LOAD_START" });
      let getData;
      if (text !== "") {
        getData = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${pageNum}&query=${text}`);
      } else {
        getData = await api.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}`);
      }

      setPopMovie(getData.data);
      dispatch({ type: "LOAD_END" });

    } catch (error) {
      dispatch({ type: "LOAD_FAIL" });
    }
  }


  console.log("popMovie", popMovie);

  useEffect(() => {
    getMovieData(activePage);
  }, [activePage, text])

  return (
    <Container>
      <Row>
        <Col xs={4}>
          <MoviesSort />
          <MoviesFilter />
        </Col>
        {loading
          ? (
            <div className='loader-wrap'>
              <ClipLoader color="red" loading={loading} size={200} />
            </div>
          )
          : (
            <Col xs={8} className="movies_Card_List">
              {popMovie?.results.map((movie) => (
                <MoviesCard cardInfo={movie} />
              ))}
              <div className='movies_Pagination_wrap'>
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={popMovie?.total_pages}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                />
              </div>
            </Col>
          )
        }
      </Row>

    </Container>
  )
}

export default Movies