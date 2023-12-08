class MassPoint {
    constructor(radius) {
        this.x = 0;
        this.y = 0;
        this.radius = radius / 2;
        this.angle = 0;
        this.distance = 0;
        this.planets = [];
        this.pen = null;
    }
    createSatellites(n) {
        for (let i = 0; i < n; i++) {
            const satellite = new MassPoint(); 
        }
    }
    show() {
        this.pen.beginPath();
        this.pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.pen.fill();
    }
}

export default MassPoint;