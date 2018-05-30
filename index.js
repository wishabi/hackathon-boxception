var width = 750
var height = 500
var draw = SVG('drawing')
  .size(width, height)
  .panZoom({zoomMin: 0.5, zoomMax: 20})

c = new Controller(draw)
var b = new Box(200, 100, draw, c)

document.querySelector("#add_box").onclick = function() {
  new Box(200, 100, draw, c)
}

document.querySelector("#add_line").onclick = function() {
  c.create_line = true
}

document.querySelector("#reset_zoom").onclick = function() {
  draw.zoom(1)
}
