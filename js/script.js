$(document).ready(function() {

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });


    // smooth scrolling

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });


    // button ripple effect

    const btnE1 = document.querySelector(".btn");

    btnE1.addEventListener("mouseover", (event) => {
        const x = event.pageX - btnE1.offsetLeft;
        const y = event.pageY - btnE1.offsetTop;

        btnE1.style.setProperty("--xPos", x + "px");
        btnE1.style.setProperty("--yPos", y + "px");
    });

});
