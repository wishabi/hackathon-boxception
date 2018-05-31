const colours = [
  '#2191FB',
  '#BA274A',
  '#011627',
  '#44FFD1',
  '#6153CC',
  '#FF423F',
]
var colours_index = 0

function get_colour() {
  var colour = colours[colours_index % colours.length]
  colours_index += 1
  return colour
}

class Box {
  constructor(width, height, draw) {
    var self = this

    self.draw = draw

    // Create svg and save
    self.svg_e = draw.group()
    self.svg_e.rect(width, height).fill(get_colour())
    // self.svg_e.rect(width / 2, height / 2).fill(get_colour()).draggable()
    self.svg_e.draggable()

    self.lines = []

    // Register event handlers
    self.svg_e.on('dragend', function(event) {
      Box.dragend(self, event)
    })

    self.svg_e.click(function(event) {
      Box.onclick(self, event)
    })

    // self.svg_e.on('mouseover', function(event) {
    //   console.log('mouseover')
    // })

    // self.svg_e.on('mouseout', function(event) {
    //   console.log('mouseout')
    // })
  }

  x() {
    return this.svg_e.x()
  }

  y() {
    return this.svg_e.y()
  }

  get_left_center() {
    var x = this.svg_e.x()
    var y = this.svg_e.y() + (this.svg_e.height() / 2)
    return {x: x, y: y}
  }

  get_right_center() {
    var x = this.svg_e.x() + this.svg_e.width()
    var y = this.svg_e.y() + (this.svg_e.height() / 2)
    return {x: x, y: y}
  }

  add_line(line) {
    this.lines.push(line)
  }

  redraw_lines() {
    this.lines.forEach(function(line) {
      line.draw_line()
    })
  }

  // Event handlers
  static dragend(self, event) {
    console.log("dragend: " + self.svg_e.x() + ", " + self.svg_e.y())
    console.log(self)
    self.redraw_lines()
  }

  static onclick(self, event) {
    console.log("Box.onclick: ", event)
    EE.trigger('box_clicked', [self])
  }
}

