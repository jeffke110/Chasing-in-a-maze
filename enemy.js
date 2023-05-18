//enemy object
var enemy = function (x, y, img) {
    this.x = floor(x / 20);
    this.y = floor(y / 20);
    this.img = img;
    this.moving = false;
    this.nextX = 0;
    this.nextY = 0;
    this.pathIndex;
    this.pathDone = 0;

    this.cols = 20;
    this.rows = 20;
    this.grid = new Array(this.cols);
    this.openSet = [];
    this.closedSet = [];

    this.start;
    this.end;
    this.w = width / this.cols;
    this.h = height / this.rows;
    this.path = [];
    this.nosolution = false;

    this.done = 0;
    this.startFollow = 0;
    this.currentPath = [];
}
//setup variables
enemy.prototype.setup = function () {
    for (var i = 0; i < this.cols; i++) {
        this.grid[i] = new Array(this.rows);
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j] = new Spot(i, j);
            if (tileMapObj.tilemap[j][i] == 'w') {
                this.grid[i][j].wall = true;
            }
        }
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j].addNeighbors(this.grid);
        }
    }
    this.start = this.grid[this.x][this.y];
    this.end = this.grid[floor(playerObj.x / 20)][floor(playerObj.y / 20)];
    this.start.wall = false;
    this.start.wall = false;
    this.openSet.push(this.start);
}

enemy.prototype.follow = function () {
    if(dist(playerObj.x, playerObj.y, this.x, this.y) < 20 && freezeBool == 0){
        gameOver = 1;
    }
    if (this.startFollow == 0 && this.pathIndex >=0 && this.pathIndex < this.currentPath.length) {
        this.x = this.currentPath[this.pathIndex].i * 20;
        this.y = this.currentPath[this.pathIndex].j * 20;
        this.startFollow = 1;
    }
    if (this.pathIndex >= 0 &&  this.pathIndex < this.currentPath.length &&  freezeBool == 0) {

        if (this.moving == false) {
            this.nextX = this.currentPath[this.pathIndex].i * 20;
            this.nextY = this.currentPath[this.pathIndex].j * 20;
            this.moving = true;
        }
        if (this.x == this.nextX && this.y == this.nextY) {
            this.pathIndex--;
            this.moving = false;
        }
        if (this.x < this.nextX) {
            this.x++;
        }
        if (this.x > this.nextX) {
            this.x--;
        }
        if (this.y < this.nextY) {
            this.y++;
        }
        if (this.y > this.nextY) {
            this.y--;
        }

    }
    if (this.pathIndex < 0) {
        this.reset();
    }
}
enemy.prototype.setPath = function (path) {
    if (this.pathDone == 0) {
        this.currentPath = path;
        this.pathIndex = path.length - 1;
        this.pathDone = 1;
    }
}
enemy.prototype.draw = function () {
    imageMode(CENTER);
    if(this.startFollow == 1){
        image(this.img, this.x + 10, this.y + 10, 20, 20);
    }
}

function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.previous = undefined;
    this.neighbors = [];
    this.wall = false;

    this.show = function (color) {
        fill(color);
        if (this.wall) {
            fill(0);
        }
        noStroke();
        rect(this.i * 20, this.j * 20, 20, 20);
    }
    this.addNeighbors = function (grid) {
        var i = this.i;
        var j = this.j;
        if (i < 20 - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < 20 - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
    }
}