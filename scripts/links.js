const baseURL = "https://nanajli.github.io/wdd230/";
linksURL = "https://nanajli.github.io/wdd230/data/links.json";

const cards = document.querySelector('.card1');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {

        let card = document.createElement('ul');
        let liweek = document.createElement('li');
        let aweek = document.createElement('a');
        let aweek1 = document.createElement('a');
        let aweek2 = document.createElement('a');


        liweek.textContent = (`${week.week}:`);
        aweek.setAttribute("href", week.links[0].url)
        aweek.textContent = (`${week.links[0].title}| `);
        aweek1.setAttribute("href", week.links[1].url)
        aweek1.textContent = (`${week.links[1].title}| `);
        aweek2.setAttribute("href", week.links[2].url)
        aweek2.textContent = (`${week.links[2].title}| `);

        card.appendChild(liweek);
        liweek.appendChild(aweek);
        liweek.appendChild(aweek1);
        liweek.append(aweek2);



        cards.appendChild(card)
    });

}