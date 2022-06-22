import React from 'react'
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';

const MovieDetailInfo = ({ detailInfo, genreList }) => {

    console.log("detailInfo", detailInfo);
    console.log("genreList", genreList);

    return (
        <div>
            <div>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailInfo?.backdrop_path}`} alt="movie_poster" />
            </div>
            <div>
                <div>
                    {detailInfo?.genres.map((id) => (
                        <Badge bg="danger">{genreList?.find((item) => item.id === id).name}</Badge>
                    ))}
                </div>
                <div>
                    {detailInfo?.title}
                </div>
                <div>
                    sub_title
                </div>
                <div>
                    rate, views, adult
                </div>
                <div>
                    content
                </div>
                <div>
                    perfomance
                </div>
                <div>
                    trailer
                </div>
            </div>
        </div>
    )
}

export default MovieDetailInfo