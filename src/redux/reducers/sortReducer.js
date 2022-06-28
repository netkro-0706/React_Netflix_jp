let initialState = {
    selected_sort: "",
}

function sortReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "MOVIE_SORT":
            return {
                ...state,
                selected_sort: payload.sortText
            }
        default:
            return {
                ...state
            }
    }
}

export default sortReducer;