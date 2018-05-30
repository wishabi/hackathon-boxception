// initialize SVG.js
var draw = SVG('drawing')

// draw pink square
var rect = draw.rect(200, 100).fill('#f06')
rect.dx(50)
rect.dx(50)
rect.dy(50)
rect.draggable()
