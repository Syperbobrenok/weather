import {useState} from "react";
import {fetchWeather} from "../actions/weatherActions.js";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClickSubmit = e => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input
                type={"text"}
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;