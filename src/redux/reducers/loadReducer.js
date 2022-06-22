let initialState = {
    loading: true
}

function loadReducer(state = initialState, action) {
    let { type } = action;
    switch (type) {
        case "LOAD_START":
            return {
                ...state,
                loading: true
            }
        case "LOAD_END":
            return {
                ...state,
                loading: false
            }
        case "LOAD_FAIL":
            return {
                ...state,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default loadReducer;