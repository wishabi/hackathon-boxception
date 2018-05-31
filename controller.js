class Controller {
  constructor(draw) {
    var self = this
    self.draw = draw
    self.box1 = null
    self.box2 = null
    self.create_line = false

    EE.on('box_clicked', Controller.box_clicked(self));
  }

  static box_clicked(self, box) {
    return function(box) {
      console.log("Controller.box_clicked!", box)
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