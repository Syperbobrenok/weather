import {combineReducers} from "redux";
import {messageReducer} from "./messageReducer.js";
import {weatherReducer} from "./weatherReducer.js";

export const rootReducer = combineReducers({
    message: messageReducer,
    weatherInfo: weatherReducer
})