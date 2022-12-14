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
        let iconmainElement = document.querySelector("#iconmain");
    
       
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
        iconmainElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
        iconmainElement.setAttribute("alt", response.data.weather[0].description);
    }
    
    function search(city) {
        let apiKey = "ce8e825e9de2cecd077619df37fa3d4f";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayTemperature);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        let cityInputElement = document.querySelector("#city-input");
            search(cityInputElement.value);
        
    }

    let form = document.querySelector("#search-form");
    form.addEventListener("submit", handleSubmit);



    search("New York");
  
    
    //function displayForecast(response) {
    //    console.log(response.data);
    //    let iconElement = document.querySelector("#icon");
    //    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    //    iconElement.setAttribute("alt", response.data.weather[0].description);
    //}
    
    
    //let city = "Los Angeles"
    //let apiURLforecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&units=metric`
    //axios.get(apiURLforecast).then(displayForecast);
    
    