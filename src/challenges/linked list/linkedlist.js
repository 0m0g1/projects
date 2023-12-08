import node from "./node.js";

class linkedList {
    constructor(pen) {
        this.pen = pen;
        this.head = null;
        this.spacing = 100;
    }
    append(data) {
        const newnode = new node(this.pen, data);
        if (this.head == null) {
            this.head = newnode;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newnode;
        }
    }
    show() {
        let currentNode = this.head;
        let no = 0;
        while (currentNode.next != null) {
            currentNode.show(this.spacing * no + 200, 250);
            currentNode = currentNode.next;
            no++;
        }
    }
}

export default linkedList;