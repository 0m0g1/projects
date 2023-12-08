function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(Vector) {
        this.x += Vector.x;
        this.y += Vector.y;
        return this;
    }
    subtract(Vector) {
        this.x -= Vector.x;
        this.y -= Vector.y;
        return this;
    }
    scalarMultiply(Scalar) {
        this.x *= Scalar;
        this.y *= Scalar;
        return this;
    }
    setMagnitude(magnitude) {
        const scale = magnitude / this.magnitude();
        return this.scalarMultiply(scale);
    }
    vectorMultiply(Vector) {
        this.x *= Vector.x;
        this.y *= Vector.y;
        return this;
    }
    scalarDivide(Scalar) {
        this.x /= Scalar;
        this.y /= Scalar;
        return this;
    }
    Vector2Divide(Vector) {
        this.x /= Vector.x;
        this.y /= Vector.y;
        return this;
    }
    distanceTo(Vector) {
        return Math.sqrt((this.x - Vector.x) ** 2 + (this.y - Vector.y) ** 2);
    }
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    dot(Vector) {
        return this.x * Vector.x + this.y * Vector.y;
    }
    normalize() {
        this.x /= this.magnitude();
        this.y /= this.magnitude();
        return this;
    }
    angleBetween(Vector) {
        const angleInRadians = Math.atan2(Vector.y, Vector.x) - Math.atan2(this.y, this.x);
        const angleInDegrees = angleInRadians * (180 / Math.PI); // Convert to degrees if needed
        return angleInDegrees >= 0 ? angleInDegrees : 360 + angleInDegrees;
    }
    angleAround(pivot, targetVector) {
        const angleInRadians = Math.atan2(targetVector.y - pivot.y, targetVector.x - pivot.x) - Math.atan2(this.y - pivot.y, this.x - pivot.x);
        const angleInDegrees = angleInRadians * (180 / Math.PI); // Convert to degrees if needed
        return angleInDegrees >= 0 ? angleInDegrees : 360 + angleInDegrees;
    }    
    rotate(degrees) {
        const radians = (Math.PI / 180) * degrees; // Convert degrees to radians
        const newX = this.x * Math.cos(radians) - this.y * Math.sin(radians);
        const newY = this.x * Math.sin(radians) + this.y * Math.cos(radians);
        this.x = newX;
        this.y = newY;
        return this;
    }
    rotateAround(pivot, degrees) {
        const radians = (Math.PI / 180) * degrees; // Convert degrees to radians
    
        // Translate the vector to the pivot point
        const translatedX = this.x - pivot.x;
        const translatedY = this.y - pivot.y;
    
        // Perform the rotation
        const newX = translatedX * Math.cos(radians) - translatedY * Math.sin(radians);
        const newY = translatedX * Math.sin(radians) + translatedY * Math.cos(radians);
    
        // Translate the vector back to its original position
        this.x = newX + pivot.x;
        this.y = newY + pivot.y;
    
        return this;
    }
    randomDirection() {
        const velocityX = Math.random() * 2 - 1;
        const velocityY = Math.random() * 2 - 1;

        if (velocityX == 0 && velocityY == 0) {
            return this.randomDirection();
        }

        return new Vector2D(velocityX, velocityY).normalize();
    }
    randomVelocity() {
        return this.randomDirection();
    }
    align(velocities) {
        velocities.forEach((velocity) => {
            this.add(velocity);
        });
        this.scalarDivide(velocities.length + 1);
        return this;
    }
    lowest(min) {
        if (this.magnitude() < min) {
            this.normalize();
            this.setMagnitude(min);
        }
        return this;
    }
    limit(limit) {
        if (this.magnitude() > limit) {
            this.normalize();
            this.setMagnitude(limit);
        }
        return this;
    }
    clamp(min, max) {
        if (this.magnitude() < min) {
            this.normalize();
            this.setMagnitude(min);
        }
        if (this.magnitude() > max) {
            this.normalize();
            this.setMagnitude(max);
        }
        return this;
    }
    // getForce(Vector) {
    
    // }
    copy() {
        return new Vector2D(this.x, this.y);
    }
}

export default Vector2D;