
// Extra header language and currency onclick show hidden elements

let langDropdown = $(".uk .dropdown");
let currencyDropdown = $(".usd .dropdown");
let extraLang = $(".fr,.de");
let extraCurrency = $(".eur");


langDropdown.click(function () {
  extraLang.toggle();
});

currencyDropdown.click(function () {
  extraCurrency.toggle();
});


//Header mobile version + burger transform

var burger = $(".mobile_menu_btn");
var burgerFirstbar = $(".bar.top");
var burgerSecondbar = $(".bar.middle");
var burgerThirdbar = $(".bar.bottom");
var navigation = $(".main_navigation, .submit_navigation.btn");
var navigationWrap = $(".navigation_wrap");

burger.click(function toggleMainNav() {
  navigation.toggle();
  navigationWrap.toggleClass('increaseHeight');
  burger.toggleClass('changeBg');
  burgerFirstbar.toggleClass('transformFirstBar');
  burgerSecondbar.toggleClass('transformSecondBar');
  burgerThirdbar.toggleClass('transformThirdBar');
});

// Range slider in banner section

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [200, 500],
    slide: function (event, ui) {
      $("#min_amount").val("$" + ui.values[0] + ".000");
      $("#max_amount").val("$" + ui.values[1] + ".000");
    }
  });
  $("#min_amount").val("$" + $("#slider-range").slider("values", 0) + ".000");
  $("#max_amount").val("$" + $("#slider-range").slider("values", 1) + ".000");
});

// Change heart favicon color and class on hover and focus

let starFavicon = $(".far.fa-star");

starFavicon.each(function (index) {
  $(this).hover(function () {
    $(this).css('color', '#f26c1c');
    $(this).removeClass('far');
    $(this).addClass('fas');
  },
    function () {
      $(this).css('color', '#353f45');
      $(this).addClass('far');
      $(this).removeClass('fas');
    }
  )
  $(this).focus(function () {
    $(this).css('color', '#f26c1c');
    $(this).removeClass('far');
    $(this).addClass('fas');
  },
    function () {
      $(this).css('color', '#353f45');
      $(this).addClass('far');
      $(this).removeClass('fas');
    }
  )
});


// Carousels 

$('.carousel').each(function (index) {
  $(this).slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 4,
    pauseOnHover: true,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          vertical: true,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>',
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev"></div>',
          nextArrow: '<div class="next"></div>'
        }
      }
    ]
  });
});

$(window).on('resize orientationchange', function () {
  $('.carousel').slick('resize');
});

