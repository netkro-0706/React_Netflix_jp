function searchAction(text){
    return (dispatch) => {
        dispatch({type: "INPUT_SEARCH_TEXT", payload: { text }});
    }
}

export default searchAction;