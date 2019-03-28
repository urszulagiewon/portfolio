'use strict';
$(function () {
    /*nav - color*/
    $(window).scroll(function () {
        let windowHeight = $(window);
        let navBar = $("#main-nav");
        if (windowHeight.scrollTop() >= 300) {
            navBar.addClass('changeNav');
        } else {
            navBar.removeClass('changeNav');
        }
    });

    /* Smooth scroll*/
    $("a[href*='#']").on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    /* me in numbers*/
    function meInNumbers() {
        
            $('.column img').click(function () {
                $(this).hide();
                $(this).next('p').toggle();
            });
        
            $('.column p').click(function () {
                $(this).hide();
                $(this).prev('.column img').show();
            })
        
    }

    meInNumbers();

    /* Display exprience */
    function showExperience() {
        $('.show-more').on('click', function () {
            $(this).closest('.job').find('.more').show();
            $(this).hide();
        })

        $('.hide').on('click', function () {
            $(this).closest('.job').find('.show-more').show();
            $(this).closest('.more').hide();
        })
    }
    showExperience();

    /*Grafik - front end developer*/
    function switchJob() {
        let grafik = $("#grafik");
        let front = $("#front");
        $(".front").on("click", function () {
            front.toggle();
            grafik.hide();
        });
        $(".grafik").on("click", function () {
            grafik.toggle();
            front.hide();
        });
    }
    switchJob();

    $("#g-form").validate({
        rules: {
            contactName: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            mail: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                maxlength: 9
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 1000
            }

        },
        messages: {
            contactName: {
                required: "To pole jest wymagane",
                minlength: "Imię musi być dłuższe niż 2 znaki",
                maxlength: "Imię za długie"
            },
            mail: {
                required: "To pole jest wymagane",
                email: "Proszę wpisać poprawny adres email"
            },
            phone: {
                required: "To pole jest obowiązkowe",
                number: "Numer musi składać się z cyfr",
                maxlength: "Numer za długi"
            },
            message: {
                required: "To pole jest obowiązkowe",
                minlength: "Rozpisz się trochę ;)",
                maxlength: "Trochę za długo ;)"
            }
        }
    });
    /*Mobile menu*/
    $("#mobile-nav").on("click", function () {
        $("#mobile-nav .nav-list").toggle();
    });
});