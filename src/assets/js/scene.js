import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';
import Asteroid from './asteroid';
import Sprite from './sprite';


export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullet', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
    this.load.image('asteroid', 'assets/media/images/asteroid.png')
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.keyboard = new Keyboard(this);
    this.asteroid = new Asteroid(this, 400, -20);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */

  getWidth() {
      return this.game.config.width;
  }

  getHeight() {
      return this.game.config.height;
  }

  update(time, delta) {
    this.asteroid.update();

  }

}
