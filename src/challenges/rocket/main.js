import Particle from "./Particle.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

const particle = new Particle(pen);
particle.position.x = center.x;
particle.position.y = center.y;
particle.show()