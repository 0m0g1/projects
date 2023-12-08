import Roamer from "./roamer.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const roamers = [];
const categories = 3;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getCategory(index) {
    for (let i = 2; i <= categories + 1; i++) {
        if ((index + 1) % i === 0) {
            return i - 1;
        }
    }
}

function createRoamers() {
    for (let i = 1; i < 100; i++) {
        const roamerPosition = {
            x: getRndInteger(0, canvas.width),
            y: getRndInteger(0, canvas.height),
        }
        let category = getCategory(i);
        const roamer = new Roamer(pen, roamerPosition.x, roamerPosition.y, category);

        roamers.push(roamer);
    }
}

function mainLoop() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    roamers.forEach((roamer) => {
        roamer.getClosestRoamer(roamers);
        roamer.move();
        roamer.constrain();
        roamer.show();
    })
    requestAnimationFrame(mainLoop);
}

window.onload = () => {
    createRoamers();
    mainLoop();
}