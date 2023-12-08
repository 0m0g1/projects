const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const stars = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let mouseCoords = {
    startX: 0,
    startY: 0
}
let speed = 0.02;
let isDragging = false;

pen.fillStyle = "white";
pen.strokeStyle = "white";
function getRndNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createStars() {
    for (let i = 0; i < 1000; i++) {
        const star = {
            x: Math.floor(getRndNumber(-canvas.width, canvas.width)),
            y: Math.floor(getRndNumber(-canvas.height, canvas.height)),
            z: getRndNumber(0, 1),
            projectedX: 0,
            projectedY: 0,
            size: 0,
            trail: []
        }
        stars.push(star);
    }
}

function updateStars() {
    stars.forEach((star) => {
        star.projectedX = center.x + (star.x / star.z);
        star.projectedY = center.y +(star.y / star.z);
        star.size = (0.8 / star.z);
        star.z -= speed;
       
        if (star.trail.length < 4) {
            star.trail.unshift({
                x: star.projectedX,
                y: star.projectedY
            })
        } else {
            star.trail.pop();
        }
        if (star.z <= 0.02) {
            star.x = Math.floor(getRndNumber(-canvas.width, canvas.width)),
            star.y = Math.floor(getRndNumber(-canvas.height, canvas.height)),
            star.z = 1
            star.trail = [];
        }
    })
}

function drawStars() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    stars.forEach((star) => {
        pen.beginPath();
        // pen.arc(star.projectedX, star.projectedY, star.size, 0, 2 * Math.PI);
        // pen.fill();
        pen.lineWidth = star.size / 3;
        pen.moveTo(star.projectedX, star.projectedY)
        star.trail.forEach((point) => {
            pen.lineTo(point.x, point.y);
            pen.lineWidth -= 0.05;
        })
        pen.stroke();
    })
    requestAnimationFrame(drawStars);
}

document.onmousedown = (e) => {
    mouseCoords.x = e.clientX
    isDragging = true;
}

document.onmousemove = (e) => {
    if (!isDragging) return;

    const delta = (e.clientX - mouseCoords.x) * 0.00001;
    speed += delta;
    if (speed >= 0.1) speed = 0.1;
    if (speed <= 0.00001) speed = 0.01
}

document.onmouseup = () => {
    isDragging = false;
}

document.ontouchstart = (e) => {
    mouseCoords.x = e.touches[0].clientX;
    isDragging = true;
}

document.ontouchmove = (e) => {
    if (!isDragging) return;

    const delta = (e.touches[0].clientX - mouseCoords.x) * 0.00001;
    speed += delta;
    if (speed >= 0.1) speed = 0.1;
    if (speed <= 0.00001) speed = 0.01
}

document.ontouchend = () => {
    isDragging = false;
}

createStars();
drawStars();