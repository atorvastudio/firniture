var t1 = new TimelineMax();

// animation section "title"
t1.fromTo($('.section-header-title-bg'), 2, {width: 0}, {width: 790})
  .fromTo($('.section-header-title-bg h1'), 1, {opacity: 0},{opacity: 1} )
  .fromTo($('.section-header-title-bg a'), 1, {opacity: 0}, {opacity: 1}, '-=1');


// animation section "why"
var controller = new ScrollMagic.Controller();
var tween1 = TweenMax.staggerFromTo($(".why-item"), 1, {y: 300, opacity:0}, { y : 0,  opacity:1}, 0.1);
var scene = new ScrollMagic.Scene({
  triggerElement: "#tweenMaxWhy"
})
.setTween(tween1)
.addTo(controller);


// animation section 
var tween2 = TweenMax.staggerFromTo($('.how-item'), 3, {opacity: 0}, {opacity: 1}, 0.3);
var scene = new ScrollMagic.Scene({
  triggerElement: "#tweenMaxHow"
})
.setTween(tween2)
.addTo(controller);



