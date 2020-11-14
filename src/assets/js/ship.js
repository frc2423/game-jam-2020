import Sprite from "./sprite";
import Bullets from "./bullets";

export default class Ship extends Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'ship');
    this.setMaxVelocity(250);
    this.setDrag(true, 0.80);
    this.bulletCounter = 0;
  }

  move(left, right, up, down) {
    let x = 0;
    let y = 0;

    //             -+ Horizontal movement +-
    // For if you're holding both left and right down
    if(left && right) {
        x=0;
    } 
    //for if you're holding left down
    else if (left){
        if(this.getXAcceleration()<=0){
        x= -1000;
        }
    }
    //for if you're holding right down
    else if (right) {
        if(this.getXAcceleration()>=0){
        x= 1000;
        }
    }

    //            -+ Vertical Movement +-
    // for if you're holding both up and down
    if(up && down) {
        y=0;
    }
    // for if you're holding up down
    else if(up) {
        if(this.getYAcceleration() <= 0){
            y=-1000;
        }
        
    }
    // for if you're holding down down
    else if(down) {
        if(this.getYAcceleration() >= 0){
            y=1000;
        }
    }

    this.setAcceleration(x,y);
    this.wrap();
  }

  shoot(space) {
      if (this.bulletCounter > 100) {
          if (space) {
            let bullets = new Bullets(this.scene, this.getX(), this.getY(), this.getYVelocity());
            this.bulletCounter = 0;
        }
      }
      this.bulletCounter++;
    }
}
