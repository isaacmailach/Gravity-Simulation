$(document).ready(function() {
    function Refresh() {
        if (!paused) setTimeout(Refresh, 1000 / framerate);

        Draw();
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
    Refresh();
});
