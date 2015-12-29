$(document).ready(function() {
  function Refresh() {
    if (!properties.paused) setTimeout(Refresh, 1000 / properties.framerate);

    Draw();
    Movement();
    Gravity();
  }

  function Draw() {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    for (ball of balls) {
      canvas.fillStyle = ball.colour;
      canvas.beginPath();
      canvas.arc(ball.x, ball.y, ball.r * properties.scale, 0, Math.PI * 2, true);
      canvas.fill();
      canvas.closePath();
    }
  }
  function Movement() {
    for (ball of balls) {
      ball.x += ball.v.x * properties.scale * properties.speed / properties.framerate;
      ball.y += ball.v.y * properties.scale * properties.speed / properties.framerate;
      ball.v.x += ball.a.x * properties.speed / properties.framerate;
      ball.v.y += ball.a.y * properties.speed / properties.framerate;
      ball.a.x = ball.f.x / ball.m;
      ball.a.y = ball.f.y / ball.m;
    }
  }
  function Gravity() {
    for (ball of balls) {
      ball.f.x = 0;
      ball.f.y = 0;
      for (object of balls) {
        if (ball !== object) {
          var distance = Math.sqrt(Math.pow(ball.x - object.x, 2) + Math.pow(ball.y - object.y, 2));
          var fg = 6.674 * Math.pow(10, -20) * ball.m * object.m / Math.pow(distance / properties.scale, 2);
          ball.f.x += Math.sqrt(Math.pow(fg, 2) / Math.pow(distance, 2) * Math.pow(ball.x - object.x, 2)) * ((object.x - ball.x) / Math.abs(object.x - ball.x));
          ball.f.y += Math.sqrt(Math.pow(fg, 2) / Math.pow(distance, 2) * Math.pow(ball.y - object.y, 2)) * ((object.y - ball.y) / Math.abs(object.y - ball.y));

          if (distance < (ball.r + object.r) * properties.scale) {
            if (ball.m > object.m) {
              balls.splice(balls.indexOf(object), 1);
            } else if (ball.m < object.m) {
              balls.splice(balls.indexOf(ball), 1);
            } else if (ball.m == object.m) {
              balls.splice(balls.indexOf(ball), 1);
              balls.splice(balls.indexOf(object), 1);
            }
          }
        }
      }
    }
  }
  Refresh();
});
