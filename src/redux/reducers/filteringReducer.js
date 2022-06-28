let initialState = {
    year_value: [1990, 2022],
    genre_value: "",
}

function filtering(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "SEND_YEAR":
            return {
                ...state,
                year_value: payload.year_value
            }
        case "SEND_GENRE":
            return {
                ...state,
                genre_value: payload.genre_value
            }
        default:
            return {
                ...state
            }
    }
}

export default filtering;