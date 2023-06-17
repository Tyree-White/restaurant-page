import createRestaurantHomePage from "./home";
import createRestaurantMenuPage from "./menu";
import createRestaurantContactPage from "./contact";

(function initialLoad() {
    createRestaurantHomePage();
    const home = document.querySelector('.home-btn');
    const menu = document.querySelector('.menu-btn');
    const contact = document.querySelector('.contact-btn');

    menu.addEventListener('click', createRestaurantMenuPage);
    contact.addEventListener('click', createRestaurantContactPage);
})()

