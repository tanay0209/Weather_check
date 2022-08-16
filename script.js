const time = document.getElementById('time')

const weather = document.getElementById('weather')
const searchButton = document.getElementById('searchButton')
const apiKey = "292a6ddcb97926b600c6d2e9d9dccef3"

function updateTime(){
let hour = new Date().getHours()
let minute = new Date().getMinutes()
let second = new Date().getSeconds()
let ampm = 'AM'
if(hour>12)
{   hour=hour-12
    ampm = 'PM'
}

hour = hour<10? "0" + hour : hour
minute = minute<10? "0" + minute : minute
second = second<10? "0" + second : second
ampm.innerText = ampm
time.innerText ='Your Time:' + " " + hour + ":" + minute + ":" + second + " " + ampm

setTimeout(updateTime , 1000)
}



const searchCity = async () => {
  const userCity = document.getElementById('searchCity').value
const data = await getWeatherData(userCity)
showWeatherData(data)
}

const getWeatherData = (userCity) => {
 return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&id=524901&appid=` + apiKey)
         .then(response => response.json())
        .then(data => (data))
}

const showWeatherData = (weatherData) =>{
    console.log(weatherData)
    document.getElementById('longitude').innerText = weatherData.coord.lon + `\xB0`
    document.getElementById('latitude').innerText = weatherData.coord.lat + `\xB0`
    document.getElementById('temperature').innerText = Math.floor(`${(weatherData.main.temp - 32)*(5/9) }`)+`\xB0`
    document.getElementById('City').innerText = weatherData.name 
    document.getElementById('weather').innerText = weatherData.weather[0].main
}





























updateTime()