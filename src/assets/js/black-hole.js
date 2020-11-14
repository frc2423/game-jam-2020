import Sprite from './sprite';
/*
black hole should pull ship towards black hole.
*/
let kForce = 500000
export default class BlackHole extends Sprite {

  constructor(scene, x, y, radius) {
    super(scene, x, y, 'bullet');
    this.radius = radius
  }
  getForce(ship) {
      let distance = ((this.getY() - ship.getY()) **2 + (this.getX() - ship.getX()) **2) **.5; 
      let force =  this.radius *kForce / distance **1.5
      console.log('force:', Math.min(force, 50) )
      return Math.min(force, 50)

  }
  attract(ship , delta) {
      let force = this.getForce (ship) * delta / 1000
      let o = ship.getY() - this.getY()
      let a = ship.getX() - this.getX()
      let angle = Math.atan2(o , a)
      let x = force * Math.cos(angle) 
      let y = force * Math.sin(angle)  
      console.log(x , y, delta)
      ship.setX(ship.getX() - x)
      ship.setY(ship.getY() - y)
  }
}