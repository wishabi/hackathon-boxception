const EE = new EventEmitter();

var width = 750
var height = 500
const draw = SVG('drawing')
  .size(width, height)
  .panZoom({zoomMin: 0.5, zoomMax: 100, zoomFactor: 0.5})

c = new Controller(draw)

document.querySelector("#add_box").onclick = function() {
  c.add_box(200, 100)
}

document.querySelector("#add_line").onclick = function() {
  c.create_line = true
}

document.querySelector("#reset_zoom").onclick = function() {
  draw.zoom(1)
}
