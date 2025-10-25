await createCanvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.x = -200;
ball.y = -200;
ball.diameter = 50;

let groundA = new Sprite();
groundA.x = -120;
groundA.width = 200;
groundA.rotation = 20;
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = 120;
groundB.width = 200;
groundB.rotation = -20;
groundB.physics = STATIC;

Q5.update = function () {
	background('skyblue');

	textAlign(CENTER);
	text('click to jump!', 0, -100);

	if (mouse.presses()) ball.vel.y = -5;
};
