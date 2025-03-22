let paintbox = document.getElementById('paintbox');
let context = paintbox.getContext('2d');

let gameOn = true;
let playerSpeed = 5;

class Box {
    constructor(size, color) {
    this.size = size;
    this.color = color;
    this.x = 0;
    this.y = 0;
    }
}

class Player extends Box {
    constructor() {
    super(50, 'blue');
    this.x = 0;
    this.y = 225;
    this.speed = 0;
    }
    move() {
    this.x += this.speed;
    }
}

class Enemy {
    constructor(speed, x) {
    this.size = 50; // Rock size
    this.x = x;
    this.y = Math.random() * 450;
    this.speed = speed;
    }

    move() {
    this.y += this.speed;
    if (this.y + this.size > 500) {
        this.speed = -Math.abs(this.speed);
    }
    if (this.y < 0) {
        this.speed = Math.abs(this.speed);
    }
    }

    draw() {
    drawRock(this.x, this.y);
    }
}

let player = new Player();
let e1 = new Enemy(4, 100);
let e2 = new Enemy(8, 233);
let e3 = new Enemy(12, 366);

function isCollided(box1, box2) {
    return (
    box1.x < box2.x + box2.size &&
    box1.x + box1.size > box2.x &&
    box1.y < box2.y + box2.size &&
    box1.y + box1.size > box2.y
    );
}

function drawRock(x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 25, y - 10);
    context.lineTo(x + 45, y);
    context.lineTo(x + 35, y + 20);
    context.lineTo(x + 10, y + 25);
    context.lineTo(x - 5, y + 10);
    context.closePath();

    context.fillStyle = "#8B8B8B"; // Gray rock color
    context.fill();
    context.strokeStyle = "#707070";
    context.lineWidth = 3;
    context.stroke();
}

function drawBox(box) {
    context.fillStyle = box.color
    context.fillRect(box.x, box.y, box.size, box.size)

}
paintbox.addEventListener('mousedown', () => {
    player.speed = playerSpeed;
});

paintbox.addEventListener('mouseup', () => {
    player.speed = 0;
});

setInterval(() => {
  playerSpeed = 5 + parseInt(Math.random() * 10);
  player.y = 100 + Math.random() * 300;
}, 2000);

function gameLoop() {
    if (!gameOn) return;

    context.clearRect(0, 0, 500, 500);
    e1.move();
    e2.move();
    e3.move();
    player.move();

    if (isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
    gameOn = false;
    window.alert('Game Over');
    }

    drawBox(player);
    e1.draw();
    e2.draw();
    e3.draw();

    window.requestAnimationFrame(gameLoop);
}

gameLoop();
