import React, { useState } from 'react'

const Weather = () => {
    const [users, setUsers] = useState({});
    const [location, setLocation] = useState("")

    const serachLocation = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf8ae067f77419c7e23fe112d35f5256`)
                .then(response => response.json())
                .then((data) => {
                    setUsers(data);
                    console.log(data)
                })
                setLocation("");
        }
    }

    return (
        <>
            <div className="app">
                <h1>Weather App</h1>
                    <div className="search">
                        <input type="text" name='weather' placeholder='Weather in your city' 
                         value={location}
                         onChange={event => setLocation(event.target.value)}
                        onKeyPress={serachLocation}
                        />
                    </div>
                    <div className='container'>
                        <div className="top">
                            <div className="location">
                                <p>{users.name}</p>
                            </div>
                            <div className="temp">
                                {users.main ? <h2>{users.main.temp.toFixed()}°F</h2> : null}
                            </div>
                            <div className="description">
                                {users.weather ? <p>{users.weather[0].main}</p> : null}
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="feels">
                                {users.main ? <p>{users.main.feels_like}°F</p> : null}
                                <p>Feels Like</p>
                            </div>
                            <div className="humidity">
                                {users.main ? <p>{users.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {users.wind ? <p>{users.wind.speed.toFixed()} MPH</p> : null}
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Weather
