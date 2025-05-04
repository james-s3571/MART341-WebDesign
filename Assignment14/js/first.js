var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// first line

var grd = ctx.createRadialGradient(80, 70, 5, 100, 60, 110);
grd.addColorStop(0, "green");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(20, 10, 180, 100);