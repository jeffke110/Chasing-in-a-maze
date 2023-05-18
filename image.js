var images = [];

function wall_create() {
  //wall 0
  fill(0);       // set background of the custom char
  rect(0, 0, 400, 400);
  noStroke();
  var r = random(40,255);
  var g = random(40,255);
  var b = random(40,255);
  fill(r, g, b);
  rect(10, 10, 380, 20);
  rect(10, 10, 20, 380);
  rect(10, 370, 380, 20);
  rect(370, 10, 20, 380);
  images.push(get(0, 0, width, height));
}
function pellet_create() {
  //pellet 1
  fill(0);       // set background of the custom char
  rect(0, 0, 400, 400);
  push();
  fill(212, 175, 55);
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 90, 200, 5);
  pop();
  images.push(get(0, 0, width, height));
}
function player_create() {
  //main character 2
  //hat
  fill(0);       // set background of the custom char
  rect(0, 0, 400, 400);
  fill(255, 0, 0);
  rect(90, 40, 240, 50);
  //head
  fill(210, 180, 140);
  rect(90, 90, 200, 100);
  //body
  fill(255, 0, 0);
  rect(90, 190, 220, 120);
  fill(0, 0, 255);
  rect(90, 310, 220, 50);
  rect(90, 360, 60, 40);
  rect(250, 360, 60, 40);
  rect(40, 190, 50, 100);
  rect(310, 190, 50, 100);
  //Mustache Eyes
  fill(0);
  rect(130, 110, 30, 30);
  rect(220, 110, 30, 30);
  rect(140, 150, 100, 10);
  images.push(get(0, 0, width, height));
}
function freeze_create() {
  //freeze power 3
  fill(0);       // set background of the custom char
  rect(0, 0, 400, 400);
  push();
  fill(34, 24, 255);
  translate(width * 0.5, height * 0.5);
  rotate(-frameCount / 50.0);
  star(0, 0, 90, 200, 5);
  fill(173, 216, 230);
  star(0, 0, 60, 140, 5);
  pop();
  images.push(get(0, 0, width, height));
}
function enemy_create() {
  //enemy 4
  fill(0);       // set background of the custom char
  rect(0, 0, 400, 400);
  fill(127, 127, 127);
  rect(50, 50, 300, 300);
  var i = 50;
  while (i <= 300) {
    triangle(i, 50, i + 50, 50, i + 25, 0);
    i = i + 50;
  }
  i = 50;
  while (i <= 300) {
    triangle(i, 350, i + 50, 350, i + 25, 400);
    i = i + 50;
  }
  i = 50;
  while (i <= 300) {
    triangle(50, i, 50, i + 50, 0, i + 25);
    i = i + 50;
  }
  i = 50;
  while (i <= 300) {
    triangle(350, i, 350, i + 50, 400, i + 25);
    i = i + 50;
  }
  fill(255, 0, 0);
  rect(110, 100, 50, 50);
  rect(250, 100, 50, 50);
  fill(0);
  rect(110, 230, 190, 75);
  fill(255);
  rect(130, 230, 150, 30);
  rect(130, 275, 150, 30);
  images.push(get(0, 0, width, height));
}
function img_create(){
  wall_create();
  pellet_create();
  player_create();
  freeze_create();
  enemy_create();

}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}