function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if(hours < 10) {
hours = `0${hours}`;
}
let minutes = date.getMinutes();
if(minutes < 10) {
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}


function formatDate1(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+1];
    return `${day}`;
}

function formatDate2(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+2];
    return `${day}`;
}

function formatDate3(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+3];
    return `${day}`;
}

function formatDate4(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+4];
    return `${day}`;
}

function formatDate5(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+5];
    return `${day}`;
}

function formatDate6(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+6];
    return `${day}`;
}

function formatDate7(timestamp) {
    let date = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()+7];
    return `${day}`;
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    let icon1Element = document.querySelector("#icon1");
    let icon2Element = document.querySelector("#icon2");
    let icon3Element = document.querySelector("#icon3");
    let icon4Element = document.querySelector("#icon4");
    let icon5Element = document.querySelector("#icon5");
    let icon6Element = document.querySelector("#icon6");
    let weekdayElement = document.querySelector("#weekday");
    let weekday1Element = document.querySelector("#weekday1");
    let weekday2Element = document.querySelector("#weekday2");
    let weekday3Element = document.querySelector("#weekday3");
    let weekday4Element = document.querySelector("#weekday4");
    let weekday5Element = document.querySelector("#weekday5");
    let weekday6Element = document.querySelector("#weekday6");

    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = response.data.wind.speed;
    dateElement.innerHTML = formatDate(response.data.dt*1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    icon1Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon1Element.setAttribute("alt", response.data.weather[0].description);
    icon2Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon2Element.setAttribute("alt", response.data.weather[0].description);
    icon3Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon3Element.setAttribute("alt", response.data.weather[0].description);
    icon4Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon4Element.setAttribute("alt", response.data.weather[0].description);
    icon5Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon5Element.setAttribute("alt", response.data.weather[0].description);
    icon6Element.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon6Element.setAttribute("alt", response.data.weather[0].description);
    weekdayElement.innerHTML = formatDate1(response.data.dt*1000);
    weekday1Element.innerHTML = formatDate2(response.data.dt*1000);
    weekday2Element.innerHTML = formatDate3(response.data.dt*1000);
    weekday3Element.innerHTML = formatDate4(response.data.dt*1000);
    weekday4Element.innerHTML = formatDate5(response.data.dt*1000);
    weekday5Element.innerHTML = formatDate6(response.data.dt*1000);
    weekday6Element.innerHTML = formatDate7(response.data.dt*1000);
}

let apiKey = "ce8e825e9de2cecd077619df37fa3d4f";
let city = "Los Angeles"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



axios.get(apiUrl).then(displayTemperature);
