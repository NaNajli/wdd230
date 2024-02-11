let oLastModif = "Last Modified :" + document.lastModified;
document.getElementById("lastModified").innerHTML = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

let loadTimes = document.querySelector("#hidd");

loadTimes = Date.now();


const url = 'https://github.com/NaNajli/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberstData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    //displayProphets(data.members);
}
//getMembersData();




