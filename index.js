// initialize SVG.js
var draw = SVG('drawing').size(750, 400)
draw.rect(750, 750).fill('#EBEDEF')

var b1 = new Box(100, 50, draw)

var b2 = new Box(100, 50, draw)
b2.svg_e.move(100, 100)