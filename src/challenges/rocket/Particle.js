import Vector2D from "./Vector2D.js";

const twoPi = 2 * Math.PI;

class Particle{
    constructor(pen) {
        this.pen = pen;
        this.position = new Vector2D();
        this.radius = 8;
    }
    show() {
        this.pen.arc(this.position.x, this.position.y, this.radius, 0, twoPi);
        this.pen.fill();
    }
}

export default Particle;