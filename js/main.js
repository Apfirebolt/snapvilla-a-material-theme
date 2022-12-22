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
    
    $('.modal').modal();
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with 
    });

    AOS.init();
  });