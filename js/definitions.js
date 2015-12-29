var canvas = new Object();
var window = new Object();

var properties = {
  "d": 5.514 * Math.pow(10, 12),
  "framerate": 60,
  //"paused": false,
  "r": 6371,
  "scale": Math.pow(10, -2),
  "speed": 100
};

var balls = new Array();

function Ball(colour, d, r, x, y) {
    this.a = new Object();
    this.a.x = 0;
    this.a.y = 0;
    this.colour = colour;
    this.d = d;
    this.f = new Object();
    this.f.x = 0;
    this.f.y = 0;
    this.m = 4 / 3 * Math.pow(r, 3) * Math.PI * d;
    this.v = new Object();
    this.v.x = 0;
    this.v.y = 0;
    this.r = r;
    this.x = x;
    this.y = y;
}
