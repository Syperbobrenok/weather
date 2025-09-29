import {api_key, base_url} from "../utils/constants.js";

export const SET_WEATHER = 'SET_WEATHER';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setWeather = weather => ({
    type: SET_WEATHER,
    payload: weather,
});

export const setMessage = message => ({
    type: SET_MESSAGE,
    payload: message,
});

export const fetchWeather = city => dispatch => {
    fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(res => res.json())
        .then(data => {
            dispatch(setWeather({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000)
            }));
            dispatch(setMessage(''));
        })
        .catch(e => {
            console.log(e);
            dispatch(setMessage('Enter correct city name'));
        })
}