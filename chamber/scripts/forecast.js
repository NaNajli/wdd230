

//Forecast for 5 days, home of chambers comerce

const fmyDescription = document.querySelector("#fdescription");
const fmyTemperature = document.querySelector("#ftemperature");
const fmyGraphic = document.querySelector("#fgraphic");
const fmyDay = document.querySelector("#day");




const myforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-32.40&lon=-63.24&appid=96785fdaafd1d409d618eab3ed7a191d&units=metric'



async function forecastWeather(myforecast) {
    const response = await fetch(myforecast);
    try {
        if (response.ok) {
            const data = await response.json();
            //console.table(data);
            displayForecast(data.list)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
forecastWeather(myforecast)

function displayForecast(list) {
    for (let i = 0; i < 5; i++) {

        fmyDescription.innerHTML = list[0].weather[0].description;
        fmyTemperature.innerHTML = `${list[0].main.temp}&deg;C`;
        fmyDay.innerHTML = list[0].dt_txt;
        const icons = ` https://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`;
        fmyGraphic.setAttribute('src', icons);
        fmyGraphic.setAttribute('alt', list[0].weather[0].description);
    }
}
const d = new Date();
const weekd = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tusday", "Wensday"]


function checkDay(day) {
    if (day + d.getDay() > 6) { return day + d.getDay() - 7; }
    else { return day + d.getDay(); }
}
for (let i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1))
    day.innerHTML = weekd[checkDay(i)]

};



