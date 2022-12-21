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
    M.toast({html: 'I am a toast!'})
    $('.modal').modal();
    $('.sidenav').sidenav();
    AOS.init();
  });