function createRestaurantContactPage() {
    const contentDiv = document.querySelector('#content');
    if (contentDiv) {
        contentDiv.remove();
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
    content.classList.add('contact');
    body.appendChild(content);

    content.textContent = 'Contact Us';
    const chefInfo = document.createElement('div');
    chefInfo.textContent = 'Head Chef:';
    content.appendChild(chefInfo);
    const chefName = document.createElement('p');
    chefName.textContent = 'Lorenzo di Piero de Medici';
    chefInfo.appendChild(chefName);
    
    const sousInfo = document.createElement('div');
    sousInfo.textContent = 'Sous Chef:';
    content.appendChild(sousInfo);
    const sousName = document.createElement('p');
    sousName.textContent = 'Ezio Auditore Da Firenze';
    sousInfo.appendChild(sousName);

    const emailInfo = document.createElement('div');
    emailInfo.textContent = 'Email';
    content.appendChild(emailInfo);
    const email = document.createElement('p');
    email.textContent = "MediciDaFirenze@gmail.com";
    emailInfo.appendChild(email);

    const phoneInfo = document.createElement('div');
    phoneInfo.textContent = 'Phone Number';
    content.appendChild(phoneInfo);
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '469-367-6800';
    phoneInfo.appendChild(phoneNumber);

    const locationInfo = document.createElement('div');
    locationInfo.textContent = 'Location';
    content.appendChild(locationInfo);
    const location = document.createElement('p');
    location.textContent = 'Piazzale degli Medici, 6, 50122, Firenze Fl, Italy';
    locationInfo.appendChild(location);
}

export default createRestaurantContactPage;