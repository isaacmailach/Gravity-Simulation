$(document).ready(function() {
  $('#canvas').click(function(e) {
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    balls.push(new Ball('red', 5.514 * Math.pow(10, 12), 6371.0, e.pageX - left, e.pageY - top));
  });
});
