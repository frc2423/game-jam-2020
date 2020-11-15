import Sprite from './sprite';

export default class Asteroid extends Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'asteroid');
        this.setScale(0.01);
    }

    init() {
        this.setVelocity(this.randomXVelocity(), this.randomYVelocity());
        this.setAngularVelocity(this.randomAngularVelocity());
    }

    randomXVelocity () {
    if(Math.random() < 0.5) {
        return -100 * Math.random();
    } else {
        return 100 * Math.random();
        }
    }
    randomYVelocity () {
        return 300 * Math.random() + 100;
    }

    randomAngularVelocity () {
        if(Math.random() < 0.5) {
            return -500 * Math.random();
        } else {
            return 500 * Math.random();
        }
    }

    update(){
        if (this.getX() > this.scene.getWidth() || this.getX < 0) {
            this.destroy();
        }
        if (this.getY() > this.scene.getHeight()) {
            this.destroy();
        }
    }
}