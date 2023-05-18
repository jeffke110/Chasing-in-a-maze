/*
Project 9 - Chasing in a maze
The canvas size is 400x400. Using the tilemap shown below, where each tile is 20x20 pixels, 
and where 'w' indicates a wall block, '+' indicates a pellet, '-' indicates blank space, 
'M' indicates the main player character, 'p' indicates freeze-power, and 'E' indicates the enemy character.

Implementation:
The enemies use a A star pathfinder algorithm that calculates the shortest distance
to the player around the wall obstacles. After it is calculated, the enemy travels towards the player.

Goal:
The player must collect all the stars or pellets without being touched by the enemy.
The player can use the freeze or blue star to freeze the enemies for 5 seconds.

Controls
W - move up
A - move left
D - move right
S - move down
After the game is over, press the mouse key to play again
*/

//removes an element from the array
function removeFromArray(arr, element) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == element) {
      arr.splice(i, 1);
    }
  }
}

//heuristic calculation
function heuristic(a, b) {
  var d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

//Five second counter for freeze power up
var fiveSecondTimer = 0;
var freezeBool;
function freezeCount() {
  if (frameCount % 30 == 0 && freezeBool == 1) {
    fiveSecondTimer--;
  }
  if (fiveSecondTimer == 1) {
    fiveSecondTimer = 5;
    freezeBool = 0;
  }
}

var gameOver;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  tileMapInit();
  gameOver = 0;
  freezeBool = 0;
  fiveSecondTimer = 5;
}
function draw() {
  background(0);

  //game play
  if (gameOver == 0) {
    tileMapObj.drawTileMap();
    drawPellets();
    freezeCount();

    playerObj.draw();
    playerObj.movement();
    playerObj.checkCollision();
    if (playerObj.count == pellets.length) {
      gameOver = 2;
    }
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].pathfinder();
    }
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].draw();
      if (enemies[i].done == 1) {
        enemies[i].follow();
      }
    }
  } else {
    tileMapObj.drawTileMap();
    drawPellets();
    playerObj.draw();
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].draw();
    }
  }
  //game lost
  if (gameOver == 1) {
    fill(255);
    text("Game Over You Lose", 200, 100);
  }

  //game won
  if (gameOver == 2) {
    fill(255);
    text("Game Over You Win", 200, 100);
  }
  fill(255);
  text("count: " + playerObj.count, 5, 10);
}

function mouseClicked() {
  if (gameOver != 0) {
     enemies = [];
     pellets = [];
     freezes = [];
     walls = [];

    gameOver = 0;
    tileMapInit();
    gameOver = 0;
    freezeBool = 0;
    fiveSecondTimer = 5;

  }
}