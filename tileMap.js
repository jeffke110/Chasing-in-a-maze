//Declaration of Tile Map

class tileMap {
  constructor() {
    this.tilemap = [
      "wwwwwwwwwww-w-wwwwww",
      "w++++E++p+--w+++-++w",
      "w-wwwww+www-wwwwww+w",
      "w+++++w+++w-+++++w+w",
      "w+wwwwwww+ww--ww-w+w",
      "w+++++-+++wE--Ew+w-w",
      "w-wwwww+w-wwwwww-w+w",
      "--++++++w----p---+--",
      "www-www-ww-wwwww-w-w",
      "w-------ww+++++++w-w",
      "w+w+www-ww+wwwww+w-w",
      "w+w+++w-M--w---w+--w",
      "w+w+w+wwwwww-w+++www",
      "--w+++-+++w--w-w+w--",
      "w-p-www+w-+-ww-w+w+w",
      "wwwww+++wwwww--w+++w",
      "-+++++w-w+++++wwwwE-",
      "w-wwwww-w-wwwwwwww-w",
      "wE++++++++++-++++++w",
      "wwwwwwwwwww-w-wwwwww",
    ];
  }
  //init variables
  initializeTileMap() {
    for (var i = 0; i < this.tilemap.length; i++) {
      for (var j = 0; j < this.tilemap[i].length; j++) {
        if (this.tilemap[i][j] == 'w') {
          walls.push(new wall(j * 20, i * 20));
        } else if (this.tilemap[i][j] == '+') {
          pellets.push(new pellet(j * 20, i * 20, images[1]));
        } else if (this.tilemap[i][j] == '-') {} else if (this.tilemap[i][j] == 'M') {
          playerObj = new player(j * 20, i * 20, images[2]);
        } else if (this.tilemap[i][j] == 'p') {
          freezes.push(new freeze(j * 20, i * 20, images[3]));
        } else if (this.tilemap[i][j] == 'E') {
          enemies.push(new enemy(j * 20, i * 20, images[4]));
        }
      }
    }
  }
  //draw the tile map
  drawTileMap() {
    for (var i = 0; i < this.tilemap.length; i++) {
      for (var j = 0; j < this.tilemap[i].length; j++) {
        if (this.tilemap[i][j] == 'w') {
          wallObject.draw(j * 20, i * 20);
        } else if (this.tilemap[i][j] == 'E') {
          //enemyObj.draw(j * 20, i * 20);
        } else if (this.tilemap[i][j] == '+') {
          //pelletObj.draw(j * 20, i * 20);
        } else if (this.tilemap[i][j] == '-') {} 
        else if (this.tilemap[i][j] == 'p') {
          //freezeObj.draw(j * 20, i * 20);
        }
      }
    }
  }
}
var tileMapObj;
var beginning = 0;
//set up variables
var tileMapInit = function () {
  img_create();
  initializeGameObjects();
  tileMapObj = new tileMap();
  tileMapObj.initializeTileMap();
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].setup();
  }
}
//draw each pellet and freeze 
var drawPellets = function () {
  for (var i = 0; i < pellets.length; i++) {
    pellets[i].draw();
  }
  for (var i = 0; i < freezes.length; i++) {
    freezes[i].draw();
  }
}