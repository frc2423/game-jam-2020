//* import * as data from "./level-configs/level1.json";

//* const {levelOne} = data;

import Asteroid from './asteroid';
import Collision from "./collision"

export default class LevelGenerator {

    //* let obstacles = levelOne.obstacles[0].spawnPoint


    constructor(levelConfig, scene) {
        this.asteroidProgress = 0;
        this.scene = scene;
        this.presentAsteroids = [];
        this.levelConfig = levelConfig;
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
        if (this.asteroidProgress >= this.levelConfig.obstacles.length) return;

        let currentAsteroid = this.levelConfig.obstacles[this.asteroidProgress];

        if (this.checkTime(currentTime, currentAsteroid.time) && currentAsteroid.type === "asteroid") {
            let asteroid = new Asteroid(this.scene, currentAsteroid.spawnPoint.x, currentAsteroid.spawnPoint.y);
            this.asteroidProgress++;
            this.presentAsteroids.push(asteroid);
            this.scene.addAsteroid(asteroid);
        }

        this.checkAsteroids();


    }

}