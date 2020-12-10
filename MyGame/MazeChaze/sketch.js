
var b1,b2,b3,b4;
var b5,b6,b7,b8,b9,b10,b11;
var b12,b13,b14,b15;
var b16,b17,b18,b19,b20,b21,b22,b23,b24;

var b25,b26,b27,b28;
var b29,b30,b31,b32,b33,b34,b35;
var b36,b37,b38,b39;
var b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
var b51,b52,b53,b54,b55,b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65,b66,b67,b68,b69,b70,b71,b72,b73,b74;

var p1,p2;
var t;
var tI;

var form, player, game;
var database;
var gameState=0;
var playerCount=0;
var back;
var players;
var allPlayers;
function preload(){
   tI=loadImage("paint3D.png");
   //back=loadImage("Maze.jpg");
}

function setup() {
  createCanvas(600,550);

  database = firebase.database();

  game=new Game();
  game.getState();
  game.start();
 
 
  
}

function draw() {
  background("red");  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState == 2)
  {
    game.end();
  }
}