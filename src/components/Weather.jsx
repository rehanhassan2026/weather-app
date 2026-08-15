import React from 'react'
import "./Weather.css"
const Weather = () => {
    const API_KEY = "dfee24d6275b62f882dd9eadb6b8739d";

    const [city, setCity] = React.useState("");
    const [cityName, setCityName] = React.useState('');
    const [cityTemp, setCityTemp] = React.useState('');
    const [cityHumidity, setCityHumidity] = React.useState('');
    const [cityWindSpeed, setCityWindSpeed] = React.useState('');
    const [cityCondition, setCityCondition] = React.useState('');

    async function searchCity() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        const data = await response.json();
        setCityName(data.name);
        setCityTemp(data.main.temp);
        setCityHumidity(data.main.humidity);
        setCityWindSpeed(data.wind.speed);
        setCityCondition(data.weather[0].main);
         
    }


    return (
        <>
            <div className="weather-container">
                <div className="weather-card">

                    <h1 className="title">🌤 Weather App</h1>
                    <p className="subtitle">
                        Search any city to check the weather
                    </p>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Enter city name..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button onClick={searchCity}>🔍 Search</button>
                    </div>

                    {/* Weather UI Preview */}

                    <div className="weather-info">

                        <div className="weather-icon">
                            ☀️
                        </div>

                        <h2>{cityName}</h2>

                        <h1 className="temperature">
                            {cityTemp}°C
                        </h1>

                        <p className="condition">
                            {cityCondition}
                        </p>

                        <div className="details">

                            <div className="detail-card">
                                <span>💧</span>
                                <h3>{cityHumidity}%</h3>
                                <p>Humidity</p>
                            </div>

                            <div className="detail-card">
                                <span>💨</span>
                                <h3>{cityWindSpeed} km/h</h3>
                                <p>Wind</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Weather
