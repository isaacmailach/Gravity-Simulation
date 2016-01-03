$(document).ready(function() {
  $('#canvas').on('mousedown', function(e) {
    var left = $(this).offset().left;
    var top = $(this).offset().top;
    var startx = e.pageX;
    var starty = e.pageY;
    $('#canvas').on('mouseup mousemove', function handler(e) {
      if (e.type === 'mouseup') {
        balls.push(new Ball(properties.sliders.d, properties.sliders.r, 0, 0, startx - left, starty - top));
      } else if (e.type === 'mousemove'){
         $('#canvas').on('mousemove', function evhandler(e) {
           dragline.drag = true;
           dragline.startx = startx;
           dragline.starty = starty;
           dragline.currentx = e.pageX;
           dragline.currenty = e.pageY;
           $('#canvas').on('mouseup', function evehandler() {
              $('#canvas').off('mousemove', evhandler);
              $('#canvas').off('mouseup', evehandler);
           });
         });
        $('#canvas').on('mouseup', function ehandler(e) {
          var endx = e.pageX;
          var endy = e.pageY;
          var vx = (startx - endx) * properties.sliders["sling-strength"];
          var vy = (starty - endy) * properties.sliders["sling-strength"];
          balls.push(new Ball(properties.sliders.d, properties.sliders.r, vx, vy, endx - left, endy - top));
          dragline.drag = false;
          $('#canvas').off('mouseup', ehandler);
        });
      }
      $('#canvas').off('mouseup mousemove', handler);
    });
  });

  $('#menu_open').click(function() {
    $('#menu').addClass('open');
  });
  $('#menu_close').click(function() {
    $('#menu').removeClass('open');
  });
});
