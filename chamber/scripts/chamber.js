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
    document.getElementById("overlay").style.display = "block";

}

function off() {

    document.getElementById("overlay").style.display = "none";


}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

