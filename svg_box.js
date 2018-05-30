// TODO: make non event handler methods not-static?

class Box {
  constructor(width, height, draw) {
    var self = this

    // Save svg parent and create svg
    self.draw = draw

    // Create svg and save
    self.svg_e = draw.rect(width, height).fill('#f06')
    self.svg_e.draggable()

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

  // Event handlers
  static dragend(self, event) {
    console.log("dragend: " + self.svg_e.x() + ", " + self.svg_e.y())
    console.log(self)
  }

  static onclick(self, event) {
    console.log("onclick: ", event)
  }
}
