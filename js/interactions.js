$(document).ready(function() {
  $('#canvas').on('mousedown', function(e) {
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    var startx = e.pageX;
    var starty = e.pageY;
    $('#canvas').on('mouseup mousemove', function handler(e) {
      if (e.type === 'mouseup') {
        balls.push(new Ball(properties.d, properties.r, 0, 0, startx - left, starty - top));
      } else if (e.type === 'mousemove'){
        $('#canvas').on('mouseup', function ehandler(e) {
          var endx = e.pageX;
          var endy = e.pageY;
          var vx = (endx - startx) * properties["pull-strength"];
          var vy = (endy - starty) * properties["pull-strength"];
          balls.push(new Ball(properties.d, properties.r, vx, vy, startx - left, starty - top));
          $('#canvas').off('mouseup', ehandler);
        });
      }
      $('#canvas').off('mouseup mousemove', handler);
    });
    $('#canvas').on('mousemove', function(e) {
      dragline.drag = true;
      dragline.startx = startx;
      dragline.starty = starty;
      dragline.currentx = e.pageX;
      dragline.currenty = e.pageY;
    });
  });

  $('#menu_open').click(function() {
    $('#menu').addClass('open');
  });
  $('#menu_close').click(function() {
    $('#menu').removeClass('open');
  });
});
