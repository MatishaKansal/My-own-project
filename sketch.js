var map, car, form1, start, form2;
var database;
var gameState = 0, playerCount;

function setup() {
  var canvas = createCanvas(1200, 400);
  database = firebase.database();
  start = new Start();
}

function draw() {
  start.display();
  if(playerCount===1){
    gameState = 1;
  }
}
