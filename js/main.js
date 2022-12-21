$(document).ready(function(){
    $('.tap-target').tapTarget();
    $('.carousel').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();

    // Initialize carousel for event
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    AOS.init();
  });