const apiKey="cf720ed62f812aa04491001c4246cb3c";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName=document.querySelector(".city");
const wind_speed=document.querySelector(".windspeed");
const humidity=document.querySelector(".humidity");
const temp=document.querySelector(".temp");
const img=document.querySelector(".weather-icon");
const search_button=document.querySelector(".searchbutton");
const search_input=document.querySelector(".searchinput");

async function checkWeather(city){
    const response = await fetch(url+city+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    cityName.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    wind_speed.innerHTML=data.wind.speed+"km/hr";
    humidity.innerHTML=data.main.humidity+"%";

    if(data.weather[0].main=="Clouds"){
       img.src="clouds.png";
    }
   else if(data.weather[0].main=="Clear"){
        img.src="clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        img.src="drizzle.png";
     }
    else if(data.weather[0].main=="Snow"){
        img.src="snow.png"
    }
    else if(data.weather[0].main=="Mist"){
        img.src="mist.png";
     }
     else if(data.weather[0].main=="Rain"){
        img.src="rain.png";
    }
}
search_button.addEventListener("click",()=>{
    checkWeather(search_input.value);

})
