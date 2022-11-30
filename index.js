let weather = {
    "apiKey" : "7d3b37abeeff859ad858ef8fcf74a272" ,
    fetchWeather:function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&appid="
        + this.apiKey
        ).then((response)=>response.json())
        .then((data) =>this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon,description}= data.weather[0];
        const {temp,humidity} = data.main;
        const{speed} = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp-273) + "°C";
        document.querySelector(".humidity").innerText = "Humidity:"+ humidity+ " %";
        document.querySelector(".wind").innerText = "Wind Speed:" +speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?" +name + "')";
        document.body.style.backgroundPosition="center";
        document.body.style.backgroundSize="cover";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".searchBar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})