const smallScreenWidth = 1040;
const tabletsWidth = 768;
const mediumScreenWidth = 1200;

window.addEventListener('scroll',function() {
    const scrollHeight = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const scrollThreshold= 50;

    const w = window.innerWidth;

    if (w > smallScreenWidth) {
        if (scrollHeight > scrollThreshold) {
            navbar.style.position = 'fixed';
            navbar.querySelector('.center_top').style.visibility = 'visible';
            navbar.querySelector('.primary_middle').style.visibility = 'hidden';
            navbar.querySelector('.primary_middle').style.height = '0';
            navbar.querySelector('.primary_bottom').style.visibility = 'hidden';
            navbar.querySelector('.primary_bottom').style.height = '0';
            navbar.querySelector('.trending_bar').style.visibility = 'hidden';
            navbar.querySelector('.trending_bar').style.height = '0';
            content.style.marginTop = '17em' ;
        } else {
            navbar.style.position = 'relative';
            navbar.querySelector('.center_top').style.visibility = 'hidden';
            navbar.querySelector('.primary_middle').style.visibility = 'visible';
            navbar.querySelector('.primary_middle').style.height = '5em';
            navbar.querySelector('.primary_bottom').style.visibility = 'visible';
            navbar.querySelector('.primary_bottom').style.height = '3em';
            navbar.querySelector('.trending_bar').style.visibility = 'visible';
            navbar.querySelector('.trending_bar').style.height = '3em';
            content.style.marginTop = '0';
        }
    }else {
        if (scrollHeight > scrollThreshold) {
            navbar.style.position = 'fixed';
            content.style.marginTop = '4em' ;
        } else {
            navbar.style.position = 'relative';
            content.style.marginTop = '0';
        }
    }
});

window.addEventListener("resize", function() {
    const navbar = document.querySelector('.navbar');

    const w = window.innerWidth;

    if (w>smallScreenWidth) {
        navbar.querySelector('.center_top').style.visibility = 'hidden';
        navbar.querySelector('.primary_middle').style.visibility = 'visible';
        navbar.querySelector('.primary_middle').style.height = '5em';
        navbar.querySelector('.primary_bottom').style.visibility = 'visible';
        navbar.querySelector('.primary_bottom').style.height = '3em';
        navbar.querySelector('.trending_bar').style.visibility = 'visible';
        navbar.querySelector('.trending_bar').style.height = '3em';
    }else {
        navbar.querySelector('.center_top').style.visibility = 'visible';
        navbar.querySelector('.primary_middle').style.visibility = 'hidden';
        navbar.querySelector('.primary_middle').style.height = '0';
        navbar.querySelector('.primary_bottom').style.visibility = 'hidden';
        navbar.querySelector('.primary_bottom').style.height = '0';
        navbar.querySelector('.trending_bar').style.visibility = 'hidden';
        navbar.querySelector('.trending_bar').style.height = '0';
    }
});