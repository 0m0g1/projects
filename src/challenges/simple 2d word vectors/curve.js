import Vector2D from "./Vector2D.js";

class QuadraticBezierCurve {
    constructor(pen = null) {
        this.pen = pen;
        this.start = null;
        this.end = null;
        this.control1 = null;
        this.control2 = null;
        this.pointRadius = 10;
        this.points = 100;
        this.selected = false;
    }
    getQuadraticBezierPointAt(t) {
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;

        const p = {};
        p.x = uuu * this.start.position.x + 3 * uu * t * this.control1.position.x + 3 * u * tt * this.control2.position.x + ttt * this.end.position.x;
        p.y = uuu * this.start.position.y + 3 * uu * t * this.control1.position.y + 3 * u * tt * this.control2.position.y + ttt * this.end.position.y;
        
        return p;
    }
    getcotrols() {
        this.control1 = this.start.control2;
        this.control2 = this.end.control1;
    }
    show() {
        this.pen.beginPath();
        this.pen.fillStyle = "black";
        this.pen.arc(this.start.position.x, this.start.position.y, this.pointRadius, 0, 2 * Math.PI);
        this.pen.globalAlpha = 0.2;
        this.pen.fill();
        this.pen.globalAlpha = 1;
        this.pen.stroke();
        
        if (this.end != null) {
            this.pen.beginPath();
            this.pen.moveTo(this.start.position.x, this.start.position.y);
            
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

            this.start.show();
            this.end.show();
        }
    }
}

export default QuadraticBezierCurve;