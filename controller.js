class Controller {
  constructor(draw) {
    this.draw = draw
    this.box1 = null
    this.box2 = null
    this.create_line = false
  }

  box_clicked(box) {
    console.log("Controller.box_clicked!", box)
    if (this.create_line) {
      if (this.box1 == null) {
        this.box1 = box
        console.log("Box1 selected")
      } else if (this.box2 == null) {
        console.log("Box2 selected")
        this.box2 = box

        new Line(this.box1, this.box2, this.draw, this)

        this.box1 = null
        this.box2 = null
        this.create_line = false
      }
    }
  }
}