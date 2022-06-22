function loadStart() {
    return (dispatch) => {
        dispatch({ type: "LOAD_START" });
    }
}

function loadEnd() {
    return (dispatch) => {
        dispatch({ type: "LOAD_END" });
    }
}

function loadFail() {
    return (dispatch) => {
        dispatch({ type: "LOAD_FAIL" });
    }
}

export const load = {
    loadStart, loadEnd, loadFail
}
