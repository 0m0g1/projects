// const canvas = document.querySelector("#canvas");
// const pen = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const center = {
//     x: canvas.width / 2,
//     y: canvas.height / 2
// }

// const originalWidth = 500;

// let iritations = 0;

// function subdivide(x, y, width) {
//     pen.clearRect(x, y, width, width);
//     for (let i = -1; i < 2; i++) {
//         for (let j = -1; j < 2; j++) {
//             if(iritations >= 10) return;
//             subdivide(i * newSquareWidth + x, j * newSquareWidth + y, width / 3);
//         }
//     }
// }

// function drawSquare(x, y, width) {
//     pen.moveTo(x, y);
//     pen.fillRect(x, y, width, width);
//     pen.fill();
//     const newSquareWidth = originalWidth / 2;
//     for (let i = -1; i < 2; i++) {
//         for (let j = -1; j < 2; j++) {
//             if(iritations >= 10) return;
//             subdivide(i * newSquareWidth + x, j * newSquareWidth + y, width / 3);
//         }
//     }
// }

// drawSquare(center.x - originalWidth / 2, center.y - originalWidth / 2, 500);