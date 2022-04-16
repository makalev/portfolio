$(function() {
    /* Fixed Header */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');
    let link = $('.nav__link');

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH - 70) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    };

    /* Smoth Scroll */
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;


		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

    /* Nav Toggle */
    navToggle.on('click', tog);
    link.on('click', tog);

    function tog(e) {
        e.preventDefault();
        if ($('#nav').hasClass('active') || $('#navToggle').hasClass('active')) {
            nav.removeClass('active');
            navToggle.removeClass('active');
        } else {
            nav.addClass('active');
            navToggle.addClass('active');
        }
    };

    /* Slider: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});