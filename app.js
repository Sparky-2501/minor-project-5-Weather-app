
const apiKey = API_KEY;

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found";
            } else {
                const temp = data.main.temp;
                const weather = data.weather[0].description;

                document.getElementById("result").innerHTML = `
                    <p>Temperature: ${temp} °C</p>
                    <p>Condition: ${weather}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data";
        });
}

