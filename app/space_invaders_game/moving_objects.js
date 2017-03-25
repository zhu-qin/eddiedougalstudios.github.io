import Utils from './utils.js'

class MovingObject {

  constructor(params) {
    this.image = params.image;
    this.x_pos = params.x_pos;
    this.y_pos = params.y_pos;
    this.game = params.game;
    this.radius = params.radius;
  }

// draw circles to see collisions and test
 draw(){
    this.showImage();
  }

 showImage() {
    this.game.ctx.drawImage(
      this.image, this.x_pos - Utils.offsetObject,
      this.y_pos - Utils.offsetObject,
      50,
      50
    );
  }

  moveObj(vector){
    this.x_pos += vector.x;
    this.y_pos += vector.y;
  }

  collideWith (otherObj) {
    let distance = Math.sqrt(Math.pow((this.x_pos - otherObj.x_pos), 2) + Math.pow((this.y_pos - otherObj.y_pos), 2));
    if (distance < this.radius + otherObj.radius) {
      return true;
    }
    return false;
  }
}

module.exports = MovingObject;
