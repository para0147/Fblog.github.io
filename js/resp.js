burgur = document.querySelector('.burgur')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')

burgur.addEventListener('click', () => {
    navlist.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})