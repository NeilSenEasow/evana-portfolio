// ### 4. `js/script.js`

$(function() {
    'use strict';

    // Page Preloader
    $(window).on('load', function() {
        $('.preloader .spinner').fadeOut(function() {
            $('.preloader').fadeOut();
            $('body').addClass('ready');
        });
    });

    // Set Hero Section Height
    var windowH = $(window).height();
    $('.section.started').css({
        'height': windowH
    });

    // Typed.js Initialization
    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 2000,
        typeSpeed: 0,
        loop: true
    });

    // Particles.js Initialization
    if (document.getElementById('particles-bg')) {
        particlesJS('particles-bg', {
            "particles": {
                "number": {
                    "value": 80, // Adjust particle count
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                 "modes": {
                    "push": {
                        "particles_nb": 4
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Header Stickiness on Scroll
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('filled');
        } else {
            $('.header').removeClass('filled');
        }
    });

    // Smooth Scrolling for Navigation
    $('.top-menu ul a, .mouse-btn').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var h = $(id).length ? $(id).offset().top : 0;
        
        $('body, html').animate({
            scrollTop: h
        }, 800);
        
        // For mobile menu, close after click
        if($('.menu-btn').is(':visible') && $('.top-menu').hasClass('active')) {
            $('.top-menu, .menu-btn').removeClass('active');
        }
    });
    
    // Mobile Menu Toggle
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $('.top-menu, .menu-btn').toggleClass('active');
    });

});