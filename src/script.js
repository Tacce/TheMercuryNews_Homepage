const smallScreenWidth = 1040;

window.addEventListener('scroll', function (){
    const scrollHeight = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const scrollThreshold= 50;

    const w = window.innerWidth;

    if (w > smallScreenWidth) {
        if (scrollHeight > scrollThreshold) {
            navbar.style.position = 'fixed';
            content.style.marginTop = '17em' ;
            hide_navbar(navbar);
        } else {
            navbar.style.position = 'relative';
            content.style.marginTop = '0';
            show_navbar(navbar);
        }
    }else {
        if (scrollHeight > scrollThreshold) {
            pin_navbar(navbar, content);
        } else {
            unpin_navbar(navbar, content);
        }
    }
});

window.addEventListener('resize', function (){
    const navbar = document.querySelector('.navbar');
    const w = window.innerWidth;

    if (w>smallScreenWidth) {
        show_navbar(navbar)
    }else {
        hide_navbar(navbar)
    }
});

function hide_navbar(navbar){
    navbar.querySelector('.center_top').style.visibility = 'visible';
    navbar.querySelector('.primary_middle').style.visibility = 'hidden';
    navbar.querySelector('.primary_middle').style.height = '0';
    navbar.querySelector('.primary_bottom').style.visibility = 'hidden';
    navbar.querySelector('.primary_bottom').style.height = '0';
    navbar.querySelector('.trending_bar').style.visibility = 'hidden';
    navbar.querySelector('.trending_bar').style.height = '0';
}

function show_navbar(navbar){
    navbar.querySelector('.center_top').style.visibility = 'hidden';
    navbar.querySelector('.primary_middle').style.visibility = 'visible';
    navbar.querySelector('.primary_middle').style.height = '5em';
    navbar.querySelector('.primary_bottom').style.visibility = 'visible';
    navbar.querySelector('.primary_bottom').style.height = '3em';
    navbar.querySelector('.trending_bar').style.visibility = 'visible';
    navbar.querySelector('.trending_bar').style.height = '3em';
}

function pin_navbar(navbar,content,){
    navbar.style.position = 'fixed';
    content.style.marginTop = '4em' ;
}

function unpin_navbar(navbar,content){
    navbar.style.position = 'relative';
    content.style.marginTop = '0';
}


function toggleVisibility() {
    const button = document.querySelector('.show_more');
    const content = document.querySelector('.hidden_wrapper');
    button.style.display = "none";
    content.style.display = "block";
}


function openNav() {
    document.querySelector('.sidenav').style.width = "300px";
    const navbar = document.querySelector('.navbar');
    navbar.querySelector('.center_top').style.visibility = 'visible';
    document.getElementById("open_nav").style.display = 'none';
    document.getElementById("close_nav").style.display = 'flex';
    document.querySelector('.overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    document.querySelector('.sidenav').style.width = "0";
    const navbar = document.querySelector('.navbar');
    navbar.querySelector('.center_top').style.visibility = 'hidden';
    document.getElementById("open_nav").style.display = 'flex';
    document.getElementById("close_nav").style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    document.body.style.overflow = 'auto';

}