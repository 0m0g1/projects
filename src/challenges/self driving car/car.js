import Vector2D from "./Vector2D.js"

class car {
    constructor(pen = null) {
        this.pen = pen;
        this.position = new Vector2D();
        this.acceleration = new Vector2D();
        this.velocity = new Vector2D();
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration = new Vector2D();
    }
    show() {
        this.pen.fillStyle = "#00a4eb";
        this.pen.beginPath();
        this.pen.fillRect(this.position.x, this.position.y, 10, 10);
    }
}

export default car;