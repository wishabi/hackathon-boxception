class Controller {
  constructor(draw) {
    var self = this
    self.draw = draw
    self.last_selected_box = null
    self.box1 = null
    self.box2 = null
    self.create_line = false
    self.draw_depth = 1
    self.depth_to_boxes = {}

    EE.on('box_clicked', Controller.box_clicked(self));

    self.draw.on('zoom', function(ev) {
      // console.log(ev)
      Controller.update_draw_depth(self, ev.detail.box.height)
    })
  }

  add_box(width, height) {
    if (this.draw_depth == 1) {
      var box = new Box(width, height, this.draw)
      if (this.draw_depth in this.depth_to_boxes) {
        this.depth_to_boxes[this.draw_depth].push(box)
      } else {
        this.depth_to_boxes[this.draw_depth] = [box]
      }
    }

    if (this.draw_depth == 2) {
      var box = this.last_selected_box.add_sub_box()
      if (this.draw_depth in this.depth_to_boxes) {
        this.depth_to_boxes[this.draw_depth].push(box)
      } else {
        this.depth_to_boxes[this.draw_depth] = [box]
      }
    }
  }

  // hacky: update draw depth based on viewbox height
  static update_draw_depth(self, box_height) {
    console.log("update_draw_depth, box_height:", box_height)

    var level2boxes = self.depth_to_boxes[2]
    if (box_height <= 250) {
      self.draw_depth = 2

      if (typeof level2boxes !== 'undefined') {
        level2boxes.forEach(function(box) {
          box.svg_group.show()
        });
      }
    } else {
      self.draw_depth = 1
      if (typeof level2boxes !== 'undefined') {
        level2boxes.forEach(function(box) {
          box.svg_group.hide()
        });
      }
    }

    console.log("draw_depth:", self.draw_depth)
  }

  static box_clicked(self, box) {
    return function(box) {
      console.log("Controller.box_clicked!", box)

      self.last_selected_box = box

      if (self.create_line) {
        if (self.box1 == null) {
          self.box1 = box
          console.log("Box1 selected")
        } else if (self.box2 == null) {
          console.log("Box2 selected")
          self.box2 = box

          new Line(self.box1, self.box2, self.draw, self)

          self.box1 = null
          self.box2 = null
          self.create_line = false
        }
      }
    }
  }

}