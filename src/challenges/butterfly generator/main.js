const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const k = document.querySelector("#k");
const n = document.querySelector("#n");
const kLabel = document.querySelector("#k-label");
const nLabel = document.querySelector("#n-label");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let angle = 0;

k.onchange = (e) => {
    kLabel.innerHTML = k.value;
    start();
}

n.onchange = (e) => {
    nLabel.innerHTML = n.value;
    start();
}

pen.lineWidth = 0.5;

const PI = Math.PI;
const r = 200;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

pen.fillStyle = "#00a4eb";
function plotButterfly() {
    let xOffset = 0;
    for (let a = -PI / 2; a < PI / 2; a += 0.01) {
        const x = r * Math.cos(a) + center.x;
        const y = r * Math.sin(a) + center.y;
        if (a == -PI / 2) {
            pen.moveTo(x, y);
        } else {
            pen.lineTo(x, y);
        }
    }
    pen.fill()
    for (let a = PI / 2; a > (-3* PI) / 2; a -= 0.01) {
        const x = r * Math.cos(a) + center.x;
        const y = r * Math.sin(a) + center.y;
        if (a == PI / 2) {
            pen.moveTo(x, y);
        } else {
            pen.lineTo(x, y);
        }
    }
    pen.stroke();
    pen.fill()
 
    requestAnimationFrame(plotButterfly);
}

function noise(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function start() {
    angle = 0;
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    plotButterfly();
}

window.onload = () => {
    kLabel.innerHTML = k.value;
    nLabel.innerHTML = n.value;
    start();
}