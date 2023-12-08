const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

let enemies = [];
let speed = 5;
let enemyDirection = 1;
let characterSize = 50;
let bullets = [];
let canShoot = true;
let score = 0;
const bulletSize = 20;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {
    x: canvas.width / 2,
    y: 500
};


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createEnemies() {
    for (let i = 1; i < 6; i++) {
        const enemy = {
            x: 100 * i,
            y: 100
        }
        enemies.push(enemy);
    }
}


function updateEnemies() {
    enemies.forEach((enemy) => {
        enemy.x += speed * enemyDirection;
    })
    if (enemies[0].x <= 0) {enemyDirection *= -1};
    if (enemies[enemies.length - 1].x >= canvas.width - 25) {enemyDirection *= -1}
}

function updateBullets() {
    bullets.forEach((bullet, index) => {
        bullet.y += 10 * bullet.direction;
        if (bullet.y < 0 || bullet.y > canvas.height) {
            bullets.splice(index, 1);
        }
    })
}

function Render() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.moveTo(player.x, player.y);
    pen.fillRect(player.x, player.y, characterSize, characterSize);
    enemies.forEach((enemy) => {
        pen.fillRect(enemy.x, enemy.y, characterSize, characterSize);
    });
    bullets.forEach((bullet) => {
        pen.fillRect(bullet.x, bullet.y, 20, 20);
    })
    pen.fill();
}

function shootBullet(direction, x, y) {
    const bullet = {
        x: x + (characterSize / 2) - bulletSize / 2,
        y: y,
        direction: direction
    }
    bullets.push(bullet);
}

function movePlayer(direction) {
    {player.x += direction * 10;
    if (player.x <= 0) {player.x = 0};
    if (player.x >= canvas.width) {player.x = canvas.width};}
}

function checkCollision(bullet, object) {
    const maxObjectY = object.y + characterSize - bulletSize / 2;
    if (bullet.x >= object.x && bullet.x <= object.x + characterSize) {
        if (bullet.y >= object.y && bullet.y <= maxObjectY) {
            return true;
        }
    }
    return false;
}

function checkBulletCollision() {
    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            if (checkCollision(bullet, enemy)) {
                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
                score += 10;
                if (enemies.length == 0) {initializeGame()};
            }
        })
        bullets.forEach((bulletObject, bulletObjectIndex) => {
            if (bulletIndex !== bulletObjectIndex) {
                if (bullet.x >= bulletObject.x - bulletSize && bullet.x <= bulletObject.x + bulletSize) {
                    if (bullet.y <= bulletObject.y + bulletSize && bullet.y >= bulletObject.y - bulletSize) {
                        bullets.splice(bulletIndex, 1);
                        if (bulletIndex < bulletObjectIndex) {
                            bullets.splice(bulletObjectIndex - 1, 1);
                        } else {
                            bullets.splice(bulletObjectIndex, 1);
                        }
                    }
                }
            }
        })
        if (bullet.x >= player.x && bullet.x <= player.x + characterSize) {
            if (bullet.y >= player.y && bullet.y <= player.y + characterSize) {
                clearInterval(gameLoop);
                alert(`Game over !!! Your score is ${score}`);
                initializeGame();
            }
        }
    })
}

function enemyShoot() {
    const enemy = enemies[getRndInteger(0, enemies.length - 1)];
    shootBullet(1, enemy.x, enemy.y + characterSize + 1);
    setTimeout(() => {
        enemyShoot();
    }, getRndInteger(700, 1000));
}

function handleInput(key) {
    switch (key) {
        case "a":
            movePlayer(-1);
            break;
        case "d":
            movePlayer(1)
            break;
        case "w":
            if (canShoot) {
                canShoot = false;
                shootBullet(-1, player.x, player.y + 1);
                setTimeout(() => {canShoot = true}, 800);
            }
            break;
    }
}

document.onkeydown = (e) => {
    handleInput(e.key);
}

function initializeGame() {
    enemies = [];
    bullets = [];
    score = 0;
    player = {
        x: canvas.width / 2,
        y: 500
    };
    createEnemies();
    gameLoop = setInterval(() => {
        updateEnemies();
        updateBullets();
        Render();
        checkBulletCollision();
    }, 1000 / 60)
    enemyShoot();
}

window.onload = () => {
    initializeGame();
}