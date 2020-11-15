export default class Sprite {

  constructor(scene, x, y, image) {
    this.scene = scene;
    this.sprite = scene.physics.add.image(x, y, image);
    this.destroyed = false;
    //*this.sprite.setCollideWorldBounds(true);
    //*this.sprite.setCircle(300);
  }

  wrap() {
    this.scene.physics.world.wrap(this.sprite, 32);
  }

  destroy() {
    this.destroyed = true;
    this.sprite.destroy(true);
  }
  getXAcceleration() {
      return this.sprite.body.acceleration.x;
  }
  getYAcceleration() {
      return this.sprite.body.acceleration.y;
  }

  getXVelocity() {
      return this.sprite.body.velocity.x;
  }

  getYVelocity() {
      return this.sprite.body.velocity.y;
  }

  isDestroyed() {
    return this.destroyed;
  }

  setVisible(visible) {
    if (!this.isDestroyed()) {
      this.sprite.setVisible(visible);
    }
  }

  isVisible() {
    return this.sprite.visible;
  }

  /**
   * When useDamping is false (the default), this is absolute loss of velocity due to movement, 
   * in pixels per second squared. When useDamping is true, this is 1 minus the damping factor. 
   * A value of 1 means the Body loses no velocity. A value of 0.95 means the Body loses 5% of 
   * its velocity per step. A value of 0.5 means the Body loses 50% of its velocity per step.
   * 
   * @param {Boolean} useDamping 
   * @param {Number} drag 
   */
  setDrag(useDamping, drag) {

    if (!this.isDestroyed()) {
      this.sprite.setDamping(useDamping);
      this.sprite.setDrag(drag);
    }
  }

  setAcceleration(x, y) {
    if (!this.isDestroyed()) {
      this.sprite.setAcceleration(x, y);
    }
  }
  

  /**
   * Makes the ship accelerate in the direction of the ship's current rotation.
   * 
   * @param {Number} acceleration 
   */
  setForwardAcceleration(acceleration) {
    if (!this.isDestroyed()) {

    }
  }

  setVelocity(x, y) {
    if (!this.isDestroyed()) {
      this.sprite.setVelocity(x, y);
    }
  }

  /**
   * Makes the ship move at a certain velocity in the direction of the ship's
   * current rotation.
   * 
   * @param {Number} velocity 
   */
  setForwardVelocity(velocity) {
    if (!this.isDestroyed()) {
      
    }
  }

  setAngularVelocity(velocity) {
    if (!this.isDestroyed()) {
      this.sprite.setAngularVelocity(velocity);
    }
  }

  getRotation() {
    return this.sprite.rotation;
  }

  getSpeed() {
    return this.sprite.body.speed;
  }

  setMaxVelocity(velocity) {
    if (!this.isDestroyed()) {
      this.sprite.setMaxVelocity(velocity);
    }
  }

  getX() {
      return this.sprite.x;
  }

  getY() {
      return this.sprite.y;
  }

  setScale(scale) {
    this.sprite.setScale(scale);
  }
}