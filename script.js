async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "315b01d210a270ac2428531bd93833e0";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch(error) {
        document.getElementById("result").innerHTML =
        "<p>City not found!</p>";
    }
}