import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import loadReducer from "./loadReducer";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";
import filteringReducer from "./filteringReducer"

export default combineReducers({
    movie: movieReducer,
    movieDetail : movieDetailReducer,
    load : loadReducer,
    search : searchReducer,
    sort : sortReducer,
    filter : filteringReducer,
});