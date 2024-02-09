
//--------- LAS MODIFICATION 

let oLastModif = "Last Modified :" + document.lastModified;
document.getElementById("lastModified").innerHTML = oLastModif;

let nyear = new Date();
document.getElementById("year").innerHTML = nyear.getFullYear();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//-------NUMBER OF VISIT------


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);



