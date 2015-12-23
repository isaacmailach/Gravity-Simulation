$(document).ready(function() {
  function Refresh() {
    if (!paused) setTimeout(Refresh, 1000 / framerate);

    Draw();
    Movement();
    Gravity();
  }

  function Draw() {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    for (ball of balls) {
      canvas.fillStyle = ball.colour;
      canvas.beginPath();
      canvas.arc(ball.x, ball.y, ball.r * scale, 0, Math.PI * 2, true);
      canvas.fill();
      canvas.closePath();
    }
  }
  function Movement() {
    for (ball of balls) {
      ball.x += ball.v.x * scale * speed;
      ball.y += ball.v.y * scale * speed;
      ball.v.x += ball.a.x * scale * speed;
      ball.v.y += ball.a.y * scale * speed;
      ball.a.x = ball.f.x / ball.m;
      ball.a.y = ball.f.y / ball.m;
    }
  }
  function Gravity() {
    for (ball of balls) {
      for (object of balls) {
        if (ball !== object) {
          var distance = Math.sqrt(Math.pow(ball.x - object.x, 2) + Math.pow(ball.y - object.y, 2));
          var fg = 6.674 * Math.pow(10, -17) * ball.m * object.m / Math.pow(distance / scale, 2);
          ball.f.x = Math.sqrt(Math.pow(fg, 2) / Math.pow(distance, 2) * Math.pow(ball.x - object.x, 2)) * ((object.x - ball.x) / Math.abs(object.x - ball.x));
          ball.f.y = Math.sqrt(Math.pow(fg, 2) / Math.pow(distance, 2) * Math.pow(ball.y - object.y, 2)) * ((object.y - ball.y) / Math.abs(object.y - ball.y));

          if (distance < (ball.r + object.r) * scale) {
            balls.splice(ball.id, 1);
            balls.splice(object.id, 1);
          }
        }
      }
    }
  }
  Refresh();
});
