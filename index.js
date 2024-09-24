const apiKey="1dd71d6bbfc43fd6673bc2c563e61168";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector('.error').style.display= 'block';
        document.querySelector('.weather').style.display= 'none';
    }
    else{
        var data= await response.json();



    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main =='Clouds'){
        weatherIcon.src= '/Weather-App/images/clouds.png'
    }
    else if(data.weather[0].main =='Clear'){
        weatherIcon.src= '/Weather-App/images/clear.png'
    }
    else if(data.weather[0].main =='Rain'){
        weatherIcon.src= '/Weather-App/images/rain.png'
    }
    else if(data.weather[0].main =='Drizzle'){
        weatherIcon.src= '/Weather-App/images/drizzle.png'
    }
    else if(data.weather[0].main =='Mist'){
        weatherIcon.src= '/Weather-App/images/mist.png'
    }
    else if(data.weather[0].main =='Snow'){
        weatherIcon.src= '/Weather-App/images/snow.png'
    }

    document.querySelector('.weather').style.display= 'block';
    document.querySelector('.error').style.display= 'none';
    }

    

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})


checkWeather();
