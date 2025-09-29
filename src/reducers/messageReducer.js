import {SET_MESSAGE} from "../actions/weatherActions.js";
// type State = string

export const messageReducer = (state = 'Enter city name', action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}