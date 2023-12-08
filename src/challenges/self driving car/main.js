import car from "./car.js";
import Path from "./path.js";

let isDrawing = false;
const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const boundary = {
    startX: 0,
    endX: canvas.width,
    startY: 0,
    endY: canvas.height
}

const path = new Path(pen, boundary);
const Car = new car(pen);

document.onmousedown = (e) => {
    if (e.ctrlKey) {
        if (e.button == 0) {
            isDrawing = true;
        }
    }
}

function startSimulation() {
    
}


document.onmousemove = (e) => {
    if (!isDrawing) return;
    path.addPoint(e.clientX, e.clientY);
    if (path.points.length == 1) {
        Car.position.x = path.points[0].x;
        Car.position.y = path.points[0].y;
    }
    pen.clearRect(0, 0, canvas.width, canvas.height);
    path.show();
    Car.show();
}

document.onmouseup = () => {
    isDrawing = false;
}

// drawPath();