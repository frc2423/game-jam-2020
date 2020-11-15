import Sprite from "./sprite";
import Ship from "./ship";

export default class Bullets extends Sprite {

    constructor(scene, x, y, velocityY) {
        super(scene, x, y, 'bullets');
        this.setVelocity(0, velocityY - 200);
        this.setRotation(-Math.PI/2);
    }

    update() {
        if (this.getX() > this.scene.getWidth() || this.getX < 0) {
            this.destroy();
        }
        if (this.getY() > this.scene.getHeight()) {
            this.destroy();
        }
    }
}