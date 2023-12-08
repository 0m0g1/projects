import Vector2D from "./Vector2D.js";
import QuadraticBezierCurve from "./curve.js";

class Path {
    constructor(pen = null) {
        this.pen = pen;
        this.points = [];
        this.paths = [];
        this.pathsNo = this.paths.length;
        this.currentCurve = new QuadraticBezierCurve(this.pen);
        this.previousSelectedCurve = null;
        this.selectedCurve = null;
    }
    getPointClosetTo(x, y) {
        const point = new Vector2D(x, y);
        const threshold = 20;
        for (let i = 0; i < this.paths.length; i++) {
            for (let j = 0; j < this.paths[i].length; j++) {
                const curve = this.paths[i][j];
                if (point.distanceTo(curve.start) < threshold) {
                    this.previousSelectedCurve = this.selectedCurve;
                    this.selectedCurve = curve;
                    return curve.start;
                }
                if (point.distanceTo(curve.control) < threshold) {
                    this.previousSelectedCurve = this.selectedCurve;
                    this.selectedCurve = curve;
                    return curve.control;
                }
                if (point.distanceTo(curve.end) < threshold) {
                    this.previousSelectedCurve = this.selectedCurve;
                    this.selectedCurve = curve;
                    return curve.end;
                }
            }
        }
    }
    addPoint(x, y) {
        if (this.currentCurve.start == null) {
            this.currentCurve.start = new Vector2D(x, y);
            this.createNewPath();
            this.paths[this.pathsNo].push(this.currentCurve);
            
        } else if (this.currentCurve.end == null) {
            const endPoint = new Vector2D(x, y);
            this.currentCurve.end = endPoint;
            this.currentCurve.getControl();

            if (this.paths[this.pathsNo][0].start.distanceTo(this.currentCurve.end) < 10) {
                this.currentCurve.end = this.paths[this.pathsNo][0].start;
                this.paths[this.pathsNo].push(this.currentCurve);
                this.currentCurve = new QuadraticBezierCurve(this.pen);
                return;
            }

            this.paths[this.pathsNo].push(this.currentCurve);
            this.currentCurve = new QuadraticBezierCurve(this.pen);
            this.currentCurve.start = endPoint;
        }
    }
    createNewPath() {
        this.paths.push([]);
        this.pathsNo = this.paths.length - 1;
    }
    show() {
        this.paths.forEach((path) => {
            path.forEach((curve) => {
                curve.show();
            })
        })
    }
}

export default Path;