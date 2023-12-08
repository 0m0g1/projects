import Vector2D from "./Vector2D.js";

class Rope2D {
    constructor(pen = null, x = 0, y = 0, length = 100, segments = 10) {
        this.springs = [];
        this.spacing = 50;
        this.segments = segments;
        this.particles = [];
        this.length = length;
        this.stiffness = 0.1;
        this.parentWorld = null;
        this.position = new Vector2D(x, y);
        this.particleRadius = 8;
        this.width = 3.5;
        this.constrainLength = null;
    }
    linkParticles() {
        const spacing = this.length / this.segments;
        this.spacing = spacing;

        for (let i = 0; i < this.segments; i++) {
            const particle = this.parentWorld.createParticle2D();
            particle.position.x = this.position.x;
            particle.position.y = this.position.y + (i * spacing);
            particle.radius = this.particleRadius;
            this.particles.push(particle);
        }
        for (let i = 1; i < this.particles.length; i++) {
            const spring = this.parentWorld.createSpring2D(this.particles[i], this.particles[i - 1], this.stiffness);
            if (spring != false) {
                spring.width = this.width;
                this.springs.push(spring);
            }
        }
    }
    show() {
        this.springs.forEach((spring) => {
            spring.show();
        })
        this.particles.forEach((particle) => {
            particle.show();
        })
    }
}

export default Rope2D;