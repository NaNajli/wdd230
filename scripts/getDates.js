let oLastModif = "Last Modified :" + document.lastModified;
document.getElementById("lastModified").innerHTML = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#F5D6A3";
        main.style.color = "#3D405B";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#3D405B";
        main.style.color = "#F5D6A3";
        modeButton.textContent = "🕶️";
    }
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
