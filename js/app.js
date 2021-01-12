$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    // **********Effect Using jQuery****

    // $(".hamberger").click(function(){
    //     $(".mobile-nav").toggle();
    // });

    // $(".times").click(function(){
    //     $(".mobile-nav").toggle();
    // });

    // **********Effect Using Javascript****
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    })
    
    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    })

});

let mybutton = document.getElementById("mybtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}