// import {useState} from "react";

const Form = ({getWeather}) => {

    const handleClickSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.value.trim();
        getWeather(city);
    }

    return (
        <form onSubmit={handleClickSubmit}>
            <input type={"text"} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;