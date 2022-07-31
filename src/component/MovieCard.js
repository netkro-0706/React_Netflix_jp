import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const MovieCard = ({ item }) => {

    //console.log("MovieCard item", item);

    const { genreList } = useSelector((state) => state.movie);
    let navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/movies/${item.id}`);
    }
    function imgUrl() {
        if (item.backdrop_path !== null)
            return "url(" + `https://www.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}` + ")"
        else
            return "";

    }

    return (
        <div className='card home_card'
            style={{
                backgroundImage: imgUrl() }}
            onClick={goToDetail}>

            <div className='overlay'>
                <h1>{item.title}</h1>
                <div className='home_genre_wrap'>
                    {item.genre_ids.map((id) => (
                        <Badge className='home_genre' bg="danger">{genreList.find((item) => item.id === id).name}</Badge>

                    ))}
                </div>
                <div className='home_social'>
                    <span><FontAwesomeIcon icon={faImdb} className="imdb_icon" /> {item.vote_average}</span>
                    <span><FontAwesomeIcon icon={faUsers} className="users_icon" /> {item.popularity}</span>
                    <span className='movie_adult'>{item.adult ? "R-rated" : "Under 18"}</span>
                </div>
            </div>

        </div>
    )
}

export default MovieCard