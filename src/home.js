function createRestaurantHomePage() {

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
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.appendChild(content)
}

export default createRestaurantHomePage;