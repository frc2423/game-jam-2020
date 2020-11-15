import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';
import Asteroid from './asteroid';
import Sprite from './sprite';
import LevelGenerator from "./level-generator";
import Bullets from './bullets';
import Collision from './collision';

export default class GameScene extends Scene {

    constructor (levelConfig) {
        super ();
        this.levelConfig = levelConfig;

    }

  preload() {
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullets', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
    this.load.image('asteroid', 'assets/media/images/asteroid.png')
  }

  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    this.asteroidGroup = this.physics.add.group();
    this.bulletsGroup = this.physics.add.group();
    this.keyboard = new Keyboard(this);
    this.collision = new Collision(this, this.ship);
    this.levelGenerator = new LevelGenerator(this.levelConfig, this);
    this.bullets = new Bullets(this, this.bulletPositionX, this.bulletPositionY, this.ship);
    console.log(this.physics.add);
  }

  update(time, delta) {
    this.ship.move(this.keyboard.isLeftPressed(), this.keyboard.isRightPressed(), this.keyboard.isUpPressed(), this.keyboard.isDownPressed());
    //* this.asteroid.update();
    this.levelGenerator.update(time);
    this.ship.shoot(this.keyboard.isSpacePressed());
  }  

  getWidth() {
      return this.game.config.width;
  }

  getHeight() {
      return this.game.config.height;
  }

  addAsteroid(createdAsteroids) {
    this.asteroidGroup.add(createdAsteroids.sprite);
    createdAsteroids.init();
  }

  addBullets(createdBullets) {
    this.bulletsGroup.add(createdBullets.sprite);
  }
}
