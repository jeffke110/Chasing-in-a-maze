//Declarations of Game objects
class pellet {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.hit = 0;
    }
    draw() {
        if (this.hit == 0) {
            //load character
            imageMode(CENTER);
            image(this.img, this.x + 10, this.y + 10, 20, 20);
        }
    }
}
class freeze {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.hit = 0;
    }
    draw() {
        if (this.hit == 0) {
            //load character
            imageMode(CENTER);
            image(this.img, this.x + 10, this.y + 10, 20, 20);
        }
    }
}
class wall {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }
    draw(x, y) {
        this.x = x;
        this.y = y;
        //load character
        imageMode(CENTER);
        image(this.img, this.x + 10, this.y + 10, 20, 20);

    }
}
var playerObj;
var enemyObj;
var pelletObj;
var freezeObj;
var wallObject;

var enemies = [];
var pellets = [];
var freezes = [];
var walls = [];


var initializeGameObjects = function () {
    wallObject = new wall(1000, 1000, images[0]);
    pelletObj = new pellet(1000, 1000, images[1]);
    freezeObj = new freeze(1000, 1000, images[3]);
    enemyObj = new enemy(1000, 1000, images[4]);
}