var canvas;
var backgroundImage;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  cohete = loadImage ("./assets/cohete.png");
  nave1 = loadImage ("./assets/nave1.png");
  nave2 = loadImage ("./assets/nave2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
