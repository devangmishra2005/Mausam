const apiKey = "ac1bc9c8290880040f9fb8c3142d1aa2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon")

async function checkWeather(city){
    const response = await fetch(apiURL+ city +  `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.classList.remove('fa-solid fa-cloud icon', 'fa-solid fa-cloud-bolt icon', 'fa-solid fa-sun icon', 'fa-solid fa-cloud-sun-rain icon','fa-solid fa-snowflake icon','fa-solid fa-temperature-three-quarters icon');
        weatherIcon.classList.add("fa-solid fa-cloud")
      
    }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.classList.remove('fa-solid fa-cloud', 'fa-solid fa-cloud-bolt', 'fa-solid fa-sun', 'fa-solid fa-cloud-sun-rain','fa-solid fa-snowflake');
        weatherIcon.classList.add("fa-solid fa-cloud-bolt")
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.classList.remove('fa-solid fa-cloud', 'fa-solid fa-cloud-bolt', 'fa-solid fa-sun', 'fa-solid fa-cloud-sun-rain','fa-solid fa-snowflake');
        weatherIcon.classList.add("fa-solid fa-sun")
       
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.classList.remove('fa-solid fa-cloud', 'fa-solid fa-cloud-bolt', 'fa-solid fa-sun', 'fa-solid fa-cloud-sun-rain','fa-solid fa-snowflake');
        weatherIcon.classList.add("fa-solid fa-cloud-sun-rain")
      
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.classList.remove('fa-solid fa-cloud', 'fa-solid fa-cloud-bolt', 'fa-solid fa-sun', 'fa-solid fa-cloud-sun-rain','fa-solid fa-snowflake');
        weatherIcon.classList.add("fa-solid fa-snowflake")
        
    }
    document.querySelector(".weather").style.display = "block";
    
    
    
    // <i class="fa-solid fa-cloud-sun"></i>
    
    

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

