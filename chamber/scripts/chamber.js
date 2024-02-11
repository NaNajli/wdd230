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

//-----------------DIRECTORY-------------------------

const url = 'https://raw.githubusercontent.com/NaNajli/wdd230/main/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let company = document.createElement('h2');
        let memblevel = document.createElement('h3');
        let logo = document.createElement('img');
        let web = document.createElement('a');
        let addrees = document.createElement('p');
        let phone = document.createElement('p');

        company.textContent = `${member.name}`;
        memblevel.textContent = `${member.level}`;
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Company :${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        web.textContent = (`${member.website}| `);
        web.setAttribute("href", member.website);
        addrees.textContent = `Address: ${member.addresses}`;
        phone.textContent = `Phone numbers: ${member.phone}`;

        card.appendChild(company);
        card.appendChild(logo);
        company.appendChild(memblevel);

        card.appendChild(addrees);
        card.appendChild(phone);
        card.appendChild(web);

        cards.appendChild(card);

    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}




