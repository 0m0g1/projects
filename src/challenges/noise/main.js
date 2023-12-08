const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let seed = 0;
pen.lineWidth = 1;
function draw() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.moveTo(0, center.y + noise(seed) * 100);
    for (let i = 1; i < canvas.width; i++) {
        pen.lineTo(i, center.y - 100 + noise(seed + i / 100) * 200);
    }
    pen.stroke();
    seed += 0.01;
    requestAnimationFrame(draw)
}

function noise(seedf) {
    const x = Math.sin(seedf) * 10000;
    return x - Math.floor(x);
}

window.onload = () => {
    seed = 0;
    draw();
}