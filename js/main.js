
window.addEventListener('scroll', function(){
    let pos = document.documentElement.scrollTop;
    let navbar = document.getElementById('navbar');
    navbar.classList.add('navbar_on_scroll');
    if(pos == 0){
        navbar.classList.remove('navbar_on_scroll');
    }
});
