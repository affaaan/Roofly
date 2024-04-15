(function ($) {
    ("use strict");

    /*-- banner-slider-Start --*/
    var indexBannerSlider = $(".index-banner-slider");
    if (indexBannerSlider.length) {
        $('.index-banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
            asNavFor: '.slider-nav-list',
        });
    }
    var sliderNavList = $(".slider-nav-list");
    if (sliderNavList.length) {
        $('.slider-nav-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.index-banner-slider',
            dots: false,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 4000,
        });
    }

    /*-- recent project slider --*/
    var recentPostSlider = $(".recent-project-slider");
    if (recentPostSlider.length) {
        $('.recent-project-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
        });
    }

    /*-- counter scrolling effect start --*/
    var index2StatisticsContent = $(".counter-card");
    if (index2StatisticsContent.length) {
        let isAnimated = 0;
        function counterEffect() {
            if (isAnimated == 0) {
                const counterItem = document.querySelectorAll(".counter");
                counterItem.forEach((item) => {
                    var counterText = item.innerText;
                    item.innerText = "0";
                    const updateCounter = () => {
                        let dataTarget = +item.getAttribute("data-target");
                        if (dataTarget > 999) {
                            dataTarget = dataTarget / 1000;
                        }
                        counterText = +item.innerText;
                        let increment = dataTarget / 1000;
                        if (counterText < dataTarget) {
                            item.innerText = `${Math.ceil(counterText + increment)}`;
                            setTimeout(updateCounter, 1);
                        }
                    };
                    updateCounter();
                });
            }
        }
        $(window).on("scroll", function () {
            var counterItem = $(".counter-card");
            var y = window.scrollY;
            var x = counterItem.offset().top;
            x = x - 400;

            if (y > x && y < x - 400 + screen.height) {
                counterEffect();
                isAnimated++;
            } else {
                isAnimated = 0;
            }
        });
    }
    /*-- counter scrolling effect end --*/

    /*-- testimonials-slider-Start --*/
    var testimonialsSlider = $(".testimonials-slider-for");
    if (testimonialsSlider.length) {
        $('.testimonials-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            arrows: true,
            fade: false,
            autoplaySpeed: 3000,
            asNavFor: '.testimonials-slider-nav',
        });
    }
    var testimonialsSliderNavList = $(".testimonials-slider-nav");
    if (testimonialsSliderNavList.length) {
        $('.testimonials-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.testimonials-slider-for',
            dots: false,
            autoplay: true,
            centerMode: false,
            focusOnSelect: true,
            autoplaySpeed: 4000,
        });
    }

    

})(jQuery);