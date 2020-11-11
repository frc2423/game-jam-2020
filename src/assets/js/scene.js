import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';

export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullet', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.keyboard = new Keyboard(this);
    this.ship.setMaxVelocity(300);
    this.ship.setDrag(true, 0.80);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
    this.shipMovement();

  }
  /*
   * this is how the ship moves - Made by David -
   */
  shipMovement(){

    let x = 0;
    let y = 0;

    //             -+ Horizontal movement +-
    // For if your holding both left and right down
    if(this.keyboard.isLeftPressed() && this.keyboard.isRightPressed()){
        x=0;
    } 
    //for if your holding left down
    else if (this.keyboard.isLeftPressed()){
        if(this.ship.getXAcceleration()<=0){
        x= -1000;
        }
    }
    //for if your holding right down
    else if (this.keyboard.isRightPressed()){
        if(this.ship.getXAcceleration()>=0){
        x= 1000;
        }
    }

    //            -+ Vertical Movement +-
    // for if your holding both up and down
    if(this.keyboard.isUpPressed() && this.keyboard.isDownPressed()){
        y=0;
    }
    // for if your holding up down
    else if(this.keyboard.isUpPressed()){
        if(this.ship.getYAcceleration() <= 0){
            y=-1000;
        }
        
    }
    // for if your holding down down
    else if(this.keyboard.isDownPressed()){
        if(this.ship.getYAcceleration() >= 0){
            y=1000;
        }
    }
    this.ship.setAcceleration(x,y);
    this.ship.wrap();


  }
}
