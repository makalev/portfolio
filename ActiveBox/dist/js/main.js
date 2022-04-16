'use strict';
window.addEventListener('DOMContentLoaded', function() {

    /* Fixed Header */
    const header = document.querySelector('.header');

    function myFunc() {
        let introHeight = document.querySelector('.intro').offsetHeight;
        let scrollPos = window.scrollY;
        if (scrollPos >= introHeight - 80) {
            header.classList.add('header_fixed');
        } else {
            header.classList.remove('header_fixed');
        }
    };

    window.addEventListener('scroll', myFunc);
    window.addEventListener('load', myFunc);
    window.addEventListener('resize', myFunc);

    // ['scroll', 'load', 'resize'].map((e) => window.addEventListener(e, myFunc));

    /* Smoth scroll */

    // работает при включенной анимации в Windiws
    document.querySelectorAll('[data-scroll]').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            const href = this.getAttribute('data-scroll').substring(1);  
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.header','.header_fixed').offsetHeight;
            const elemPos = scrollTarget.getBoundingClientRect().top;
            const offsetPos = elemPos - topOffset;

            window.scrollBy({
                top: offsetPos,
                behavior: 'smooth'
            });
            
        });
    });

    // const menuLinks = document.querySelectorAll('.nav__link[data-scroll]');
    // if (menuLinks.length > 0) {
    //     menuLinks.forEach(menuLink => {
    //         menuLink.addEventListener('click', onMenuLinkClick);
    //     });

    //     function onMenuLinkClick(e) {
    //         const menuLink = e.target;
    //         if (menuLink.dataset.scroll.substring(1) && document.querySelector(menuLink.dataset.scroll)) {
    //             const scrollTarget = document.querySelector(menuLink.dataset.scroll);
    //             const topOffset = document.querySelector('.header', '.header_fixed').offsetHeight;
    //             const elemPos = scrollTarget.getBoundingClientRect().top;
    //             const scrollPos =  elemPos + scrollY - topOffset;
    //             window.scrollTo({
    //                 top: scrollPos,
    //                 behavior: 'smooth'
    //             });
    //             e.preventDefault();
    //         }
    //     };
    // }

    
    const but = document.querySelector('#navToggle'),
        nav = document.querySelector('#nav');

    document.querySelectorAll('[data-scroll]').forEach(link => {
        link.addEventListener('click', tog);
    });

    but.addEventListener('click', tog);
    
    function tog(e) {
        if (but.classList.contains('active') || nav.classList.contains('active')) {
            but.classList.remove('active');
            nav.classList.remove('active'); 
        } else {
            but.classList.add('active');
            nav.classList.add('active');
        }
        e.preventDefault();
    };
    
});
