
export default class Keyboard {

  constructor(scene) {
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  isUpPressed() {
    return this.cursors.up.isDown;
  }

  isDownPressed() {
    return this.cursors.down.isDown;
  }

  isLeftPressed() {
    return this.cursors.left.isDown;
  }

  isRightPressed() {
    return this.cursors.right.isDown;
  }

  isSpacePressed() {
    return this.cursors.space.isDown;
  }
}
