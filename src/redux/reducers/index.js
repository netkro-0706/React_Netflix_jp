import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import loadReducer from "./loadReducer";

export default combineReducers({
    movie: movieReducer,
    movieDetail : movieDetailReducer,
    load : loadReducer
});