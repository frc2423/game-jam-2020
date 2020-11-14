import Sprite from "./sprite";

export default class Shooting {

    constructor(bulletVelocity, x, y) {
        this.bulletVelocity = bulletVelocity;
        this.setVelocity(0, bulletVelocity());
        this.x = x;
        this.y = x;
    }

    bulletVelocity() {
        let bulletVelocity = this.ship.getYVelocity();
        return bulletVelocity;
    }

    bulletPositionX(x) {
        x = this.ship.getX();
    }

    bulletPositionY(y) {
        y = this.ship.getY();
    }

    shoot(space) {
        if (space) {

        }
  }
}