
document.querySelector("#search").addEventListener("change",showDetails);

function showDetails(){
    var cityName=document.querySelector("#search").value;
    var response= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aef6d4cc6388467e5b885f6647b76e29`);

    response.then((data)=>{
        data.json().then((data1)=>{
            if(data1.cod==404)
            {
                alert("Location Not Found")
            }
            // console.log()
            var box=document.createElement("div");
            box.setAttribute("id","temp");

            var head=document.createElement("p");
            head.innerText="CURRENT WEATHER";

            var img=document.createElement("img");

            if(data1.weather[0].description="clear sky")
            {
                img.setAttribute("src","https://cdn.pixabay.com/photo/2014/04/03/00/40/sun-309025_960_720.png")
            }
            else
            {
                img.setAttribute("src","data:image/png;base64,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")
            }

            var temp=document.createElement("p");
            temp.innerText=Math.floor(data1.main.temp- 273.15)+" °C";

            var description=document.createElement("p");
            description.innerText=data1.weather[0].description;

            var box1=document.createElement("div");
            box1.append(temp,description)
            box.append(img,box1);

            var pressure=document.createElement("p");
            pressure.innerText="Pressure : "+ data1.main.pressure+" mb";

            var humidity=document.createElement("p");
            humidity.innerText="Humidity : "+ data1.main.humidity+" %";

            var windSpeed=document.createElement("p");
            windSpeed.innerText="Wind Speed : "+ data1.wind.speed+" km/h";

            var sunrise=document.createElement("p");
            sunrise.innerText="Sunrise : "+ data1.sys.sunrise;

            var sunset=document.createElement("p");
            sunset.innerText="Sunset : "+ data1.sys.sunset;
            document.querySelector("#detail").innerHTML=""
            document.querySelector("#detail").append(head,box,pressure,humidity,windSpeed,sunrise,sunset)
        })
    }).catch(()=>{
        console.log("fal")
    })
}
