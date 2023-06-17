import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

function createRestaurantHomePage() {
    const contentDiv = document.querySelector('#content');
    if (contentDiv) {
        contentDiv.remove();
    }

    const headerDiv = document.querySelector('.header')
    if (headerDiv) {
        headerDiv.remove();
    }

    const body = document.querySelector('body');
    const header = document.createElement('div');
    header.classList.add('header');
    body.appendChild(header);

    const restName = document.createElement('p');
    restName.textContent = "Medici's";
    header.appendChild(restName);
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const navList = document.createElement('ul');
    nav.appendChild(navList);

    const home = document.createElement('button');
    home.classList.add('home-btn', 'active');
    const menu = document.createElement('button');
    menu.classList.add('menu-btn');
    const contact = document.createElement('button');
    contact.classList.add('contact-btn');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.classList.add('home');
    body.appendChild(content);

    const aboutDiv = document.createElement('div');
    const hoursDiv = document.createElement('div');
    const locationDiv = document.createElement('div');

    content.appendChild(aboutDiv);
    content.appendChild(hoursDiv);
    content.appendChild(locationDiv);

    aboutDiv.textContent = 'About us';
    hoursDiv.textContent = 'Hours';
    locationDiv.textContent = 'Location';

    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = "Benvenuto a Medici! Welcome to Medici's where we serve the finest Italian food in the world from the most renowned Italian chefs. Medici's has been the origin to over 100 of the worlds most renowned chefs, as well signature foods since it's founding in 1502. Some of our classics are the Spaghetti all'Assassina(Assassin's Spaghetti), Italian Rataouille, and our Steak da Firenze."
    aboutDiv.appendChild(aboutInfo);

    const hoursInfo = document.createElement('p');
    hoursInfo.textContent = 'Monday: 8am - 10pm \n\r Tuesday: 8am - 10pm\nWednesday: 8am - 10pm\nThursday: 8am - 10pm\nFriday: 8am - 12pm\nSaturday: 8am - 12pm\nSunday: 8am - 12pm';
    hoursDiv.appendChild(hoursInfo);

    const locationInfo = document.createElement('p');
    locationInfo.textContent = 'Piazzale degli Medici, 6, 50122, Firenze Fl, Italy';
    locationDiv.appendChild(locationInfo);

    menu.addEventListener('click', createRestaurantMenuPage);
    contact.addEventListener('click', createRestaurantContactPage);
}

export default createRestaurantHomePage;