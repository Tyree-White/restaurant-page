import createRestaurantHomePage from "./home";
import createRestaurantContactPage from "./contact";

function createRestaurantMenuPage() {
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
    home.classList.add('home-btn');
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
    content.classList.add('menu');
    body.appendChild(content);

    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuItem5 = document.createElement('div');
    const menuItem6 = document.createElement('div');
    const menuItem7 = document.createElement('div');
    const menuItem8 = document.createElement('div');

    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);
    content.appendChild(menuItem5);
    content.appendChild(menuItem6);
    content.appendChild(menuItem7);
    content.appendChild(menuItem8);

    menuItem1.textContent = 'Spaghetti';
    menuItem2.textContent = "Spaghetti all'Assassina";
    menuItem3.textContent = 'Chicken Parmigiano';
    menuItem4.textContent = "Braised Chicken all'Arrabbiata";
    menuItem5.textContent = 'Bistecca alla Fioretina';
    menuItem6.textContent = 'Baked Mostaccioli';
    menuItem7.textContent = 'Chicken Picatta';
    menuItem8.textContent = 'Italian Ratatouille';

    const spag = document.createElement('img');
    spag.src = 'img/spag.jpg';
    menuItem1.appendChild(spag);
    const assassinSpag = document.createElement('img');
    assassinSpag.src = 'img/assassinsspaghetti.jpeg';
    menuItem2.appendChild(assassinSpag);
    const chickenParm = document.createElement('img');
    chickenParm.src = 'img/parm.jpg';
    menuItem3.appendChild(chickenParm);
    const chickenArrabbiata = document.createElement('img');
    chickenArrabbiata.src = 'img/arrabiata.webp';
    menuItem4.appendChild(chickenArrabbiata);
    const firenzeSteak = document.createElement('img');
    firenzeSteak.src = 'img/florentinesteak.webp';
    menuItem5.appendChild(firenzeSteak);
    const mostaccioli = document.createElement('img');
    mostaccioli.src = 'img/mostaccioli.jpeg';
    menuItem6.appendChild(mostaccioli);
    const chickenPicatta = document.createElement('img');
    chickenPicatta.src = 'img/piccatta.jpeg';
    menuItem7.appendChild(chickenPicatta);
    const italianRatatouille = document.createElement('img');
    italianRatatouille.src = 'img/italianratat.jpg';
    menuItem8.appendChild(italianRatatouille);

    const menuDesc1 = document.createElement('p');
    const menuDesc2 = document.createElement('p');
    const menuDesc3 = document.createElement('p');
    const menuDesc4 = document.createElement('p');
    const menuDesc5 = document.createElement('p');
    const menuDesc6 = document.createElement('p');
    const menuDesc7 = document.createElement('p');
    const menuDesc8 = document.createElement('p');

    menuDesc1.textContent = 'Spaghetti with meatballs, tomato sauce, parmesean cheese, and a hint of chili powder.';
    menuDesc2.textContent = "Pan cooked spaghetti with a texture different to that of normal spaghetti with added chili peppers to give an extra kick.";
    menuDesc3.textContent = 'Breaded chicken top with tomato sauce and mozzarella, as well as provolone cheese, w/ the added option of bacon or ham.';
    menuDesc4.textContent = 'Braised chicken spiced with poblano, and chile flakes to add a fiery kick. Served on top of polenta with a tomato sauce drizzled on top.';
    menuDesc5.textContent = 'A hefty 3 finger thick T-bone steak from the highest quality of cattle, lightly seasoned with salt and pepper, and cooked rare.';
    menuDesc6.textContent = 'Penne pasta layered with a mixture of ricotta, mozzarella, parmesesan, and tomato sauce, sprinkled with salt and pepper, and cooked to a golden brown crisp.';
    menuDesc7.textContent = 'Browned chicken breasts, sauced with cooked wine and butter served on top.';
    menuDesc8.textContent = 'An Italian spin on Ratatouille. Sliced zucchini, squash, onion, and eggplant. Served with tomato sauce and potatoes, with an italian loaf on the side.';

    menuItem1.appendChild(menuDesc1);
    menuItem2.appendChild(menuDesc2);
    menuItem3.appendChild(menuDesc3);
    menuItem4.appendChild(menuDesc4);
    menuItem5.appendChild(menuDesc5);
    menuItem6.appendChild(menuDesc6);
    menuItem7.appendChild(menuDesc7);
    menuItem8.appendChild(menuDesc8);

    home.addEventListener('click', createRestaurantHomePage);
    contact.addEventListener('click', createRestaurantContactPage);
}

export default createRestaurantMenuPage;