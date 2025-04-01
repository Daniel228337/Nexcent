const burger = document.querySelector('.header_mobile-hamburher');
const nav = document.getElementById('nav');


burger.addEventListener('click', function () {
    console.log(nav);
    
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else nav.classList.add('active');
    console.log(nav);


  })