let words = [];
let wordFall = setInterval(makeWord, 100);
let letters = ['A', 'B', 'C', 'D','5','$','%'] 

function setup() {
  createCanvas(400, 400);
  textFont('Georgia', 14);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  for (var i = words.length - 1; i >= 0; i--) {
    words[i].display();
    words[i].move();

    if (words[i].isOffScreen()) {
      words.splice(i, 1);
    }
  }

}

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}
