import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';
import Asteroid from './asteroid';
import Sprite from './sprite';

import LevelGenerator from "./level-generator";

export default class GameScene extends Scene {

    constructor (levelConfig) {
        super ();
        this.levelConfig = levelConfig;
        this.iter = 0;
    }

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
    let backgroundStartPosition = -300;
    this.background = this.add.image(0, backgroundStartPosition, 'space').setOrigin(0, 0)// this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.keyboard = new Keyboard(this);
    this.levelGenerator = new LevelGenerator(this.levelConfig, this);
    this.cameras.main.setBounds(-1024, -1024, 1024 * 2, 1024 * 2);

  }

  update(time, delta) {
    this.ship.move(this.keyboard.isLeftPressed(), this.keyboard.isRightPressed(), this.keyboard.isUpPressed(), this.keyboard.isDownPressed());
    //* this.asteroid.update();
    this.levelGenerator.update(time);

    this.moveBackground();
  }  
  
  moveBackground() {
    this.cameras.main.scrollY= -20*this.iter;
    this.iter += 0.01;
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

}
