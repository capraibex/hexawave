let npolygons = 40;
let angle = 0;

function setup() {
  createCanvas(windowHeight, windowHeight, WEBGL);
	smooth();
	noFill();
	textureMode(NORMAL); //necessary due to bug in p5.js v0.7.3
}

function draw() {
  background(0);
	rotateX(HALF_PI);
	rotateZ(HALF_PI);
	rotateY(QUARTER_PI);
	translate(-100, 0, 0);
	
	let offset = 0;
	for (i=0; i<npolygons; i++) {
		let a = angle + offset;
		let h = map(sin(a), -1, 1, -50, 50);
		let c = map(sin(a), -1, 1, -255, 255);
		push();
		translate(0, 0, h);
		stroke(abs(c));
		polygon(0, 0, (windowHeight/100) * i, 6);
		pop();
		offset += 0.2;
	}
	angle += 0.03;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (a=0; a<TWO_PI; a+=angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}