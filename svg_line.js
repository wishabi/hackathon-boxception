class Line {
  constructor(box1, box2, draw) {
    var self = this

    // Save svg parent and create svg
    self.draw = draw

    self.box1 = box1
    self.box2 = box2

    this.draw_line()
  }

  draw_line() {
    var left_box = this.get_left_box()
    var right_box = this.get_right_box()

    var line_left = left_box.get_right_center()
    var line_right = right_box.get_left_center()

    this.svg_e = this.draw.line(
      line_left['x'], line_left['y'],
      line_right['x'], line_right['y']
    ).stroke({ width: 1})
  }
  
  get_left_box() {
    if (this.box1.x() <= this.box2.x()) {
      return box1
    } else {
      return box2
    }
  }

  get_right_box() {
    if (this.box1.x() <= this.box2.x()) {
      return box2
    } else {
      return box1
    }
  }


}

