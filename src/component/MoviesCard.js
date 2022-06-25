import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MoviesCard = ({ cardInfo }) => {
    const { genreList } = useSelector((state) => state.movie);
    console.log("cardInfo", cardInfo);

    let navigate = useNavigate();

    const goToDetail = () => {
        
    }

    return (
        <div className='card movies_card'
            style={{
                backgroundImage:
                    "url(" + `https://www.themoviedb.org/t/p/w500_and_h282_face/${cardInfo.results?.[0].backdrop_path}` + ")"
            }}
            onClick={goToDetail}>

            <div className='overlay'>
                <h1>{cardInfo.results?.[0].title}</h1>
                <div>
                    {cardInfo.results?.[0].genre_ids.map((id) => (
                        <Badge bg="danger">{genreList.find((item) => item.id === id).name}</Badge>

                    ))}
                </div>
                <div>
                    <span>{cardInfo.results?.[0].vote_average}</span>
                    <span className='movie_adult'>{cardInfo.results?.[0].adult ? "R-rated" : "Under 18"}</span>
                </div>
            </div>

        </div>
    )
}

export default MoviesCard;