const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
let rain = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

pen.strokeStyle = "blue";
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createDrops() {
    for (let i = 0; i < 1000; i++) {
        const drop = {
            x: getRndInteger(0, canvas.width),
            y: getRndInteger(-canvas.height  * 2, 0),
            length: getRndInteger(10, 40),
            width: getRndInteger(1, 3)
        }
        rain.push(drop);
    }
}

function updateRain() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    rain.forEach((drop) => {
        pen.beginPath();
        pen.lineWidth = drop.width;
        pen.moveTo(drop.x, drop.y);
        pen.lineTo(drop.x, drop.y + drop.length);
        drop.y += (drop.length + drop.width) / 3;
        if (drop.y > canvas.width + drop.length) {
            drop.x = getRndInteger(0, canvas.width);
            drop.y = getRndInteger(-canvas.height, -10);
        }
        pen.stroke();
    })
    requestAnimationFrame(updateRain);
}

createDrops();
updateRain();