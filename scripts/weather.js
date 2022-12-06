//Wisdom. Script for weather in dublin using openweathermaps
link = "https://api.openweathermap.org/data/2.5/weather?q=Ireland, IE&units=metric&appid=d388cd97c0b0a4480d01683e1bcafb6d";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function () {
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('temp').innerHTML = obj.main.temp;

    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+obj.weather[0].icon+".png";
}
if (request.status == 200) {
    console.log("error")
}
request.send();
$(document).ready(function(){
    $("p").one("click", function(){
            //actions
            $(".holder").hide(1000);
            $("p").append(document.createTextNode(" Now you can imagine it's hot and sunny :D"));
    });
  });