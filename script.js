async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let apiKey = "66727eef00afa5a20f0d30de711b5476";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);

        let data = await response.json();

        if(data.cod == "404") {

            alert("City not found");

            return;

        }

        document.getElementById("cityName").innerHTML =
        data.name;

        document.getElementById("temperature").innerHTML =
        "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerHTML =
        "Condition: " + data.weather[0].description;

    }

    catch(error) {

        alert("Something went wrong");

    }

}