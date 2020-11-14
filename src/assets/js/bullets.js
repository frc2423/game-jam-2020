import Sprite from "./sprite";
import Ship from "./ship";
import Asteroid from "./asteroid";

export default class Bullets extends Sprite {

    constructor(scene, x, y, velocityY, asteroids) {
        super(scene, x, y, 'bullets');
        this.setVelocity(0, velocityY - 200);
        this.x = x;
        this.y = y;
        this.asteroids = asteroids;
    }

    update() {
        if (this.getX() > this.scene.getWidth() || this.getX < 0) {
            this.destroy();
        }
        if (this.getY() > this.scene.getHeight()) {
            this.destroy();
        }
        if (this.getX() === this.asteroid.getX() && this.getY() === this.asteroid.getY()) {
            this.destroy();
        }
    }
}