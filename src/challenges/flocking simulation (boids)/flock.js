import Boid from "./boid.js";

class Flock {
    constructor(pen = null) {
        this.pen = pen;
        this.boids = [];
    }
    createBoid(x, y) {
        const boid = new Boid(this.pen, x, y);
        this.boids.push(boid);
    }
    update() {
        this.boids.forEach((boid) => {
            boid.flock(this.boids)
            boid.update();
            boid.show();
        })
    }
}

export default Flock;