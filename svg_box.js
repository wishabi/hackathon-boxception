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
    self.width = width
    self.height = height

    // Create svg and save
    self.svg_group = draw.group()
    self.svg_group.rect(width, height).fill(get_colour())
    // self.svg_group.rect(width / 2, height / 2).fill(get_colour()).draggable()
    self.svg_group.draggable()

    var title = prompt("Enter box title.")
    self.title = title
    self.svg_group.text(title).fill(get_colour()).font({
      size: self.height / 10
    })

    self.lines = []

    // Register event handlers
    self.svg_group.on('dragend', function(event) {
      Box.dragend(self, event)
    })

    self.svg_group.click(function(event) {
      Box.onclick(self, event)
    })

    // self.svg_group.on('mouseover', function(event) {
    //   console.log('mouseover')
    // })

    // self.svg_group.on('mouseout', function(event) {
    //   console.log('mouseout')
    // })
  }

  x() {
    return this.svg_group.x()
  }

  y() {
    return this.svg_group.y()
  }

  get_left_center() {
    var x = this.x()
    var y = this.y() + (this.height / 2)
    return {x: x, y: y}
  }

  get_right_center() {
    var x = this.x() + this.width
    var y = this.y() + (this.height / 2)
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

  add_sub_box() {
    var box = new Box(this.width / 5, this.height / 5, this.svg_group)
    box.svg_group.addTo(this.svg_group)
    return box
  }

  // Event handlers
  static dragend(self, event) {
    console.log("dragend: " + self.svg_group.x() + ", " + self.svg_group.y())
    console.log(self)
    self.redraw_lines()
  }

  static onclick(self, event) {
    console.log("Box.onclick: ", event)
    event.stopPropagation()
    EE.trigger('box_clicked', [self])
  }
}

