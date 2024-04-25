const w = window.innerWidth;
const smallScreenWidth = 1024;
const tabletsWidth = 768;
const mediumScreenWidth = 1200;

window.addEventListener('scroll', function() {
    const scrollHeight = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const scrollThreshold= 50;

    if (scrollHeight > scrollThreshold) {
        navbar.style.position = 'fixed';
        navbar.querySelector('.center_top').style.visibility = 'visible';
        navbar.querySelector('.primary_middle').style.visibility = 'hidden';
        navbar.querySelector('.primary_middle').style.height = '0';
        navbar.querySelector('.primary_bottom').style.visibility = 'hidden';
        navbar.querySelector('.primary_bottom').style.height = '0';
        content.style.marginTop = '12em' ;
    } else {
        navbar.style.position = 'relative';
        navbar.querySelector('.center_top').style.visibility = 'hidden';
        navbar.querySelector('.primary_middle').style.visibility = 'visible';
        navbar.querySelector('.primary_middle').style.height = '5em';
        navbar.querySelector('.primary_bottom').style.visibility = 'visible';
        navbar.querySelector('.primary_bottom').style.height = '3em';
        content.style.marginTop = '0';
    }
});
