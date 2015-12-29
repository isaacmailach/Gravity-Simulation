$(document).ready(function() {
  $('#canvas').click(function(e) {
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    balls.push(new Ball('red', properties.d, properties.r, e.pageX - left, e.pageY - top));
  });

  $('#menu_open').click(function() {
    $('#menu').addClass('open');
  });
  $('#menu_close').click(function() {
    $('#menu').removeClass('open');
  });
});
