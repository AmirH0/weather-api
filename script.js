
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const search_btn = document.querySelector('.search-btn');
let cityInput = document.querySelector('.input-city');
var weatherImage = document.getElementById('w-img');

const apiKey = "9db451e5914b14c2df15c56689c98004";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


async function checkWeather(cityName) {
    try {
        const response = await fetch(apiUrl + `${cityName}` + `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data)

        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp + " °c "

        weatherPic(data.weather[0].main)

    } catch (erorr) {
        console.log(erorr)
        alert("enter a valid city")
    }
}


search_btn.addEventListener('click', searchCity)

function searchCity() {
    let cityNameINput = String(cityInput.value).trim().toLowerCase()
    console.log(cityNameINput)
    checkWeather(cityNameINput)
}

function weatherPic(waeterName) {
    console.log(waeterName)
    if (waeterName == "Clouds") {
        weatherImage.src = "./images/weather-icon-png-11067.png"
    } else if (waeterName == "Clear") {
        weatherImage.src = "./images/weather-icon-png-11101.png"
    } else if(waeterName == "Rainy"){
        weatherImage.src = "./images/weather-icon-png-11101.png"
    }
}