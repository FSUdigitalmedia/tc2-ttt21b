function setup() {
  // i made a canvas that is 600 by 400
  createCanvas(600, 400);
}

function draw() {
  //bluey
  background(135, 206, 235);
  //cool sun
  //x and y are coods of centerpoint, z is height plus width
  fill("yellow");
  //color comes before the shape
  stroke("orange");
  strokeWeight(20);
  circle(550, 50, 100);
  stroke(0);
  strokeWeight(1);
  fill("green");
  rect(0, 200, 600, 200);

  //emoji time
  textSize(75)
  text("🌸", 100, 250)
  text("⛹️", mouseX, mouseY)

}
