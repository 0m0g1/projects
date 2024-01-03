const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

function collatz(n) {
    if (n % 2 === 0) {
        return n / 2;
    }
    return (n * 3) + 1;
}

function rotatePoint(point, angle) {
    angle = angle * Math.PI / 180;
    const x = point.x * Math.cos(angle) - point.y * Math.sin(angle);
    const y = point.x * Math.sin(angle) + point.y * Math.cos(angle);
    return {x: x, y: y};
}

function drawBranch(digit) {
    digit = digit == 0? 1: digit;
    pen.moveTo(center.x, canvas.height - 2);
    let previousRotation = 0.0;
    let prevPoint = {x: center.x, y: canvas.height - 50}
    const rRot = -0.5;
    const lRot = 0.5;
    do {
        let point = {x: prevPoint.x, y: prevPoint.y - 5}
        digit = collatz(digit);
        point = rotatePoint(point, previousRotation - 1);
        if (digit % 2 == 0) {
            point = rotatePoint(point, lRot);
            previousRotation = lRot;
        } else {
            point = rotatePoint(point, rRot);
            previousRotation = rRot;
        }
        pen.lineTo(point.x, point.y);
        prevPoint = point;
    } while (digit !== 1);
    pen.stroke();
}

pen.lineWidth = 1.5;
pen.strokeStyle = "white";
pen.globalAlpha = 0.1;
pen.lineJoin = "round";

for (let i = 0; i < 50; i++) {
    drawBranch(i);
}

// drawBranch(50)