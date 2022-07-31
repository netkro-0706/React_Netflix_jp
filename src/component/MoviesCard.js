import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const MoviesCard = ({ cardInfo }) => {
    const { genreList } = useSelector((state) => state.movie);
    //console.log("cardInfo", cardInfo);

    let navigate = useNavigate();
    const goToDetail = () => {
        navigate(`/movies/${cardInfo.id}`);
    }

    function imgUrl() {
        if (cardInfo.backdrop_path !== null) {
            //console.log("backdrop", cardInfo.backdrop_path);
            return "url(" + `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${cardInfo.backdrop_path}` + ")"
        }
        else
            return "";

    }

    return (
        <div className='card movies_card'
            style={{
                backgroundImage: imgUrl()
            }}
            onClick={goToDetail}>

            <div className='overlay'>
                <div className='movies_card_top'>
                    <div className='card_top_poster'>
                        {cardInfo.poster_path
                            ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${cardInfo.poster_path}`}
                                width={100} alt="movie poster" />
                            : <img src={`https://bflix.biz/no-poster.png`}
                                width={100} alt="movie poster" />
                            
                        }
                    </div>
                    <div className='card_top_text'>
                        <h2>{cardInfo.title.length > 15
                            ? cardInfo.title?.substr(0, 14).toUpperCase() + "..."
                            : cardInfo.title.toUpperCase()
                        }</h2>
                        <span>{cardInfo.release_date?.substr(0, 4)}</span>
                    </div>
                </div>
                <div className='movies_card_middle'>
                    <div className='card_middle_genre'>
                        {cardInfo.genre_ids.map((id) => (
                            <Badge className='middle_genre' bg="danger">{genreList.find((item) => item.id === id).name}</Badge>

                        ))}
                    </div>
                    <div className='card_middle_content'>
                        {cardInfo.overview.length > 170
                            ? cardInfo.overview.substr(0, 170) + "..."
                            : cardInfo.overview
                        }
                    </div>
                </div>
                <div className='movies_card_bottom'>
                    <div className='card_bottom_social'>
                        <span><FontAwesomeIcon icon={faImdb} className="imdb_icon" /> {cardInfo.vote_average}</span>
                        <span><FontAwesomeIcon icon={faUsers} className="users_icon" /> {cardInfo.popularity}</span>
                        <span className='movie_adult'>{cardInfo.adult ? "R-rated" : "Under 18"}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoviesCard;