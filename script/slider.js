var main = function() {
  // Next Button Scrolls forward
  $('.slider-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    };

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  // Previous Button Scrolls back
  $('.slider-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    };

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  // Dot 1 Clicked
  $('.dot-1').click(function(){
    var currentSlide = $('.active-slide');
    var slide1 = $('.slide').first();
    if (slide1.hasClass('active-slide')) {} else {
      var currentDot = $('.active-dot');
      var dot1 = $('.dot').first();

      currentSlide.fadeOut(600).removeClass('active-slide');
      slide1.fadeIn(600).addClass('active-slide');

      currentDot.removeClass('active-dot');
      dot1.addClass('active-dot');
    };
  });

  // Dot 2 Clicked
  $('.dot-2').click(function(){
    var currentSlide = $('.active-slide');
    var slide2 = $('.slide').eq(1);
    if (slide2.hasClass('active-slide')) {} else {
      var currentDot = $('.active-dot');
      var dot2 = $('.dot').eq(1);

      currentSlide.fadeOut(600).removeClass('active-slide');
      slide2.fadeIn(600).addClass('active-slide');

      currentDot.removeClass('active-dot');
      dot2.addClass('active-dot');
    };
  });

  // Dot 3 Clicked
  $('.dot-3').click(function(){
    var currentSlide = $('.active-slide');
    var slide3 = $('.slide').eq(2);
    if (slide3.hasClass('active-slide')) {} else {
      var currentDot = $('.active-dot');
      var dot3 = $('.dot').eq(2);

      currentSlide.fadeOut(600).removeClass('active-slide');
      slide3.fadeIn(600).addClass('active-slide');

      currentDot.removeClass('active-dot');
      dot3.addClass('active-dot');
    };
  });

  // Dot 4 Clicked
  $('.dot-4').click(function(){
    var currentSlide = $('.active-slide');
    var slide4 = $('.slide').eq(3);
    if (slide4.hasClass('active-slide')) {} else {
      var currentDot = $('.active-dot');
      var dot4 = $('.dot').eq(3);

      currentSlide.fadeOut(600).removeClass('active-slide');
      slide4.fadeIn(600).addClass('active-slide');

      currentDot.removeClass('active-dot');
      dot4.addClass('active-dot');
    };
  });
}

$(document).ready(main);
