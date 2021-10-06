$(window).scroll(function(){
  if($(window).scrollTop()>500){
    $(".backtotop").fadeIn()
  }
  else{
    $(".backtotop").fadeOut()
  }

  if($(window).scrollTop()>500){
    $(".menu").addClass("fixedmenu")
  }
  else{
    $(".menu").removeClass("fixedmenu")
  }
})

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

$('.js-preloader').preloadinator({
  minTime: 200
});




$('.service-slider').slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev2"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next2"></i>',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var mixer = mixitup('.main-container');

$('.testi-slider').slick({
  slidesToShow: 2,
  arrows: true,
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev1"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next1"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      },
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






