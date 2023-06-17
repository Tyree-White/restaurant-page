function createRestaurantMenuPage() {

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
    menuItem3.textContent = 'Chicken Parmesean';
    menuItem4.textContent = "Braised Chicken all'Arrabbiata";
    menuItem5.textContent = 'Steak da Firenze';
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
    menuItem8.appendChild(italianRatatouille)
}

export default createRestaurantMenuPage;