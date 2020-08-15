var isonic;
var psonic;
var iegg;
var pegg;

function preload(){
  isonic = loadImage('sonic.png');
  iegg = loadImage('Eggman.png');  
}

function setup() {
  createCanvas(400, 400);
  psonic = new Sonic();
  pegg = new Egg();
}

function draw() {
  background(220);
  psonic.mostrar();
  psonic.mover();
  psonic.salir();
  psonic.reaparecer();
  
  pegg.mostrar();
  pegg.mover();
  pegg.salir();
  pegg.reaparecer();
}