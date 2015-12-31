var canvas = new Object();
var window = new Object();

var properties = {
  "d": 5514,
  "framerate": 60,
  //"paused": false,
  "pull-strength": 0.20,
  "r": 6371,
  "scale": Math.pow(10, -2),
  "speed": 1000
};

var balls = new Array();

function Ball(d, r, vx, vy, x, y) {
    this.a = new Object();
    this.a.x = 0;
    this.a.y = 0;
    var num = Math.ceil(parseInt((1 - d / 10000) * 255));
    var hex = null;
    if (num <= 15) {
      hex = '0' + num.toString(16);
    } else {
      hex = num.toString(16);
    }
    this.colour = '#' + hex + "0000";
    this.d = d * Math.pow(10, 9);
    this.f = new Object();
    this.f.x = 0;
    this.f.y = 0;
    this.m = 4 / 3 * Math.pow(r, 3) * Math.PI * d * Math.pow(10, 9);
    this.v = new Object();
    this.v.x = vx;
    this.v.y = vy;
    this.r = r;
    this.x = x;
    this.y = y;
}

var dragline = {
  "drag": false,
  "startx": null,
  "starty": null,
  "currentx": null,
  "currenty": null
}
