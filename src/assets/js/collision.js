import Ship from "./ship";
import Asteroid from "./asteroid";
import Bullets from "./bullets";

export default class Collision {

    constructor (scene, ship) {
        this.ship = ship;
        this.scene = scene;
    }

    addPlayerAsteroidCollision(asteroid) {
        console.log("activated", this.ship, asteroid);
        this.scene.physics.add.overlap(this.ship.sprite, asteroid.sprite, this.shipHitCallback);
    }

    shipHitCallback(ship, asteroid) {
        console.log("callback working", ship, asteroid);
        asteroid.destroy();
    }
}