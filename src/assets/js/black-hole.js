import Sprite from './sprite';
/*
black hole should pull ship towards black hole.
*/

export default class BlackHole extends Sprite {

  constructor(scene, x, y, radius) {
    super(scene, x, y, 'blackHoleSheet');
    this.radius = radius

    scene.createAnimation({
        key: 'blackHoleIdle',
        frames: 'blackHoleSheet',
        frameRate: 16,
        repeat: -1
    });

    this.playAnimation('blackHoleIdle');
  }
  getForce(ship) {
      let distance = ((this.getY() - ship.getY()) **2 + (this.getX() - ship.getX()) **2) **.5; 
      
        if (distance < 50) {
            return 60;
        } else if (distance < 100) {
            return 40;
        } else if (distance < 150) {
            return 25;
        } else if (distance < 200) {
            return 20;
        } else if (distance < 250) {
            return 15;
        } else if (distance < 400) {
            return 5;
        }

        return 0;
      
    //   let force =  this.radius *kForce / distance **1.6
    //   console.log('force:', Math.min(force, 60) )
    //   return Math.min(force, 60)
  }
  attract(ship , delta) {
      let force = this.getForce (ship) * delta / 1000
      let o = ship.getY() - this.getY()
      let a = ship.getX() - this.getX()
      let angle = Math.atan2(o , a)
      let x = force * Math.cos(angle) 
      let y = force * Math.sin(angle)  
      ship.setX(ship.getX() - x)
      ship.setY(ship.getY() - y)
  }
}