class player {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.nextX = 0;
        this.nextY = 0;
        this.img = img;
        this.count = 0;
    }
    draw() {
        //load character
        imageMode(CENTER);
        image(this.img, this.x + 10, this.y + 10, 20, 20);
    }
    //movement through tilemap
    movement() {
        if (keyCode == 68 && keyCode != (87) && keyCode != (83)) {
            this.x++;
        }
        else if (keyCode == (65) && keyCode != (87) && keyCode != (83)) {
            this.x--;
        }
        else if (keyCode == (87) && keyCode != (65) && keyCode != 68 ) {
            this.y--;
        }
        else if (keyCode == (83) && keyCode != (65) && keyCode != 68 ) {
            this.y++;
        }
        if(this.x + 10 < 0){
            this.x  = 390;  
        }
        if(this.x + 10 > 400){
            this.x  = -10;  
        }
        if(this.y + 10 < 0){
            this.y  = 390;  
        }
        if(this.y + 10 > 400){
            this.y  = -10;  
        }
    }
    //check collision of walls
    checkCollision() {
        for (var i = 0; i < walls.length; i++) {
            if (dist(this.x, this.y, walls[i].x , walls[i].y) < 20 ) {
                if (this.x - walls[i].x > 0) { //left block
                    this.x += 1;
                }
                if (this.y - walls[i].y > 0 ) { //upblock
                    this.y += 1;
                }
                if (this.x - walls[i].x < 0 ) { //right block
                    this.x -= 1;
                }
                if (this.y - walls[i].y < 0 ) {
                    this.y -= 1;
                }
            }
        }
        for (var i = 0; i < pellets.length; i++) {
            if (dist(this.x, this.y, pellets[i].x , pellets[i].y) <= 10 && pellets[i].hit == 0) {
                pellets[i].hit = 1;
                this.count++;
            }
        }
        for (var i = 0; i < freezes.length; i++) {
            if (dist(this.x, this.y, freezes[i].x , freezes[i].y) <= 10 && freezes[i].hit == 0) {
                freezes[i].hit = 1;
                freezeBool = 1;
            }
        }
    }
}
