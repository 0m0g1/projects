let planets = [];
const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}
const starRadius = 20;
const Radius = center.x - 400;
const spacing = Radius / 8;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getDistance(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function createPlanets() {
    const minOrbit = 100;

    for (let i = 0; i < 9; i++) {
        let angle = getRndInteger(0, 359);
        const planet = {
            x: 0,
            y: 0,
            angle: angle
        }
        planets.push(planet);
    }
}

function drawPlanets() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.arc(center.x, center.y, starRadius, 0, 2 * Math.PI);
    pen.fill();
    planets.forEach((planet) => {
        pen.beginPath();
        pen.arc(planet.x, planet.y, 5, 0, 2 * Math.PI);
        pen.fill();
    })
}

function updatePlanets() {
    planets.forEach((planet, i) => {
        if (i !== 0) {
            planet.angle += 0.04 / i;
            const xPos = center.x + Math.cos(planet.angle) * (spacing * i + starRadius * 2);
            const yPos = center.y + Math.sin(planet.angle) * (spacing * i + starRadius * 2);
            planet.x = xPos;
            planet.y = yPos;
        }
    })
    drawPlanets();
    requestAnimationFrame(updatePlanets);
}


createPlanets();
updatePlanets();