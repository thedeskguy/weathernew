let weather = {
    // apikey: "2dedb43d904a7a2ef16fc1eb78a5f16f",
    apikey: "8981b50dbc6c414aa47134739230108",
    fetchweather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key="
            + this.apikey
            + "&q="
            + city
            + "& aqi=no")
            .then((res) => res.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data.location;
        const { text, icon } = data.current.condition;
        const { temp_c } = data.current;
        const { wind_kph, humidity } = data.current;
        console.log(name, text, icon, temp_c, wind_kph, humidity)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temperature").innerText = temp_c + "°C";
        document.querySelector(".icon").src = "http:" + icon;
        document.querySelector(".description").innerText = text;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind Speed: ${wind_kph}`;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1900/?" + name + "')"
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
}
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
});
weather.fetchweather("Dibrugarh");