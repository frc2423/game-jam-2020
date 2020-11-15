import Ship from "./ship";
import Asteroid from "./asteroid";
import Bullets from "./bullets";

export default class Collision {

    constructor (scene, ship) {
        this.ship = ship;
        this.scene = scene;
        this.scene.physics.add.overlap(this.ship.sprite, this.scene.asteroidGroup, this.shipHitCallback);

    }

    addPlayerAsteroidCollision(asteroid) {
        this.scene.physics.add.overlap(this.ship.sprite, asteroid.sprite, this.shipHitCallback);
    }

    shipHitCallback(ship, asteroid) {
        asteroid.destroy();
    }

    addBulletAsteroidCollision(asteroid, bullets) {
        console.log("activated");
        this.scene.physics.add.overlap(bullets.sprite, asteroid.sprite, this.asteroidHitCallback);
    }

    asteroidHitCallback (bullets, asteroid) {
        asteroid.destroy();
        bullets.destroy();
    }
}