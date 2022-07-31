import React, { useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faHeart, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import MovieDetailTrailerModal from './MovieDetailTrailerModal';

const MovieDetailInfo = ({ detailInfo, genreList }) => {

    //console.log("detailInfo", detailInfo);

    let [bgColor, setBgColor] = useState("white");
    const [modalShow, setModalShow] = useState(false);

    let putFav = (event) => {
        bgColor === "white" ? setBgColor("#dd0000") : setBgColor("white");
    }


    return (
        <Container className='info_all_wrap'>
            <Row>
                <Col lg={{span:4, offset:0}} sm={{span:4, offset:2}} xs={{offset:0}}>
                    {detailInfo.poster_path
                        ?
                        <img width={500} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailInfo.poster_path}`} alt="movie_poster"
                            className='info_poster' />
                        : ""
                    }
                </Col>
                <Col lg={{span:4, offset:3}} sm={{span:6, offset:3}} xs={{offset:1}}>
                    <div className='info_genre_wrap'>
                        {
                            detailInfo.genres?.map((genre) => (
                                <Badge className="info_genre_badge" bg="danger">{genreList.find((item) => item.id === genre.id).name}</Badge>
                            ))
                        }
                    </div>
                    <h1 className='info_title'>{detailInfo.title}</h1>
                    <h3 className='info_tagline'>{detailInfo.tagline}</h3>
                    <div className='info_social'>
                        <FontAwesomeIcon icon={faImdb} className="imdb_icon" /><span>{detailInfo.vote_average}</span>
                        <FontAwesomeIcon icon={faUsers} className="users_icon" /><span>{detailInfo.popularity}</span>
                        <span className='movie_adult'>{detailInfo.adult ? "R-rated" : "Under 18"}</span>
                    </div>
                    <div className='info_overview'>
                        {detailInfo.overview}
                    </div>
                    <div className='info_sale'>
                        <ul>
                            <li><Badge className='info_badge' bg="danger">Budget</Badge>${detailInfo.budget}</li>
                            <li><Badge className='info_badge' bg="danger">Revenue</Badge>${detailInfo.revenue}</li>
                            <li><Badge className='info_badge' bg="danger">Release day</Badge>{detailInfo.release_date}</li>
                            <li><Badge className='info_badge' bg="danger">Runtime</Badge>{detailInfo.runtime} min</li>
                        </ul>
                    </div>
                    <div>
                        <span className='info_trailer' onClick={() => setModalShow(true)}>
                            <FontAwesomeIcon icon={faFilm} /> Watch Trailer
                        </span>
                    </div>
                    <MovieDetailTrailerModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <div>
                        <button className='info_fav' style={{ backgroundColor: bgColor }} onClick={putFav}>
                            <FontAwesomeIcon icon={faHeart} /></button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default MovieDetailInfo