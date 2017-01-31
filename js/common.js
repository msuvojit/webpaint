$(function() {
  var owl = $(".slider");
  owl.owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 800,
    smartSpeed: 1000
  });

  if(window.matchMedia("(max-width: 540px)").matches) {
    $(".brand").owlCarousel({
      loop: true,
      items: 4,
      autoplay: true,
      autoplaySpeed: 800,
      dots: false
    });
  }
  else {
    $(".brand").owlCarousel({
      loop: true,
      items: 5,
      autoplay: true,
      autoplaySpeed: 800,
      smartSpeed: 1000,
      dots: false
    });
  }

  $(".popup-with-zoom-anim").magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  $("#portfolio_grid").mixItUp();

  $(".simplefilter li").click(function() {
    $(".simplefilter li").removeClass("active");
    $(this).addClass('active');
  });

  $(".gotoport").click(function() {
    $(window).scrollTo(document.getElementById("port"), 800);
  });

  $(".gototeam").click(function() {
    $(window).scrollTo(document.getElementById("team"), 800);
  });

  $(".gotoabout").click(function() {
    $(window).scrollTo(document.getElementById("about"), 800);
  });

  $(".gotocont").click(function() {
    $(window).scrollTo(document.getElementById("cont"), 800);
  });

});
