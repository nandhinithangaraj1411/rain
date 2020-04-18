class Word {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = 1;
    this.l = random(letters);
  }

  move() {
    this.y += this.speed;
  }
  display() {

    fill(0, 255, 255);
    //ellipse(this.x, this.y, 4, 4);
    text(this.l, this.x, this.y);
  }
  isOffScreen() {
    if (this.y > height) {
      return true
    }
  }
}
 

  