import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';
import Blackhole from './black-hole';
import Asteroid from './asteroid';
import Sprite from './sprite';

import LevelGenerator from "./level-generator";

export default class GameScene extends Scene {

    constructor (levelConfig) {
        super ();
        this.levelConfig = levelConfig;

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

    this.load.spritesheet('shipRightSheet', 'assets/media/images/ship/shipRight_64x64.png', {frameWidth: 64,frameHeight: 64});
    this.load.spritesheet('shipIdleSheet', 'assets/media/images/ship/shipIdle_64x64.png', {frameWidth: 64,frameHeight: 64});
    this.load.spritesheet('shipLeftSheet', 'assets/media/images/ship/shipLeft_64x64.png', {frameWidth: 64,frameHeight: 64});
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    this.ship = new Ship(this, 400, 300);
    
    this.keyboard = new Keyboard(this);
    this.levelGenerator = new LevelGenerator(this.levelConfig, this);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
    this.ship.move(this.keyboard.isLeftPressed(), this.keyboard.isRightPressed(), this.keyboard.isUpPressed(), this.keyboard.isDownPressed());
    //* this.asteroid.update();
    this.levelGenerator.update(time);    
    

  }  
 
  getWidth() {
      return this.game.config.width;
  }

  getHeight() {
      return this.game.config.height;
  }

  createAnimation(config) {
    this.anims.create(config);
  }
}
