/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // owlCarousel init
    // for all 
    $(function () {
        if ($('.post-gallery-carousel').length) {
            $(".post-gallery-carousel").owlCarousel({
                items: 1,
                margin: 10,
                nav: $(window).width() > 1200 ? true : false,
                loop: true,
                autoplay: true,
                dots: true,
                mergeFit: true,
                autoplayHoverPause: true,
                navText: ['<img src="assets/img/arrow-left.svg" class="img-fluid" />', '<img src="assets/img/arrow-right.svg" class="img-fluid" />'],
            });
        }
    })

    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
