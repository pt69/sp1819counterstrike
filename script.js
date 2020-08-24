var tick = 0;
var ec = 0;
var ec2 = ec;
var e1x = 450;
var e1y = 250;
var e2x = 150;
var e2y = 300;
var e2j = "AUS";
var e3x = 650;
var e3y = 200;
var e3j = "AUS";
var treffer = 0;

function setup() {
  createCanvas(751, 601);
  frameRate(100);
}

function draw() {
  background("Black");

  tick = tick + 1;
  if (tick == 150) {
    tick = 0;
  }

  if (frameCount % 150 == 0) {
    ec = random(1, 30);
  }

  ec2 = ec;

  strokeWeight(0);
  fill("SkyBlue");
  ellipse(376, 301, 500, 500);

  stroke("DarkBlue");
  strokeWeight(2);
  fill("Blue");
  ellipse(e1x - 50, e1y + 10, 23, 23);

  rect(e1x - 60, e1y + 20, 21, 35);
  rect(e1x - 67, e1y + 20, 7, 24);
  rect(e1x - 37, e1y + 20, 7, 24);
  rect(e1x - 46, e1y + 56, 7, 24);
  rect(e1x - 59, e1y + 56, 7, 24);

  fill("White");
  text("CT", e1x - 58, e1y + 35);

  strokeWeight(20);
  stroke("SaddleBrown");
  line(465, 375, 465, 150);

  strokeWeight(20);
  stroke("SaddleBrown");
  line(465, 375, 465, 150);

  strokeWeight(20);
  stroke("SaddleBrown");
  line(265, 375, 265, 150);

  strokeWeight(5);
  fill("Sienna");
  quad(460, 455, 460, 180, 380, 165, 380, 455);
  quad(460, 220, 460, 180, 380, 165, 380, 205);
  quad(460, 260, 460, 220, 380, 205, 380, 245);
  quad(460, 300, 460, 260, 380, 245, 380, 285);
  quad(460, 340, 460, 300, 380, 285, 380, 325);
  quad(460, 380, 460, 340, 380, 325, 380, 365);
  line(420, 455, 420, 172.5);
  quad(270, 455, 270, 180, 340, 190, 340, 455);

  strokeWeight(0);
  stroke("Black");
  fill("Chocolate");
  arc(376, 301, 500, 500, PI + HALF_PI + 0.4, TWO_PI + 0.3, OPEN);
  triangle(474, 70, 615, 375, 460, 375);

  stroke("DarkBlue");
  strokeWeight(2);
  fill("Blue");
  ellipse(e3x, e3y + 40, 23, 23);

  rect(e3x - 10, e3y + 50, 21, 35);
  rect(e3x - 17, e3y + 50, 7, 24);
  rect(e3x + 13, e3y + 50, 7, 24);
  rect(e3x + 4, e3y + 86, 7, 24);
  rect(e3x - 9, e3y + 86, 7, 24);

  fill("White");
  text("CT", e3x - 9, e3y + 65);

  strokeWeight(0);
  fill("Bisque");
  arc(376, 301, 500, 500, 0, 0.3, OPEN);
  quad(615, 375, 520, 375, 520, 285, 626, 301);

  fill("BurlyWood");
  arc(376, 301, 500, 500, -0.05, 0, OPEN);
  quad(520, 285, 540, 275, 626, 287, 626, 302);

  strokeWeight(0);
  stroke("Black");
  fill("Brown");
  quad(430, 340, 430, 380, 560, 400, 560, 340);

  fill("Wheat");
  arc(376, 301, 500, 500, PI - 0.3, PI + 1.1, OPEN);
  triangle(137, 375, 262, 78, 262, 375);

  fill("DimGray");
  quad(190, 250, 220, 250, 220, 450, 190, 450);

  stroke("DarkBlue");
  strokeWeight(2);
  fill("Blue");
  ellipse(e2x, e2y + 10, 23, 23);

  rect(e2x - 10, e2y + 20, 21, 35);
  rect(e2x - 17, e2y + 20, 7, 24);
  rect(e2x + 13, e2y + 20, 7, 24);
  rect(e2x + 4, e2y + 56, 7, 24);
  rect(e2x - 9, e2y + 56, 7, 24);

  fill("White");
  text("CT", e2x - 9, e2y + 35);

  strokeWeight(0);
  fill("Wheat");
  arc(376, 301, 500, 500, PI - 0.3, PI + 0.73, OPEN);
  triangle(137, 375, 190, 133, 190, 375);

  strokeWeight(0);
  fill("PaleGoldenrod");
  arc(376, 301, 500, 500, TWO_PI + 0.3, PI - 0.3, OPEN);

  strokeWeight(0);
  fill("DarkGrey");
  rect(321, 410, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(400, 430, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(280, 460, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(240, 390, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(220, 410, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(220, 410, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(470, 490, 31, 25);

  strokeWeight(0);
  fill("DarkGrey");
  rect(500, 380, 31, 25);

  strokeWeight(1);
  fill("PaleGoldenRod");
  rect(420, 395, 31, 25);

  strokeWeight(1);
  fill("PaleGoldenRod");
  rect(300, 495, 31, 25);

  strokeWeight(1);
  fill("PaleGoldenRod");
  rect(245, 445, 31, 25);

  strokeWeight(1);
  fill("PaleGoldenRod");
  rect(420, 395, 31, 25);

  strokeWeight(1);
  fill("PaleGoldenRod");
  rect(345, 475, 31, 25);

  stroke("SandyBrown");
  strokeWeight(4);
  fill("DimGray");
  rect(520, 180, 42, 42);

  strokeWeight(0);
  fill("Black");
  rect(522, 200, 38, 4);

  strokeWeight(0);
  fill("Black");
  rect(539, 182, 4, 38);

  stroke("Silver");
  strokeWeight(2);
  fill("Chocolate");
  rect(490, 120, 20, 44);

  stroke("Silver");
  strokeWeight(2);
  fill("Chocolate");
  rect(475, 240, 20, 44);

  stroke("Silver");
  strokeWeight(2);
  fill("Chocolate");
  rect(485, 275, 20, 44);

  stroke("SaddleBrown");
  strokeWeight(5);
  line(305, 372, 305, 184.5);

  strokeWeight(5);
  line(270, 300, 340, 310);

  strokeWeight(5);
  line(270, 260, 340, 270);

  strokeWeight(5);
  line(270, 220, 340, 230);

  strokeWeight(5);
  line(270, 180, 340, 190);

  strokeWeight(5);
  line(270, 340, 340, 350);

  if (ec >= 11 && ec2 < 20) {
    e2j = "AN";
  }

  if (e2j == "AN" && tick <= 75) {
    e2x = e2x + 1;
  }

  if (e2j == "AN" && tick >= 75) {
    e2x = e2x - 1;
  }

  if (e2j == "AN" && tick == 149) {
    e2j = "AUS";
    e2x = 150;
  }

  if (ec >= 21 && ec2 < 30) {
    e3j = "AN";
  }

  if (e3j == "AN" && tick <= 75) {
    e3x = e3x - 1;
  }

  if (e3j == "AN" && tick >= 75) {
    e3x = e3x + 1;
  }

  if (e3j == "AN" && tick == 149) {
    e3j = "AUS";
    e3x = 650;
  }

  if (ec <= 10) {
    e1x = e1x - 1;
  } else {
    e1x = 450;
  }

  if (e1x <= 301) {
    e1x = 450;
  }

  strokeWeight(0);
  fill("Black");
  rect(627, 220, 100, 100);
  triangle(627, 220, 613, 220, 627, 270);
  triangle(624, 260, 626, 300, 636, 280);

  cros(mouseX, mouseY);

  strokeWeight(0);
  stroke("Gray");
  fill("Gray");
  ellipse(90, 90, 150, 150);
  fill("Black");
  rect(45, 150, 90, 20);
  rect(95, 110, 20, 28);
  rect(136, 125, 20, 28);
  rect(95, 70, 44, 32);
  rect(129, 55, 10, 18);
  rect(95, 40, 25, 20);
  rect(15, 10, 125, 19);
  rect(45, 110, 36, 28);
  rect(45, 70, 36, 28);
  rect(45, 95, 28, 35);
  rect(45, 37, 38, 24);
  rect(22, 70, 24, 50);

  fill("White");
  textSize(15);
  textAlign(LEFT);
  text("Treffer: " + treffer, 10, 580);
  text("(Triff die CTs am Kopf)", 565, 580);

  strokeWeight(6);
  stroke("Green");
  point(87, 143);

  if (ec <= 10) {
    stroke("Red");
    point(100 - tick * 0.1, 35);
  } else {
    stroke("Red");
    point(100, 35);
  }

  if (e2j == "AN" && tick <= 75) {
    point(75 + tick * 0.2, 65);
  }

  if (e2j == "AN" && tick >= 75) {
    point(90 - tick * 0.075, 65);
  }
  if (e2j == "AUS") {
    point(75, 65);
  }

  if (e3j == "AN" && tick <= 75) {
    point(105 - tick * 0.2, 65);
  }

  if (e3j == "AN" && tick >= 75) {
    point(90 + tick * 0.075, 65);
  }

  if (e3j == "AUS") {
    point(105, 65);
  }
}
function mousePressed() {
  if (dist(e1x - 50, e1y + 10, mouseX, mouseY) < 23) {
    treffer = treffer + 1;
  }
  if (dist(e2x, e2y + 10, mouseX, mouseY) < 23) {
    treffer = treffer + 1;
  }
  if (dist(e3x, e3y + 40, mouseX, mouseY) < 23) {
    treffer = treffer + 1;
  }
}

function cros(cros_x, cros_y) {
  strokeWeight(2);
  stroke("Black");
  line(cros_x, cros_y, cros_x + 701, cros_y);
  line(cros_x, cros_y, cros_x, cros_y + 701);
  line(cros_x, cros_y, cros_x - 701, cros_y);
  line(cros_x, cros_y, cros_x, cros_y - 701);
}
