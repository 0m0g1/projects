import Particle2D from "./Particle2D.js";
import Spring from "./Spring2D.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

const a = new Particle2D(center.x, center.y - 200);
const b = new Particle2D(center.x, center.y + 100);
const spring = new Spring(a, b, 0.01);

function show() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.arc(a.x, a.y, 16, 0, 2 * Math.PI);
    pen.fill();
    pen.beginPath();
    pen.moveTo(a.x, a.y);
    pen.lineTo(b.x, b.y);
    pen.stroke();
    pen.beginPath();
    pen.arc(b.x, b.y, 16, 0, 2 * Math.PI);
    pen.fill();
}

function updatePhysicsWorld() {
    spring.update();
    show();
    requestAnimationFrame(updatePhysicsWorld);
}


updatePhysicsWorld();