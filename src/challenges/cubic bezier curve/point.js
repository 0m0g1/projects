import Vector2D from "./Vector2D.js";

class Point{
    constructor(pen = null, x, y) {
        this.pen = pen;
        this.selected = false;
        this.position = new Vector2D(x, y);
        this.control1 = {position: new Vector2D(x, y)};
        this.control2 = {position: new Vector2D(x, y)};
        this.radius = 10;
        this.showPoint = true;
    }
    show() {
        const halfRadius = this.radius / 2;
        if (this.showPoint == false) return;

        this.pen.beginPath();
        this.pen.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.pen.globalAlpha = 0.2;
        this.pen.fill();
        this.pen.globalAlpha = 1;
        this.pen.stroke();

        if (this.selected) {
            //Draw the lines to the contorls
            this.pen.strokeStyle = "dark grey";
            this.pen.beginPath();
            this.pen.moveTo(this.position.x, this.position.y);
            this.pen.lineTo(this.control1.position.x, this.control1.position.y);
            this.pen.moveTo(this.position.x, this.position.y);
            this.pen.lineTo(this.control2.position.x, this.control2.position.y);
            this.pen.stroke();
            
            //Draw control1 and control2
            this.pen.beginPath();
            this.pen.strokeStyle = "#00a4eb";
            this.pen.strokeRect(this.control1.position.x - halfRadius, this.control1.position.y - halfRadius, this.radius, this.radius)
            this.pen.strokeRect(this.control2.position.x - halfRadius, this.control2.position.y - halfRadius, this.radius, this.radius)
            this.pen.strokeStyle = "black";
        }

    }
}

export default Point;