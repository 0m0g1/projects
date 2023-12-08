import Vector2D from "./Vector2D.js";
import QuadraticBezierCurve from "./curve.js";
import Point from "./point.js";

class Path {
    constructor(pen = null) {
        this.pen = pen;
        this.paths = [];
        this.pathsNo = this.paths.length;
        this.currentCurve = new QuadraticBezierCurve(this.pen);
        this.selectedPoint = null;
        this.showPoints = true;
    }
    getPointClosetTo(x, y) {
        const point = new Vector2D(x, y);
        const threshold = 8;
        for (let i = 0; i < this.paths.length; i++) {
            for (let j = 0; j < this.paths[i].length; j++) {
                const curve = this.paths[i][j];
                if (point.distanceTo(curve.start.position) < threshold) {                     
                    this.selectedPoint = curve.start;
                    this.selectedPoint.selected = true;
                    return curve.start;
                }
                if (this.showPoints == true) {
                    if (point.distanceTo(curve.start.control1.position) < threshold) {                 
                        this.selectedPoint = curve.start;
                        this.selectedPoint.selected = true;
                        return this.selectedPoint.control1;
                    }
                    if (point.distanceTo(curve.start.control2.position) < threshold) {                   
                        this.selectedPoint = curve.start;
                        this.selectedPoint.selected = true;
                        return this.selectedPoint.control2;
                    }
                }
                if (curve.end != null)    {
                    if (this.showPoints == true){
                        if (point.distanceTo(curve.end.control1.position) < threshold) {                
                            this.selectedPoint = curve.end;
                            this.selectedPoint.selected = true;
                            return curve.end.control1;
                        }
                        if (point.distanceTo(curve.end.control2.position) < threshold) {                
                            this.selectedPoint = curve.end;
                            this.selectedPoint.selected = true;
                            return curve.end.control2;
                        }
                    }
                    if (point.distanceTo(curve.end.position) < threshold) {                    
                        this.selectedPoint = curve.end;
                        this.selectedPoint.selected = true;
                        return curve.end;
                    }
                }
            }
        }
    }
    reset() {
        this.paths = [];
        this.pathsNo = 0;
        this.currentCurve = new QuadraticBezierCurve(this.pen);
        this.selectedPoint = null;
    }
    togglePoints() {
        if (this.showPoints == false) {
            this.showPoints = true;
        }
        else if (this.showPoints == true) {
            this.showPoints = false;
        }
        this.paths.forEach((path) => {
            path.forEach((curve) => {
                curve.end.showPoint = this.showPoints;
            })
        })
    }
    addPoint(x, y) {
        if (this.currentCurve.start == null) {
            this.currentCurve.start = new Point(this.pen, x, y);
            this.currentCurve.start.showPoint = this.showPoints;
            this.createNewPath();
            this.paths[this.pathsNo].push(this.currentCurve);
            
        } else if (this.currentCurve.end == null) {
            const endPoint = new Point(this.pen, x, y);
            endPoint.showPoint = this.showPoints;
            this.currentCurve.end = endPoint;
            this.currentCurve.getcotrols();
            
            if (this.paths[this.pathsNo][0].start.position.distanceTo(this.currentCurve.end.position) < 20) {
                this.currentCurve.end = this.paths[this.pathsNo][0].start;
                this.currentCurve.getcotrols();
                this.paths[this.pathsNo].push(this.currentCurve);
                this.currentCurve = new QuadraticBezierCurve(this.pen);
                return;
            }

            this.paths[this.pathsNo].push(this.currentCurve);
            this.currentCurve = new QuadraticBezierCurve(this.pen);
            this.currentCurve.start = endPoint;
        }
    }
    undo() {
        if (this.paths.length == 0) return;

        const curve = this.paths[this.pathsNo];
        if (curve.length > 1) {
            curve.pop();
        } else {
            if (curve[0].end != null) {
                curve[0].end = null;
            }  else {
                curve.pop();
                this.paths.pop();
                this.pathsNo--;
                if (this.paths.length == 0) {
                    this.reset();
                }
            }
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