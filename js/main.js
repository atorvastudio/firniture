// Hamburger
var check = document.querySelector('.checkbox-toggle');

var menu = document.querySelector('.menu');
var menuDiv = document.querySelector('.menu > div');
var menuDivDiv = document.querySelector('.menu > div > div');

var hamburgerDiv = document.querySelector('.hamburger > div')

check.onclick = function () {
  menu.classList.toggle('menu-on');
  menuDiv.classList.toggle('menu-div-on');
  menuDivDiv.classList.toggle('menu-div-div-on');
  hamburgerDiv.classList.toggle('hamburgerAnim');
}

var menuLink = document.querySelectorAll('ul > li > a');

for (i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function (e) {
    e.preventDefault();

    menu.classList.toggle('menu-on');
    menuDiv.classList.toggle('menu-div-on');
    menuDivDiv.classList.toggle('menu-div-div-on');
    hamburgerDiv.classList.toggle('hamburgerAnim');
    check.checked = false;

    var selector = this.getAttribute('href');
    var h = $(selector);
    $('html, body').animate({
      scrollTop: h.offset().top - 100
    }, 0);
  }
}




// SLIDER

// Params
var mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
var mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          var swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (var i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
var navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
var navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;


// END SLIDER