let oLastModif = "Last Modified :" + document.lastModified;
document.getElementById("lastModified").innerHTML = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const week = ["Sunday", "Monday", "Tusday", "Wednesday", " Thursday", "Friday", "Saturday",]

const date = new Date();
const today = date.getDay();

function on() {
    if (today == [1]) {
        document.getElementById("overlay").style.display = "none";
    } else { }
}

function off() {

    document.getElementById("overlay").style.display = "none";


}

