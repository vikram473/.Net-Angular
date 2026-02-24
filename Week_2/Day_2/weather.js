const API_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true";

// Promise version
const fetchWeatherPromise = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => displayWeather(data.current_weather))
        .catch(err => console.error("Error:", err));
};

// Async / Await version
const fetchWeatherAsync = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayWeather(data.current_weather);
    } catch (error) {
        console.error("Error:", error);
    }
};

const displayWeather = weather => {
    document.getElementById("weather").innerHTML = `
        <p>Temperature: ${weather.temperature} °C</p>
        <p>Wind Speed: ${weather.windspeed} km/h</p>
    `;
};

function getWeather() {
    fetchWeatherAsync(); // using async/await
}