import Vector2D from "./Vector2D.js";

const twoPI = 2 * Math.PI;

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Boid{
    constructor(pen = null, x, y) {
        this.pen = pen;   
        this.position = new Vector2D(x, y);
        this.velocity = new Vector2D().randomVelocity();
        this.acceleration = new Vector2D();
        this.fieldOfView = 100;
        this.maxSteering = 0.5;
        this.maxVelocity = 4;
        this.alignment = 1;
        this.attraction = 1;
        this.repulsion = 1;
    }
    repulse(boids) {
        const desiredPosition = new Vector2D();
        boids.forEach((neighbour) => {
            const distanceToNeighbour = this.position.distanceTo(neighbour.position);
            if (distanceToNeighbour <= (this.fieldOfView) && distanceToNeighbour != 0) {
                const direction = this.position.copy().subtract(neighbour.position);
                direction.scalarDivide(distanceToNeighbour);
                desiredPosition.add(direction);
                desiredPosition.scalarDivide(2);
            }
        });
        return desiredPosition;
    }
    cohesion(boids) {
        const desiredPosition = new Vector2D();
        boids.forEach((neighbour) => {
            const distanceToNeighbour = this.position.distanceTo(neighbour.position);
            if (distanceToNeighbour <= this.fieldOfView && distanceToNeighbour != 0) {
                const direction = neighbour.position.copy().subtract(this.position);
                desiredPosition.add(direction.limit(this.maxSteering));
                desiredPosition.scalarDivide(2);
            }
        });
        return desiredPosition;
    }
    align(boids) {
        const desiredVelocity = new Vector2D();
        boids.forEach((neighbour) => {
            const distanceToNeighbour = this.position.distanceTo(neighbour.position);
            if (distanceToNeighbour <= this.fieldOfView && distanceToNeighbour != 0) {
                desiredVelocity.add(neighbour.velocity);
                desiredVelocity.scalarDivide(2);
            }
        });
        return desiredVelocity;
    }
    flock(boids){
        const alignment = this.align(boids).scalarMultiply(this.alignment);
        const cohesion = this.cohesion(boids).scalarMultiply(this.attraction);
        const repulsion = this.repulse(boids).scalarMultiply(this.repulsion);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(repulsion);
    }
    update() {
        this.velocity.add(this.acceleration);
        this.acceleration = new Vector2D();
        this.velocity.setMagnitude(this.maxVelocity);
        this.position.add(this.velocity);
    }
    show() {
        this.pen.beginPath();
        this.pen.arc(this.position.x, this.position.y, 8, 0, twoPI);
        this.pen.fill();
    }
}

export default Boid;