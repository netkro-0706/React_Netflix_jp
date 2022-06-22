import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MovieCard = ({ item }) => {

    const { genreList } = useSelector((state) => state.movie);

    let navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/movies/${item.id}`);
    }

    return (
        <div className='card'
            style={{
                backgroundImage:
                    "url(" + `https://www.themoviedb.org/t/p/w500_and_h282_face/${item.poster_path}` + ")"
            }}
            onClick={goToDetail}>

            <div className='overlay'>
                <h1>{item.title}</h1>
                <div>
                    {item.genre_ids.map((id) => (
                        <Badge bg="danger">{genreList.find((item) => item.id === id).name}</Badge>

                    ))}
                </div>
                <div>
                    <span>{item.vote_average}</span>
                    <span>{item.adult ? "R-rated" : "Under 18"}</span>
                </div>
            </div>

        </div>
    )
}

export default MovieCard