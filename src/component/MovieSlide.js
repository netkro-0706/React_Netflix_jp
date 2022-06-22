import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({ movies }) => {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        smallDesktop: {
            breakpoint: { max: 1520, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    //console.log("movies", movies);

    return (

        <div>
            <Carousel responsive={responsive}>
                {movies.results.map((item) => (
                    <MovieCard item={item} />
                ))}
            </Carousel>
        </div>
    )
}

export default MovieSlide