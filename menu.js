const hamburger = document.getElementById('harmburger');
const navU = document.getElementById('nav-ul');


// hamburger.addEventListener('click', show)
hamburger.addEventListener('click', () => {
    navU.classList.toggle('show');
});

// function show() {
//     navU.classList.toggle('show')
// }