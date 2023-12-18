let name;

function getWeather(){  
    try{
        let city = document.getElementById('zipcode').value;
        // console.log(city)
        let key = `d72729578543cfc435344f99b226b1c9`;
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${key}&units=metric`;
        console.log(url)
        fetch(url)
        .then((weather) => {
            return weather.json()
        })
        .then (displayData);
    }catch{
        console.log("Error with fetch")
    }
    
}

function displayData(data){
    console.log(data)
    let mydiv = document.getElementById('w');

    let currTemp = "Current: " + conversion(data.main.temp);
    let minTemp = "Lows: " + conversion(data.main.temp_min);
    let maxTemp = "Highs: " + conversion(data.main.temp_max);
    document.querySelector('small').innerHTML = Date();
    document.querySelector('h5').innerHTML = data.name
    document.querySelector('img').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    mydiv.innerHTML = `${currTemp} <br> ${minTemp} <br> ${maxTemp}`
    document.getElementById('bottomDiv').style.visibility = "visible";
}

function conversion(c){
    return ((c * (9/5)) + 32).toFixed(2);
}