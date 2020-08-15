var isonic;
var psonic;

function preload(){
  isonic = loadImage('sonic.png');
  
}

function setup() {
  createCanvas(400, 400);
  psonic = new Sonic();
}

function draw() {
  background(220);
  psonic.mostrar();
  psonic.mover();
  psonic.salir();
  psonic.reaparecer();
}