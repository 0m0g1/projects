import Vector2D from "./Vector2D.js";

class QuadraticBezierCurve {
    constructor(pen = null) {
        this.pen = pen;
        this.start = null;
        this.end = null;
        this.control = null;
        this.pointRadius = 10;
        this.points = 100;
        this.selected = false;
    }
    getQuadraticBezierPointAt(t) {
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;

        const p = {};
        p.x = uu * this.start.x + 2 * u * t * this.control.x + tt * this.end.x;
        p.y = uu * this.start.y + 2 * u * t * this.control.y + tt * this.end.y;
        
        return p;
    }
    getControl() {
        this.control = new Vector2D().add(this.start).add(this.end).scalarDivide(2);
        // this.control.x += 10;
        // this.control.y += 10;
    }
    show() {
        const halfPointRadius = this.pointRadius / 2;
        
        this.pen.beginPath();
        this.pen.fillStyle = "black";
        this.pen.arc(this.start.x, this.start.y, this.pointRadius, 0, 2 * Math.PI);
        this.pen.globalAlpha = 0.2;
        this.pen.fill();
        this.pen.globalAlpha = 1;
        this.pen.stroke();
        
        if (this.end != null) {
            this.pen.beginPath();
            this.pen.moveTo(this.start.x, this.start.y);
            
            if (this.selected) {
                this.pen.lineWidth = 3;
            }
            for (let i = 0; i <= this.points; i++) {
                let t = i / this.points;
                const point = this.getQuadraticBezierPointAt(t);
                this.pen.lineTo(point.x, point.y);
            }
            this.pen.stroke();
            this.pen.lineWidth = 1;
            
            //Draw Control
            this.pen.beginPath();
            if (this.selected) {
                this.pen.strokeStyle = "#00a4eb";
            } else {
                this.pen.strokeStyle = "black";
            }
            this.pen.strokeRect(this.control.x - halfPointRadius, this.control.y - halfPointRadius, this.pointRadius, this.pointRadius)
            this.pen.strokeStyle = "black";
            
            //Draw Endpoint
            this.pen.beginPath();
            this.pen.fillStyle = "black";
            this.pen.arc(this.end.x, this.end.y, this.pointRadius, 0, 2 * Math.PI);
            this.pen.globalAlpha = 0.2;
            this.pen.fill();
            this.pen.globalAlpha = 1;
            this.pen.stroke();
            this.pen.lineWidth = 1;
        }
    }
}

export default QuadraticBezierCurve;