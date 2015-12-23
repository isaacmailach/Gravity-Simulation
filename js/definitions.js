var canvas = new Object();
var framerate = 60;
var ball_id = 0;
var paused = false;
var scale = Math.pow(10, -2);
var speed = 10;
var window = new Object();

var balls = new Array();

function Ball(colour, d, id, r, x, y) {
    this.a = new Object();
    this.a.x = 0;
    this.a.y = 0;
    this.colour = colour;
    this.d = d;
    this.f = new Object();
    this.f.x = 0;
    this.f.y = 0;
    this.id = balls.indexOf(this);
    this.m = 4 / 3 * Math.pow(r, 3) * Math.PI * d;
    this.v = new Object();
    this.v.x = 0;
    this.v.y = 0;
    this.r = r;
    this.x = x;
    this.y = y;
}
