
import { Game } from 'phaser';
import AsteroidScene from './assets/js/scene';

const gameConfig = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
      gravity: { y: 0 }
    }
  },
  scene: [new AsteroidScene()]
};

new Game(gameConfig);

