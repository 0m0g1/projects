import Vector2D from "./Vector2D.js";

class Spring2D {
    constructor(pen = null, a = null, b = null, stiffness = 0.01) {
        this.a = a;
        this.b = b;
        this.pen = pen;
        this.restingLenght = this.b.position.distanceTo(this.a.position);
        this.stiffness = stiffness;
        this.displacement = 0;
        this.force = new Vector2D();
        this.width = 3.5;
        this.drawStyle = {
            color: "black",
            width: 1
        }
        // this.constrainLength = this.restingLenght + 10;
    }
    getForceAndDisplacement() {
        const force = this.b.position.copy().subtract(this.a.position);

        const displacement = force.magnitude() - this.restingLenght;

        if (displacement === 0) return;

        force.normalize().scalarMultiply(this.stiffness * displacement)

        this.force = force;
        this.displacement = displacement;
    }
    stretchSpringLine() {
        this.getForceAndDisplacement();
        const shrinkRatio = 0.005;
        this.drawStyle.width = this.width - (this.displacement * shrinkRatio);
    }
    update() {
        this.getForceAndDisplacement();
        this.a.applyForce(this.force); 
        this.force.scalarMultiply(-1);
        this.b.applyForce(this.force);
    }
    show() {
        let tempLineWidth = null;
        let tempLineColor = null;

        if (this.pen.lineWidth != this.width) {
            tempLineWidth = this.pen.lineWidth;
            this.pen.lineWidth = this.drawStyle.width;
        }
        if (this.pen.strokeStyle != this.drawStyle.strokeColor) {
            tempLineColor = this.pen.strokeStyle;
            this.pen.strokeStyle = this.drawStyle.color;
        }

        this.stretchSpringLine();
        this.pen.beginPath();
        this.pen.moveTo(this.a.position.x, this.a.position.y);
        this.pen.lineTo(this.b.position.x, this.b.position.y);
        this.pen.stroke();
        this.pen.closePath();

        if (tempLineWidth != null) { this.pen.lineWidth = tempLineWidth; }
        if (tempLineColor != null) { this.pen.strokeStyle = tempLineColor; }
    }
}

export default Spring2D;