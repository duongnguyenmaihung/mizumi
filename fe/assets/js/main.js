
var App = {
  homeslider: function () {
    jQuery('.slider_home').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: true,
      prevArrow: jQuery('.nav_slider .nav_prev'),
      nextArrow: jQuery('.nav_slider .nav_next'),
    });
    jQuery('.slider_story').slick({
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_main').slick({
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      asNavFor: '.slider_food'
    });
    jQuery('.slider_food').slick({
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: true,
      focusOnSelect: true,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.png" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.png" class="img-fluid"/></div>',
      asNavFor: '.slider_main',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_rooftop').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: true,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_water').slick({
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: true,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
      ]
    });
    jQuery('.slider_event').slick({
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: true,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
    });
    jQuery('.slider_news').slick({
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
    }); 
    jQuery('.slider_special').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1500,
      dots: false,
      arrows: true,
      centerPadding: '0px',
      centerMode: true,
      prevArrow: '<div class="prev_slider"><img src="assets/images/prev.svg" class="img-fluid"/></div>',
      nextArrow: '<div class="next_slider"><img src="assets/images/next.svg" class="img-fluid"/></div>',
    });
  },
  menumobile: function () {
    jQuery('.hamburger_btn').click(function(e){
        e.preventDefault();
        jQuery('.hamburger-icon').toggleClass('open');
        jQuery('#menu-mobile').toggleClass('open');
        jQuery('.overlay_menu').toggleClass('is-active');
    });
    jQuery('.overlay_menu').click(function () {
        jQuery('.hamburger-icon').removeClass('open');
        jQuery('#menu-mobile').removeClass('open');
        jQuery('.overlay_menu').removeClass('is-active');
    });
  },
  scrollmenu: function (e) {
    var position = jQuery(window).scrollTop();

// should start at 0

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if(scroll > 50) {
            jQuery("#header_site").addClass('scrollDown');
        } else {
            jQuery("#header_site").removeClass('scrollDown');
        }
        position = scroll;
    });
  },
}
jQuery(document).ready(function () {
  App.homeslider();
  App.menumobile();
  App.scrollmenu();
  AOS.init({
    disable: 'mobile'
  });
});