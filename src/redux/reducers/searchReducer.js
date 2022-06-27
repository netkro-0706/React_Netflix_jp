let initialState = {
    text: "",
}

function searchReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "INPUT_SEARCH_TEXT":
            return {
                ...state,
                text: payload.text,
            }
        default:
            return {
                ...state
            }
    }

}

export default searchReducer;