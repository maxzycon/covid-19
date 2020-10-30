"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 5
      },
      600: {
        items: 2,
        margin: 40,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
        loop: false
      }
    }
  });
});