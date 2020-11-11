import Sprite from './sprite';

export default class Asteroid extends Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'asteroid');
        this.sprite.setScale(0.01);

        const randomXVelocity = () => {
            if(Math.random() < 0.5) {
                return -100 * Math.random();
            } else {
                return 100 * Math.random();
            }
        }
        const randomYVelocity = () => {
        return 300 * Math.random() + 100;
        }
        this.sprite.setVelocity(randomXVelocity(), randomYVelocity());
        
        const randomAngularVelocity = () => {
            if(Math.random() < 0.5) {
                return -500 * Math.random();
            } else {
                return 500 * Math.random();
            }
        }
        this.sprite.setAngularVelocity(randomAngularVelocity());
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