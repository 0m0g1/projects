import Vector2D from "./Vector2D.js";

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1))+min;
}

class Path {
    constructor(pen = null, limits = null) {
        this.pen = pen;
        this.limits = limits;
        this.points = [];
    }
    addPoint(x, y) {
        this.points.push({x: x, y: y});
    }
    show() {
        this.pen.fillStyle = "black";
        this.pen.lineWidth = 20;
        this.pen.beginPath();
        this.pen.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach((point) => {
            this.pen.lineTo(point.x, point.y);
        })
        this.pen.stroke();
    }
}

export default Path;