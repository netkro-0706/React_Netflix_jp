let initialState = {
    movieDetail: {},
    movieReview: {},
    movieRecommend: {},
}

function movieDetailReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: payload.movieDetail,
                movieReview: payload.movieReview,
                movieRecommend: payload.movieRecommend
            }
        default:
            return {
                ...state
            }
    }
}

export default movieDetailReducer;