import Sprite from './sprite';
/*
black hole should pull ship towards black hole.
*/
export default class BlackHole extends Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'ship');
  }
  getForce(ship) {
      let distance = ((this.getY() - ship.getY()) **2 + (this.getX() - ship.getX()) **2) **.5; 
      let force = 
if ()
  }
  attract(ship) {

  }
}