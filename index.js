// initialize SVG.js
var draw = SVG('drawing').size(750, 400)
draw.rect(750, 750).fill('#EBEDEF')

var box1 = new Box(100, 50, draw)

var box2 = new Box(100, 50, draw)
box2.svg_e.move(200, 100)

var line = new Line(box1, box2, draw)
