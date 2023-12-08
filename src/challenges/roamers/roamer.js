import Vector2D from "./Vector2D.js";

const twoPI = 2 * Math.PI;

class Roamer {
    constructor(pen = null, x = 0, y = 0, category = 0) {
        this.position = new Vector2D(x, y);
        this.pen = pen;
        this.color = "black";
        this.category = category;
        this.closestRoamer = null;
        this.color = "black";
        this.getColor();
    }
    getColor() {
        if (this.category == 1) {
            this.color = "red";
        }
        if (this.category == 2) {
            this.color = "green";
        }
        if (this.category == 3) {
            this.color = "blue";
        }
    }
    constrain() {
        if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.x > window.innerWidth) {
            this.position.x = window.innerWidth;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        if (this.position.x > window.innerHeight) {
            this.position.y = window.innerHeight;
        }
    }
    getClosestRoamer(roamers) {
        let smallestDistance = 100;

        roamers.forEach((roamer) => {
            if (roamer.category != this.category) {
                const distaceToRoamer = roamer.position.distanceTo(this.position);
                if (distaceToRoamer < 20) return;

                if (distaceToRoamer < smallestDistance) {
                    smallestDistance = distaceToRoamer;
                    this.closestRoamer = roamer;
                }
            }
        });

    }
    move() {
        if (this.closestRoamer == null) return;

        const direction = this.closestRoamer.position.copy().subtract(this.position);
        direction.normalize().scalarMultiply(2);
        this.position.add(direction);
    }
    show() {
        this.pen.beginPath();
        this.pen.arc(this.position.x, this.position.y, 5, 0, twoPI);
        this.pen.fillStyle = this.color;
        this.pen.fill();
    }
}

export default Roamer;