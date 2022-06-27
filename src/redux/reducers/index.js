import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import loadReducer from "./loadReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    movie: movieReducer,
    movieDetail : movieDetailReducer,
    load : loadReducer,
    search : searchReducer,
});