import { Scene } from 'phaser';
import Ship from './ship';
import Keyboard from './keyboard';
import Blackhole from './black-hole';
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

    this.load.spritesheet('shipRightSheet', 'assets/media/images/ship/shipRight_64x64.png', {frameWidth: 64,frameHeight: 64});
    this.load.spritesheet('shipIdleSheet', 'assets/media/images/ship/shipIdle_64x64.png', {frameWidth: 64,frameHeight: 64});
    this.load.spritesheet('shipLeftSheet', 'assets/media/images/ship/shipLeft_64x64.png', {frameWidth: 64,frameHeight: 64});
    this.load.audio('theme', ['assets/media/audio/start-screen-music.wav']);
  }

  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.score = 0;
    this.scoreLabel = this.add.text(10, 10, 'Score: 0', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    //this.asteroidGroup = this.physics.add.group();
    //this.bulletsGroup = this.physics.add.group();
    this.keyboard = new Keyboard(this);
    this.collision = new Collision(this, this.ship);
    this.levelGenerator = new LevelGenerator(this.levelConfig, this);

    var music = this.sound.add('theme');
    music.setLoop(true);
    music.play();

    this.bullets = new Bullets(this, this.bulletPositionX, this.bulletPositionY, this.ship);
    this.bulletsGroup = [];
    this.asteroidGroup = [];
  }

  addPoints(points) {
    this.score += points;
    this.scoreLabel.setText(`Score: ${this.score}`);
  }

  removePoints(points) {
    this.score -= points;
    this.scoreLabel.setText(`Score: ${this.score}`);
  }

  /**
   * This is where all the game logic goes. This is similar to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
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

  // for adding groups later
  addAsteroid(createdAsteroids) {
    //this.asteroidGroup.add(createdAsteroids.sprite);
    createdAsteroids.init();
    this.asteroidGroup.push(createdAsteroids);
    this.collision.addPlayerAsteroidCollision(createdAsteroids);
    this.bulletsGroup.forEach(bullets => {
        this.collision.addBulletAsteroidCollision(createdAsteroids, bullets);
    });
  }

  addBullets(createdBullets) {
    //this.bulletsGroup.add(createdBullets.sprite);
    this.bulletsGroup.push(createdBullets);
    this.asteroidGroup.forEach(asteroid => {
        this.collision.addBulletAsteroidCollision(asteroid, createdBullets);
    });
  }

  createAnimation(config) {
    this.anims.create(config);
  }
}
