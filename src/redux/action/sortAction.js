function sortAction(sortText) {
    return (dispatch) => {
        dispatch({ type: "MOVIE_SORT", payload: { sortText } });
    }
}

export default sortAction;