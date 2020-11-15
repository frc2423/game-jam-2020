import Ship from "./ship";
import Asteroid from "./asteroid";
import Bullets from "./bullets";

export default class Collision {

    constructor (scene, ship) {
        this.ship = ship;
        this.scene = scene;
        //this.scene.physics.add.overlap(this.ship.sprite, this.scene.asteroidGroup, this.shipHitCallback);
    }

    addPlayerAsteroidCollision(asteroid) {
        this.scene.physics.add.overlap(this.ship.sprite, asteroid.sprite, this.shipHitCallback.bind(this));
    }

    shipHitCallback(ship, asteroid) {
        asteroid.destroy();
        this.scene.removePoints(5);
    }

    addBulletAsteroidCollision(asteroid, bullets) {
        this.scene.physics.add.overlap(bullets.sprite, asteroid.sprite, this.asteroidHitCallback.bind(this));
    }

    asteroidHitCallback (bullets, asteroid) {
        asteroid.destroy();
        bullets.destroy();
        this.scene.addPoints(1);
    }
}