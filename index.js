var draw = SVG('drawing').size(750, 400)
draw.rect(750, 750).fill('#EBEDEF')

c = new Controller(draw)

document.querySelector("#add_box").onclick = function() {
  new Box(100, 50, draw, c)
}

document.querySelector("#add_line").onclick = function() {
  c.create_line = true
}
