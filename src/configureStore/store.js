import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import {rootReducer} from "../reducers/rootReducer.js";

// type State = {
//   weatherInfo: object,
//   message: string
// }

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));