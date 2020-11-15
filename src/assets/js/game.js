
import { Game } from 'phaser';
import GameScene from './scene';
var levelOne = require('./level-configs/levelOne.json');

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [new GameScene(levelOne)]
};

new Game(gameConfig);

