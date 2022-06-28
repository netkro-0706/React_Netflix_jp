function year_filter(year_value){
    return (dispatch) => {
        dispatch({type: "SEND_YEAR", payload: {year_value}});
    }
}
function genre_filter(genre_value){
    return (dispatch) => {
        dispatch({type: "SEND_GENRE", payload: {genre_value}});
    }
}

export const filterAction = {
    year_filter, genre_filter
};