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

    /* show numbers*/
    function unhideElement(toHide, toShow) {
        toHide.toggle();
        toShow.show();
    }

    $(".one img").on("click", function () {
        unhideElement($(".one img"), $(".one p"));
    });
    $(".one p").on("click", function () {
        unhideElement($(".one p"), $(".one img"));
    });
    $(".two img").on("click", function () {
        unhideElement($(".two img"), $(".two p"));
    });
    $(".two p").on("click", function () {
        unhideElement($(".two p"), $(".two img"));
    });
    $(".three img").on("click", function () {
        unhideElement($(".three img"), $(".three p"));
    });
    $(".three p").on("click", function () {
        unhideElement($(".three p"), $(".three img"));
    });
    $(".four img").on("click", function () {
        unhideElement($(".four img"), $(".four p"));
    });
    $(".four p").on("click", function () {
        unhideElement($(".four p"), $(".four img"));
    });

    /* Display exprience */
    function displayElement(toHide, showOne, showTwo) {
        toHide.hide();
        showOne.show(1000);
        showTwo.show(1000);
    }

    function hideElement(toShow, hideOne, hideTwo) {
        toShow.show();
        hideOne.hide(1000);
        hideTwo.hide(1000);
    }
    /*Show more*/
    $(".comperia .show-more").on("click", function () {
        displayElement($(".comperia .show-more"), $(".comperia .extra-text"), $(".comperia .hide"));
    });

    $(".comperia .hide").on("click", function () {
        hideElement($(".comperia .show-more"), $(".comperia .extra-text"), $(".comperia .hide"));
    });

    $(".medical .show-more").on("click", function () {
        displayElement($(".medical .show-more"), $(".medical .extra-text"), $(".medical .hide"));
    });

    $(".medical .hide").on("click", function () {
        hideElement($(".medical .show-more"), $(".medical .extra-text"), $(".medical .hide"));
    });
    $(".jula .show-more").on("click", function () {
        displayElement($(".jula .show-more"), $(".jula .extra-text"), $(".jula .hide"));
    });

    $(".jula .hide").on("click", function () {
        hideElement($(".jula .show-more"), $(".jula .extra-text"), $(".jula .hide"));
    });

    $(".verte .show-more").on("click", function () {
        displayElement($(".verte .show-more"), $(".verte .extra-text"), $(".verte .hide"));
    });

    $(".verte .hide").on("click", function () {
        hideElement($(".verte .show-more"), $(".verte .extra-text"), $(".verte .hide"));
    });

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