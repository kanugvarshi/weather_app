alert("hello");
const apiKey="3ba675b06552a1314fe8a81b2b31f9f9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var city_name;
$(".search button").on('click',()=>{
    city_name=$(".search input").val();
    checkWeather(city_name);
});

async function checkWeather(city_name){
    const response=await fetch(apiUrl+ city_name+ `&appid=${apiKey}`);
    
    if(response.status== 404){
        $(".error").css("display","block");
        $(".weather").css("display","none");
    }
    else{
    
    var data=await response.json();
    const wimage=$(".weather-icon");
    console.log(data);
    $(".city").get(0).innerHTML = data.name;
    $(".temp").get(0).innerHTML= Math.round(data.main.temp) +"°c";
    $(".humidity").get(0).innerHTML= data.main.humidity;
    $(".wind").get(0).innerHTML= data.wind.speed;
    
    if(data.weather[0].main=="Clear"){
        wimage.attr("src","images/clear.png" );
    }
    else if(data.weather[0].main=="Clouds"){
        wimage.attr("src","images/clouds.png");
    }
    else if(data.weather[0].main=="Drizzle"){
        wimage.attr("src","images/drizzle.png");
    }
    else if(data.weather[0].main=="Humidity"){
        wimage.attr("src","images/humidity.png");
    }
    else if(data.weather[0].main=="Mist"){
        wimage.attr("src","images/mist.png");
    }
    else if(data.weather[0].main=="Rain"){
        wimage.attr("src","images/rain.png");
    }
    else if(data.weather[0].main=="Snow"){
        wimage.attr("src","images/snow.png");
    }
    else{
        wimage.attr("src","images/wind.png");
    }

    $(".weather").css("display","block");
    $(".error").css("display","none");

    }
    
}


//checkWeather();