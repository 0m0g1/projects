import Path from "./path.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const path = new Path(pen);
const isDrawing = {
    startingPoint: false,
    endPoint: false
}
let grabbedPoint = null;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

function grabPoint(x, y) {
    path.paths.forEach((path) => {
        path.forEach((curve) => {
            curve.start.selected = false;
            if (curve.end != null){
                curve.end.selected = false;
            }
        })
    })
    
    grabbedPoint = path.getPointClosetTo(x, y);

    canvas.style.cursor = "grab";
    if (grabbedPoint != null) {
        showPath();
        return;
    }
    
    path.paths.forEach((path) => {
        path.forEach((curve) => {
            curve.start.selected = false;
            if (curve.end != null){
                curve.end.selected = false;
            }
        })
    })
    canvas.style.cursor = "auto";

    showPath();
}

function movePoint(x, y) {
    grabbedPoint.position.x = x;
    grabbedPoint.position.y = y;
    showPath();
}

document.onkeydown = (e) => {
    if (e.key == "Control") {
        canvas.style.cursor = "crosshair";
    }
}

document.onkeyup = (e) => {
    if (e.key == "Control") {
        canvas.style.cursor = "auto";
    }
}

document.onmousedown = (e) => {
    if (e.ctrlKey) {
        if (e.button == 0) {
            path.addPoint(e.clientX, e.clientY);
            showPath();
        }
    } else {
        if (e.button == 0) {
            grabPoint(e.clientX, e.clientY)
        }
    }
}

document.onmousemove = (e) => {
    if (grabbedPoint == null) return;
    
    movePoint(e.clientX, e.clientY);
}

document.onmouseup = () => {
    if (grabbedPoint == null) return;

    grabbedPoint = null;
    canvas.style.cursor = "auto";
}

function showPath() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    path.show();
}

window.onload = () => {
    alert("Press 'ctrl + leftClick' to add a point to the curve");
}