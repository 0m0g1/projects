class node {
    constructor(pen = null, data) {
        this.pen = pen;
        this.data = data;
        this.next = null;
    }
    show(x, y) {
        this.pen.beginPath();
        this.pen.arc(x, y, 40, 0, 2 * Math.PI);
        this.pen.stroke();
        this.pen.fillText(this.data, x - 10, y);
    }
}

export default node;