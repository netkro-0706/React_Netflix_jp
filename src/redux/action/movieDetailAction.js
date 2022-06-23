import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY;

function getDetail(movie_id) {
    return async (dispatch) => {

        try {
            dispatch({ type: "LOAD_START" });
            const getMovieDetailApi = api.get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);

            const getMovieReviewApi = api.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)

            const getMovieReCommend = api.get(`/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
            
            let [movieDetail, movieReview, movieRecommend] = await Promise.all([
                getMovieDetailApi,
                getMovieReviewApi,
                getMovieReCommend
            ]);

            // console.log("movieDetail", movieDetail);
            // console.log("movieReview", movieReview);
            // console.log("movieRecommend", movieRecommend);

            dispatch({
                type:"GET_MOVIE_DETAIL",
                payload: {
                    movieDetail : movieDetail.data,
                    movieReview : movieReview.data,
                    movieRecommend : movieRecommend.data,
                }
            });
            dispatch({ type: "LOAD_END" });

        } catch(error){
            dispatch({ type: "LOAD_FAIL" });
        }
    }

}

export const movieDetailAction = {
    getDetail
}