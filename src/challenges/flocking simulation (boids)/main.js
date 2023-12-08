import Flock from "./flock.js";

const alignmentLabel = document.querySelector("#alignment-label");
const cohesionLabel = document.querySelector("#cohesion-label");
const repulsionLabel = document.querySelector("#repulsion-label");
const alignmentSlider = document.querySelector("#alignment");
const cohesionSlider = document.querySelector("#cohesion");
const repulsionSlider = document.querySelector("#repulsion");
const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const flock = new Flock(pen);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function simulate() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    flock.update();
    const particleDiameter = 16;
    flock.boids.forEach((boid) => {
        if (boid.position.x < -particleDiameter) {
            boid.position.x = canvas.width + particleDiameter;
        }
        if (boid.position.x > canvas.width + particleDiameter) {
            boid.position.x = -particleDiameter;
        }
        if (boid.position.y < -particleDiameter) {
            boid.position.y = canvas.height + particleDiameter;
        }
        if (boid.position.y > canvas.height + particleDiameter) {
            boid.position.y = -particleDiameter;
        }

    })
    requestAnimationFrame(simulate);
}

function startSimulation() {
    const boids = getRndInt(200, 200);
    
    for (let i = 0; i < boids; i++) {
        const x = getRndInt(0, canvas.width);
        const y = getRndInt(0, canvas.height);
        flock.createBoid(x, y);
    }

    simulate()
}

window.onload = () => {
    startSimulation();
}

alignmentSlider.oninput = () => {
    flock.boids.forEach((boid) => {
        boid.alignment = alignmentSlider.value;
    })
    alignmentLabel.innerHTML = alignmentSlider.value;
}
cohesionSlider.oninput = () => {
    flock.boids.forEach((boid) => {
        boid.attraction = cohesionSlider.value;
    })
    cohesionLabel.innerHTML = cohesionSlider.value;
}
repulsionSlider.oninput = () => {
    flock.boids.forEach((boid) => {
        boid.repulsion = repulsionSlider.value;
    })
    repulsionLabel.innerHTML = repulsionSlider.value;
}