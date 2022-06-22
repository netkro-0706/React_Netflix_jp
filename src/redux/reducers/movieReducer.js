let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    genreList:{}
}

function movieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_MOVIES_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
                genreList: payload.genreList
            }
        default:
            return { ...state };
    }

}

export default movieReducer;