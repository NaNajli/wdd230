//------------WEATHER---------

const mycity = document.querySelector("#city");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-32.40&lon=-63.24&appid=96785fdaafd1d409d618eab3ed7a191d&units=metric'

async function apiFetch() {
    const response = await fetch(url);
    try {
        if (response.ok) {
            const data = await response.json();
            console.table(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    mycity.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/10d@2x.png`;
    myGraphic.setAttribute("src", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description)

}