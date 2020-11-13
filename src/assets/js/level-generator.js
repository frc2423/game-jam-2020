//* import * as data from "./level-configs/level1.json";

//* const {levelOne} = data;

var levelOne = require('./level-configs/levelOne.json');

import Asteroid from './asteroid';

export default class LevelGenerator {

    //* let obstacles = levelOne.obstacles[0].spawnPoint


    constructor(speedModifier, scene) {
        this.asteroidProgress = 0;
        this.scene = scene;
        this.presentAsteroids = [];
        
    }

    checkTime(currentTime, obstacleTime) {
        return (obstacleTime > currentTime - 2000 && obstacleTime < currentTime + 2000);
    }

    checkAsteroids() {
        for(let i of this.presentAsteroids) {
            i.update();
        }
    }

    update(currentTime) {
        if (this.asteroidProgress >= levelOne.obstacles.length) return;

        let currentAsteroid = levelOne.obstacles[this.asteroidProgress];

        if (this.checkTime(currentTime, currentAsteroid.time) && currentAsteroid.type === "asteroid") {
            let asteroid = new Asteroid(this.scene, currentAsteroid.spawnPoint.x, currentAsteroid.spawnPoint.y);
            this.asteroidProgress++;
            this.presentAsteroids.push(asteroid);
        }

        this.checkAsteroids();


    }

}