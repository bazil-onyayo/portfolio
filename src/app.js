const hamburgerButton = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list'); 

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);