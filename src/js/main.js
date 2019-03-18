
// Extra header language and currency onclick show hidden elements

let extraHeader = $(".extra_header");
let langDropdown = $(".extra_item.language");
let currencyDropdown = $(".extra_item.currency");
let extraLang = $(".fr,.de");
let extraCurrency = $(".eur");

langDropdown.hover(function () {
  extraLang.css("display", "block");
  extraHeader.css("border-bottom-color", "transparent");
},
  function () {
    extraLang.css("display", "none");
    extraHeader.css("border-bottom-color", "#e7e4e4");
  }
)

langDropdown.focus(function () {
  extraLang.css("display", "block");
  extraHeader.css("border-bottom-color", "transparent");
},
  function () {
    extraLang.css("display", "none");
    extraHeader.css("border-bottom-color", "#e7e4e4");
  }
)

currencyDropdown.hover(function () {
  extraCurrency.css("display", "block");
  extraHeader.css("border-bottom-color", "transparent");
},
  function () {
    extraCurrency.css("display", "none");
    extraHeader.css("border-bottom-color", "#e7e4e4");
  }
)

currencyDropdown.focus(function () {
  extraCurrency.css("display", "block");
  extraHeader.css("border-bottom-color", "transparent");
},
  function () {
    extraCurrency.css("display", "none");
    extraHeader.css("border-bottom-color", "#e7e4e4");
  }
)

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

let carousel = $(".carousel");
let partnersCarousel = $(".partners_carousel");

carousel.each(function (index) {
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
    prevArrow: '<div class="prev animated fast"></div>',
    nextArrow: '<div class="next animated fast"></div>',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          vertical: true,
          dots: false,
          arrows: true,
          prevArrow: '<div class="prev animated fast"></div>',
          nextArrow: '<div class="next animated fast"></div>',
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
          prevArrow: '<div class="prev animated fast"></div>',
          nextArrow: '<div class="next animated fast"></div>',
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
          prevArrow: '<div class="prev animated fast"></div>',
          nextArrow: '<div class="next animated fast"></div>'
        }
      }
    ]
  });
});

partnersCarousel.slick({
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 10000,
  slidesToShow: 6,
  pauseOnHover: true,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<div class="prev animated fast"></div>',
  nextArrow: '<div class="next animated fast"></div>',

  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        vertical: true,
        dots: false,
        arrows: true,
        prevArrow: '<div class="prev animated fast"></div>',
        nextArrow: '<div class="next animated fast"></div>',
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<div class="prev animated fast"></div>',
        nextArrow: '<div class="next animated fast"></div>',
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 10000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<div class="prev animated fast"></div>',
        nextArrow: '<div class="next animated fast"></div>'
      }
    }
  ]
});

$(window).on('resize orientationchange', function () {
  carousel.slick('resize');
  partnersCarousel.slick('resize');
});

// WOW Animations + Scroll animations on carousel items

new WOW().init();

/* stop animation on small devices */
if ($(window).width() <= 971) {
  $(".wow").removeClass("wow");
  $(".carousel_item").removeClass("animated");
  $(".slick-arrow").removeClass("animated");
  $(".best_agents_item").removeClass("animated");
}

var screen1 = $(".latest_properties_carousel .prev");
var screen2 = $(".latest_properties_carousel .next");
var screen3 = $(".latest_properties_carousel .carousel_item");
var screen4 = $(".best_agents_carousel .prev");
var screen5 = $(".best_agents_carousel .next");
var screen6 = $(".best_agents_carousel .best_agents_item");
var screen7 = $(".featured_listings_carousel .prev");
var screen8 = $(".featured_listings_carousel .next");
var screen9 = $(".featured_listings_carousel .carousel_item");
var screen10 = $(".partners_carousel .prev");
var screen11 = $(".partners_carousel .next");
var screen12 = $(".partners_carousel .carousel_item");


var screens = [
  screen1, screen2, screen3,
  screen4, screen5, screen6,
  screen7, screen8, screen9,
  screen12
]


$(document).ready(function () {

  $(window).load(function () {
    var windowHeight = $(window).height();

    function scrollPoints() {
      var scroll = $(window).scrollTop() + windowHeight;

      for (let i = 0; i < screens.length; i++) {
        if (scroll > screens[i].offset().top) {
          screens[i].addClass("fadeInUp");
        }
      }
    }

    checkVisibleElements();

    function checkVisibleElements() {
      scrollPoints();
      window.requestAnimationFrame(checkVisibleElements)
    }
  });
});

// Accordion tabs

function showAccordionTabs() {

  let firstTab = $(".first_item .accrodion_button");
  let secondTab = $(".second_item .accrodion_button");
  let thirdTab = $(".third_item .accrodion_button");

  let firstTabicon = $(" .first_item .accrodion_button i");
  let secondTabicon = $(".second_item .accrodion_button i");
  let thirdTabicon = $(".third_item .accrodion_button i");

  let firstTabcont = $(".first_item .listing_item_content");
  let secondTabcont = $(".second_item .listing_item_content");
  let thirdTabcont = $(".third_item .listing_item_content");

  firstTab.click(function () {
    firstTabicon.toggleClass("fa-minus");
    firstTabicon.toggleClass("fa-plus");
    firstTabcont.toggleClass("itemContentVisible");
  });
  secondTab.click(function () {
    secondTabicon.toggleClass("fa-minus");
    secondTabicon.toggleClass("fa-plus");
    secondTabcont.toggleClass("itemContentVisible");
  });
  thirdTab.click(function () {
    thirdTabicon.toggleClass("fa-minus");
    thirdTabicon.toggleClass("fa-plus");
    thirdTabcont.toggleClass("itemContentVisible");
  });
}

showAccordionTabs();


//ScrollTop Button init function

function initScrollTop() {
  let scrollContainer = $(".scroll_container");
  let scrollBtn = $(".scroll_top_btn");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollContainer.fadeIn();
    } else {
      scrollContainer.fadeOut();
    }
  });
  scrollBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
}

initScrollTop();




