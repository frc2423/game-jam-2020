import Sprite from './sprite';

export default class Asteroid extends Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'asteroid');
        this.sprite.setScale(0.01);
        this.sprite.setVelocity(0, 100);
    }

    update(){

        if (this.getX() > this.scene.getWidth() || this.getX < 0) {
            this.sprite.destroy();
        }

        if (this.getY() > this.scene.getHeight()) {
            this.sprite.destroy();
        }
    }

}